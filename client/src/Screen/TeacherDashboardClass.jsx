import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherDashboard() {
    return (
        <>
            <center><h2>Classes</h2></center>
        <div className="container">
            <div className="card shadow">
                <div className="card-head">
                    <h3>OOPM</h3>
                    <h3>BT-IT502</h3>
                </div>
                <div className="card-bottom">
                    <h5 style={{"color":"gray"}}>11:30</h5>
                    <button className="btn btn-info">Join Now</button>
                </div>
            </div>
            </div>
        </>
    )
}
