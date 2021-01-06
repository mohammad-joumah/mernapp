const router = require('express').Router();
const User = require('../model/User');

// find all users
router.get('/', (req, res) => {
    User.find()
        .then(users => { res.json(users) })
        .catch(err => res.status(404).json('Error' + err))
});

// create new user
router.post('/add', (req, res) => {
    const userName = req.body.username;
    const newUser = new User({ userName });
    newUser.save().then(user=>{res.json(user)});
})

module.exports = router;