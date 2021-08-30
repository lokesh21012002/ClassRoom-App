import React from 'react'

export default function TeacherDashboardTest() {
    return (
        <>
            <center><h2>Test's</h2></center>
            <div className="container">
                <div className="test-card shadow">
                    <div className="test-card-head">
                        <h3>Test Name</h3>
                        <h4>Subject Name</h4>
                    </div>
                    <div className="test-card-bottom">
                        <h5 style={{"color":"gray"}}>Institute</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
