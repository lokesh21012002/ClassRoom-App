const { Router } = require('express')
const bcrypt = require('bcrypt')
const Student=require('../Modal/studentModal')
const jwt = require('jsonwebtoken')
const StudentAuthRoute = Router();
StudentAuthRoute.post('/login', (req, res) => {
    Student.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err
        if (!user)
            return res.status(404).json({ msg: 'user email/password is invalid' })
        if (!bcrypt.compareSync(req.body.password, user.password))
            return res.status(404).json({ msg: 'user email/password is invalid' })
        const token = jwt.sign({ userId: user._id}, 'NULL')
        return res.status(200).json({ token: token })
    })
})
StudentAuthRoute.post('/register', (req, res) => {
    const HashPassword = bcrypt.hashSync(req.body.password, 10)
    const newUser = new Student({ name: req.body.name, password: HashPassword, email: req.body.email, institute: req.body.institute })
    newUser.save(err => {
        if (err)
            return res.json({ msg: 'email already exist' })
        else
            return res.status(200).json('User is registed')
    })
})
module.exports = StudentAuthRoute