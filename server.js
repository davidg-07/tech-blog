const path = require('path');
const express = require('express');
const session = require('express-session');
const router = require('./controllers/');
const hbsExpress = require('express-handlebars');
const app = express();
const hbs = hbsExpress.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(3001, () => {
    console.log('app is listening on port 3001')
});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new ({
      db: sequelize
    })
  };

  app.use(session(sess));