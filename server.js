const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv').config()

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: parseInt(process.env.SESSION_COOKIE_MAXAGE),
    httpOnly: process.env.SESSION_COOKIE_HTTPONLY,
    secure: process.env.SESSION_COOKIE_SECURE,
    sameSite: process.env.SESSION_COOKIE_SAMESITE,
  },
  resave: process.env.SESSION_RESAVE,
  saveUninitialized: process.env.SESSION_SAVEUNINITIALIZED,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));





// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});


// models
// seeds
// views 