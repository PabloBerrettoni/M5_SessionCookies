const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cookieParser());
app.use(session({
    secret:"validatorDG",
    resave:false,
    saveUninitialized:false
} ))

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);