import React from 'react'

export default function Login(props) {
    return (
        <div>
            <div className="box">
                <h2>Register { props.heading}</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required=""></input>

                    </div>
                     <div className="inputBox">
                        <input type="password" name="" required=""></input>
                        <label for="">Password</label>
                    </div>

                    <input type="submit" name="" value="Register"></input>
                </form>
            </div>
      </div>
       
    )
}
