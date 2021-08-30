import axios from 'axios'
import React,{useState} from 'react'

export default function CreateClass() {
    const [subjectName, setsubjectName] = useState('')
    const [time, settime] = useState('')
    const [code, setcode] = useState('')
    const data=JSON.parse(localStorage.getItem('token'))
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/teacher/create/class', { subjectName, code, time, token: data.token })
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="box">
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required="" type={subjectName} onChange={ e=>{setsubjectName(e.target.value)}}/>
                        <label for="">Subject Name</label>
                    </div>
                     <div className="inputBox">
                        <input type="text" name="" required="" type={time} onChange={ e=>{settime(e.target.value)}}></input>
                        <label for="">Time</label>
                    </div>
                      <div className="inputBox">
                        <input type="text" name="" required="" type={code} onChange={ e=>{setcode(e.target.value)}}></input>
                        <label for="">Code</label>
                    </div>
                    <input type="submit" value="Create" onClick={HandleSubmit}/>
                </form>
            </div>
        </>
    )
}
