const express = require('express');
const bodyParser = require('body-parser');
let usersCtrl = require('./usersCtrl');

const app = express();
const port = 3000;

app.use(bodyParser.json())


app.get('/api/users', usersCtrl.getUsers)
app.get('/api/users/:id', usersCtrl.getUserById)
app.get('/api/admins', usersCtrl.getAdmins)
app.get('/api/nonadmins', usersCtrl.getNonAdmins)
app.get('/api/user_type/:userType', usersCtrl.getByUserType)
app.put('/api/users/:userId', usersCtrl.updateUser)
app.post('/api/users', usersCtrl.createUser)

app.listen(port, () => {
    console.log('listening on port', port)
})