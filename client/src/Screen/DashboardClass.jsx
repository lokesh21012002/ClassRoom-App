import React from 'react'

export default function DashboardClass() {
    const [classes, setclasses] = useState([])
    const data=JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        if (data.isTeacher)
        {
            axios.get('/api/teacher/classes', { headers: { token: data.token } })
                .then(res => {
                console.log(res.data)
            }).catch(err=>{console.log(err)})
        }
        else {
            axios.get('/api/student/assigment', { headers: { token: data.token } })
                .then(res => {
                console.log(res.data)
            }).catch(err=>{console.log(err)})
        }
    }, [])
    return (
        <>
            <center><h2>Classes</h2></center>
        <div className="container">
            <div className="card shadow">
                <div className="card-head">
                    <h3>OOPM</h3>
                    <h5 style={{"color":"gray"}}>11:30</h5>
                </div>
                <div className="card-bottom">
                    <h5 style={{"color":"gray"}}>Institute Name</h5>
                    <button className="btn btn-info">Join Now</button>
                </div>
            </div>
            </div>
        </>
    )
}
