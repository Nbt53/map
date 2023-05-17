require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const session = require('express-session');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const helmet = require('helmet');
const { styleSrcUrls, scriptSrcUrls, whiteList } = require('./whiteList');
const mapboxSdk = require('@mapbox/mapbox-sdk');


//variables for set up
const secret = process.env.SECRET
const port = 3000
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/template'
//set up mongoose store
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(dbUrl, connectionParams)
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

// mapbox////

const accessToken = process.env.MAPBOX_TOKEN; // Replace with your Mapbox access token
const mapboxClient = mapboxSdk({ accessToken });


//helmet

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", 'unsafe-inline', ...whiteList],
      scriptSrc: ["'self'", 'unsafe-inline', ...whiteList],
      styleSrc: ["'self'", 'unsafe-inline', ...whiteList],
      workerSrc: ["'self'", "blob:"],
      objectSrc: [],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
      ],
      fontSrc: ["'self'", "https://fonts.gstatic.com/"],
      mediaSrc: ["https://res.cloudinary.com/dv5vm4sqh/"],
      childSrc: ["blob:"]
    }
  })
);

app.use(session(sessionConfig));
app.use(methodOverride('_method'))

//set view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//to use css and js
app.use(express.static(__dirname + '/public', ));
app.use('/js', express.static('public', { 'extensions': ['js'], 'Content-Type': 'application/javascript' }));

app.get('/', (req, res) => {
  res.render('home')
})

// set up express
app.listen(port, () => { console.log(` Serving on ${port}. Press ctl + c to exit`) })