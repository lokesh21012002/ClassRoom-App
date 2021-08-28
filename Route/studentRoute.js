const { Router } = require('express')()
const jwt = require('jsonwebtoken')
const createClass = require('../Modal/createClassModal')
const studentRoute = Router()
studentRoute.get('/enrollclass', (req, res) => {
    jwt.verify(token, "NULL", (err, decoded) => {
        if (err) throw err
        const code = createClass.findOne({ code: req.body.code })
        if (code)
        {
            const newErolledBy = new createClass({ enrolledBy: decoded.userId })
            newErolledBy.save(err => {
                if (err) throw err
                res.json({msg:"You have Erolled"})
            })
        }
        else {
            res.status(401).json({error:"incorrect code"})
        }
    })   
})