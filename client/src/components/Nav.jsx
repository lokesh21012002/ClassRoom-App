import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    
      <nav>
        <div>
        <Link to="/" style={{"textDecoration":"none","color":"white"}}><h2>CLASSROOM</h2></Link>
        </div>
      <div>
        <Link to="/login" style={{"textDecoration":"none","color":"white"}}>Login</Link>
          {/* <div className="btn-group">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <h1>hello</h1>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              
              <li>
                <a className="dropdown-item" href="#">
                   Separated link hello 
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
  );
}
