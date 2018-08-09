const userData = require('./userData.json')

module.exports = {
    getUsers: (req, res) => {
       if(req.query.age){
           let filteredUsers = userData.filter(user=>{
               return user.age < req.query.age
           })
           res.status(200).send(filteredUsers)
       }
       else if(req.query.lastname){
           let filteredUsers = userData.filter(user=>{
               return user.last_name === req.query.lastname
           })
           res.status(200).send(filteredUsers)
       }
       else if(req.query.email){
           let filteredUsers = userData.filter(user=>{
               return user.email === req.query.email
           })
           res.status(200).send(filteredUsers)
       }
       else if(req.query.favorites){
           let filteredUsers = userData.filter(user=>{
               return user.favorites.includes(req.query.favorites)
           })
           res.status(200).send(filteredUsers)
       }
       else{
        res.status(200).send(userData)
       }
    },

    getUserById: (req, res) => {
        const {id} = req.params;
        let filteredUsers = userData.filter(user=>{
            return user.id === +id
        })
        res.status(200).send(filteredUsers)
    },

    getAdmins: (req, res) => {
        let filteredUsers = userData.filter(user=>{
            return user.type === "admin"
        })
        res.status(200).send(filteredUsers)
    },

    getNonAdmins: (req, res) => {
        let filteredUsers = userData.filter(user=>{
            return user.type !== "admin"
        })
        res.status(200).send(filteredUsers)
    }
}