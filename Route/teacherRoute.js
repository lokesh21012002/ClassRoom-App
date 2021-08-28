const { Router } = require('express')()
const jwt=require('jsonwebtoken')
const teacherRouter = Router()
teacherRouter.post('/createclassroom', (req, res) => {
    const { token, subjectName, subjectCode, time,code } = req.body
    
})