import axios from 'axios'
import React, { useState ,useEffect} from 'react'

export default function HomeScreen() {
    const [classes, setclasses] = useState([])
    const data=JSON.parse(localStorage.getItem('token'))
    const isTeacher = data.isTeacher
    const token=data.token
    useEffect(() => {
        if (isTeacher===true)
        {
            axios.get('/api/teacher/classes', { token })
                .then(res => {
                    setclasses(res.data.calss)
                })
                .catch(err => {
                console.log(err)
            })
        }
        else {
            axios.get('/api/student/enrollclass', { headers:{token:token}})
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                console.log(err)
            })
        }
    }, [])
    return (
        <div className="container">
            <div className="card shadow">
                <div className="card-head">
                    <h3>OOPM</h3>
                    <h5 style={{"color":"gray"}}>11:30</h5>
                </div>
                <div className="card-bottom">
                    <h6 style={{"color":"gray"}}>Institute Name</h6>
                    <button className="btn btn-info">Join Now</button>
                </div>
            </div>
        </div>
    )
}
