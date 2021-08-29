import React from 'react'

export default function CreateTest() {
    return (
        <div>
            <div className="box">
                {/* <h2>Register { props.heading}</h2> */}
                <form>
                     <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Test Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Subject Name</label>
                    </div>
                     <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Subject Code</label>
                    </div>
                     <div className="inputBox">
                        <input type="date" name="" required=""></input>
                        <label for="">Date</label>
                    </div>
                      <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Link</label>
                    </div>

                     {/* <div className="inputBox">
                        <input type="password" name="" required=""></input>
                        <label for="">Password</label>
                    </div> */}
                    <input type="submit" name="" value="Create"></input>

                </form>
            </div>

            
        </div>
    )
}
