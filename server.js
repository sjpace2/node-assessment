const express = require('express');
const bodyParser = require('body-parser');
let usersCtrl = require('./usersCtrl');

const app = express();
const port = 3000;

app.use(bodyParser.json())


app.get('/api/users', usersCtrl.getUsers)


app.listen(port, () => {
    console.log('listening on port', port)
})