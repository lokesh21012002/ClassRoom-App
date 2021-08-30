import React, { useState } from 'react'
import axios from 'axios'
export default function Register(props) {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [institute, setinstitute] = useState("");
    const handelsubmit = () => {
        axios.post(props.endpoint, { name, password, email, institute })
            .then(res => {
                console.log(res.data);
        
            }).catch(err => {
                console.log(err);
            }) 
    }
    return (
        <div>
            <div className="box">
                <h2>Register { props.heading}</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required="" value={name} onChange={e=>setname(e.target.value)}></input>
                        <label for="">Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="" required="" value={email} onChange={e=>setemail(e.target.value)}></input>
                        <label for="">Email</label>
                    </div>
                     <div className="inputBox">
                        <input type="password" name="" required="" value={password} onChange={e=>setpassword(e.target.value)}></input>
                        <label for="">Password</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="" value={institute} onChange={e=>setinstitute(e.target.value)}></input>
                        <label for="">Institute Name</label>
                    </div>
                    <input type="submit" name="" value="Register" onClick={handelsubmit}></input>
                </form>
            </div>
      </div>
    )
}
