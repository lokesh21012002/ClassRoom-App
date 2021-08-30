import React, { useState } from 'react'

export default function DashboardAssigment() {
    const [assigment, setassigment] = useState([])
    useEffect(() => {
        
    }, [])
    return (
        <>
        <center><h2>Assigment's</h2></center>
        <div className="container">
            <div className="test-card shadow">
                <div className="test-card-head">
                    <h3>Assigment Name</h3>
                    <h4>Subject Name</h4>
                </div>
                <div className="test-card-bottom">
                    <h5 style={{"color":"gray"}}>Institute Name</h5>
                </div>
            </div>
        </div>
    </>
    )
}
