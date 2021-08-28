const { Router } = require('express')()
const jwt=require('jsonwebtoken')
const teacherRouter = Router()
const createClass=require('../Modal/createClassModal')
teacherRouter.post('/create/classroom', (req, res) => {
    const { token, subjectName, subjectCode, time,code } = req.body
    jwt.verify(token, "NULL", (err,decoded) => {
        if (err) throw err
        if (decoded.isTeacher)
        {
            const newClass = new createClass({ subjectName, subjectCode, time, code })
            newClass.save(err => {
                if (err) throw err
                res.json({msg:"Successfully Created Class Room"})
            })
        }
        else {
            res.status(401).json({msg:"Invalid Token"})
        }
    })
})
teacherRouter.post('/create/test', (req, res) => {
    
})