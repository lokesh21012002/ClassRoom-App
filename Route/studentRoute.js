const { Router } = require('express')()
const jwt = require('jsonwebtoken')
const createClass = require('../Modal/createClassModal')
const studentRoute = Router()
studentRoute.post('/enrollclass', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
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
studentRoute.get('/enrollclass', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
        if (err) throw err
        createClass.findOne({ enrolledBy: decoded.userId }, (err, docs) => {
            if (err) throw err
            res.json({class:docs})
        })
    })
})