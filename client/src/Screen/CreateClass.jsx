import React from 'react'

export default function CreateClass() {
    return (
        <div>
            <div className="box">
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Subject Name</label>
                    </div>
                     <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Time</label>
                    </div>
                      <div className="inputBox">
                        <input type="text" name="" required=""></input>
                        <label for="">Code</label>
                    </div>
                    <input type="submit" name="" value="Create"></input>
                </form>
            </div>
        </div>
    )
}
