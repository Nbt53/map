const mongoose = require('mongoose');
const express = require('express');
const app = express();
const session = require('express-session');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');

//variables for set up
const secret = '4684a58s4d78f54g1h2ddd58h'
const port = 3000
const dbUrl = 'mongodb://127.0.0.1:27017/template' 
//set up local mongoose store

mongoose.connect(dbUrl)
    .then(() => {
        console.log('database Connected')
    })
    .catch(err => {
        console.log('Mongo connection error')
        console.log(err)
    })

  // to parse objects
app.use(express.urlencoded({ extended: true }));

//config up sessions
const sessionConfig = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure:true,
    expires: Date.now() + 604800000,
    maxAge: 604800000
  }
}

app.use(session(sessionConfig));
app.use(methodOverride('_method'))

//set view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//to use css and js
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('home')
})

// set up express
app.listen(port, () => { console.log(` Serving on ${port}. Press ctl + c to exit`) })