import React from 'react'

export default function HomeScreen() {
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
