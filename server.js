const express = require('express');
const session = require('express-session');
const sequelize = require('./db');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
