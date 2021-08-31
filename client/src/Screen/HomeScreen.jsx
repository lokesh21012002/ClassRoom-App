import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HomeScreen() {
    const [classes, setclasses] = useState([])
    const data = JSON.parse(localStorage.getItem('token'))
    const isTeacher = data.isTeacher
    const token = data.token
    useEffect(() => {
        if (isTeacher) {
            axios.get('/api/teacher/classes', { headers: { token } })
                .then(res => {
                    setclasses(res.data.calsses)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            axios.get('/api/student/enrollclass', { headers: { token: token } })
                .then(res => {
                    setclasses(res.data.classes)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])
    return (
        <div className="container">
            {
                classes.map(Class => (
                    <div className="card shadow">
                        <div className="card-head">
                            <h3>{Class.subjectName}</h3>
                            <h5 style={{ "color": "gray" }}>{Class.time}</h5>
                        </div>
                        <div className="card-bottom">
                            <h6 style={{ "color": "gray" }}>{Class.code}</h6>
                            <button className="btn btn-info">Join Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
