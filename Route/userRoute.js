const { Router } = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Modal/userModal')
const UserRoute = Router();
UserRoute.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err
        if (!user)
            return res.status(404).json({ msg: 'user email/password is invalid' })
        if (!bcrypt.compareSync(req.body.password, user.password))
            return res.status(404).json({ msg: 'user email/password is invalid' })
        const token = jwt.sign({ userId: user._id,isTeacher }, 'NULL')
        return res.status(200).json({ token: token })
    })
})
UserRoute.post('/register', (req, res) => {
    const HashPassword = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({ name: req.body.name, password: HashPassword, email: req.body.email, institute: req.body.institute, isTeacher: req.body.isTeacher })
    newUser.save(err => {
        if (err)
            return res.json({ msg: 'email already exist' })
        else
            return res.status(200).json('User is registed')
    })
})
module.exports = UserRoute