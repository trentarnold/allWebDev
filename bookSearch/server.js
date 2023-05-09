const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexrouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexrouter)
app.listen(process.env.PORT || 3000);
