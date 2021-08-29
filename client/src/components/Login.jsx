import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div>
      <div className="box">
        <h2>Login {props.heading}</h2>
        <form>
          <div className="inputBox">
            <input type="text" name="" required=""></input>
            <label for="">Email</label>
          </div>
          <div className="inputBox">
            <input type="password" name="" required=""></input>
            <label for="">Password</label>
          </div>
          <div className="container">
            <input type="submit" name="" value="Login"></input>
            <Link to={props.link}>
              <input type="submit" name="" value="Register" style={{}}></input>
            </Link>
          </div>
        </form>
      </div>

      {/* <h2>Login</h2>
                            <form action="">
                                <div class="inputBox">
                                    <input type="text" name="" required="">
                                    <label for="">Username</label>
                                </div>
                                <div class="inputBox">
                                    <input type="password" name="" required="">
                                    <label for="">Password</label>
                                </div>
                                <input type="submit" name="" value="Submit">
                            </form>
              */}
    </div>
  );
}
