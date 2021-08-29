const { Router } = require('express')()
const jwt=require('jsonwebtoken')
const teacherRouter = Router()
const Test = require('../Modal/testModal')
const Teacher=require('../Modal/teacherModal')
const createClass = require('../Modal/createClassModal')
const Assigment=require('../Modal/assigmentModal')
teacherRouter.post('/create/classroom', (req, res) => {
    const { token, subjectName, subjectCode, time,code } = req.body
    jwt.verify(token, "NULL", (err,decoded) => {
        if (err) throw err
        if (decoded.isTeacher)
        {
            const newClass = new createClass({ subjectName, subjectCode, time, code ,teacher:decoded.userId})
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
teacherRouter.get('/classes', (req, res) => {
    jwt.verify(token, "NULL", (err, decoded) => {
        if (err) throw err
        if (decoded.isTeacher)
        {
            createClass.findOne({ teacher: decoded.userId }, (err, docs) => {
                if(err) throw err
                res.json({classes:docs})
            })   
        }
        else {
            res.status(401).json({msg:"Invalid Token"})
        }
    })
})
teacherRouter.post('/create/test', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
      if(err) throw err
        Teacher.findById({ _id: decoded.userId }, (err, user) => {
            if (err) throw err
            if (!user)
                res.status(401).json({ error: "Access Denied" })
            else {
                const newTest = new Test({
                    name: req.body.name, subjectName: req.body.subjectName,
                    subjectCode: req.body.subjectCode, link: req.body.link,
                    date:req.body.date,creator:decoded.userId
                })
                newTest.save(err => {
                    if (err) throw err
                    res.json({msg:"Test is created successfully"})
                })    
            }
        })
    })
})
teacherRouter.post('/addmarks', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
        if (err) throw err
        Test.findOneAndUpdate({ creator: decoded.userId }, { marks: req.body.marks }, (err, docs) => {
            if (err) throw err
            res.json({msg:"Marks added"})
        })
    })
})
teacherRouter.post('/create/assigment', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
        if (err) throw err
        const newAssigment = new Assigment({
            name: req.body.name, subjectName: req.body.subjectName,
            subjectCode:req.body.subjectCode,creator:decoded.userId
        })
        newAssigment.save(err => {
            if (err) throw err
            res.json({msg:"Assigment Created Successfully"})
        })
    })
})
teacherRouter.post('/addassigment', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
        if (err) throw err
        Assigment.findOneAndUpdate({ creator: decoded.userId }, { done: req.body.done }, (err, docs) => {
            if (err) throw err
            res.json({msg:"Assigment Compeleted"})
        })
    })
})
