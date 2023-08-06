const express = require('express');
const path  = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// import { engine } from 'express-handlebars';n
const app = express();
const port = 8080;
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log('PATH :', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) =>{
  res.render('home')
})
app.get('/news', (req, res) =>{
  res.render('news')
})  
app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`)
})
