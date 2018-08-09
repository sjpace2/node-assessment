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
        if(filteredUsers[0]){
        res.status(200).send(filteredUsers[0])
        }else{
            res.status(404).json(null)
        }
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
    }, 

    getByUserType: (req, res) => {
        const {userType} = req.params;
        let filteredUsers = userData.filter(user=>{
            return user.type === userType
        })
        res.status(200).send(filteredUsers)
    },

    updateUser: (req, res) => {
        const {userId} = req.params;
      
        for(let i=0; i<userData.length; i++){
            if(userData[i].id === +userId){
                userData[i].first_name = req.body.first_name
                userData[i].last_name = req.body.last_name
                userData[i].email = req.body.email
                userData[i].gender = req.body.gender
                userData[i].language = req.body.language
                userData[i].age = req.body.age
                userData[i].city = req.body.city
                userData[i].state = req.body.state
                userData[i].type = req.body.type
                userData[i].favorites = req.body.favorites
            }
        }res.status(200).send(userData)
    },

    createUser: (req, res) => {
        let newUser = {id: userData.length + 1, ...req.body}
        userData.push(newUser)
        res.status(200).send(userData)
    },
    
    deleteUser: (req, res) => {
        const {userId} = req.params
        for(let i = 0; i<userData.length; i++){
            if(userData[i].id === +userId){
                userData.splice(i, 1)
            }
        }
        res.status(200).send(userData)
    }
}