const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

const newsRoute = require('./src/routes/newsRoute');


// REGISTER VIEW ENGINE
app.set('views', './src/views');
app.set('view engine', 'ejs');

// STATIC FILES MIDDLEWARE
app.use(express.static('public'));

// FORM DATA MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/', newsRoute);

// Listen on Port 5000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));