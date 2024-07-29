const express = require('express');
require('dotenv').config()

const app = express();
const bodyParser = require('body-parser');

const {connect,sequelize} = require('./util/database');
const User = require('./models/user');
const urlRoute = require('./routes/url')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/url', urlRoute)

sequelize.sync( /* {force: true} */   )
    .then(async (result) => {
        await connect();
        app.listen(3000);

    })
    .catch(err => { console.log(err); })


app.get('/', (req, res) => {
    res.send('test');
})


