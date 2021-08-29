import React from "react";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  return (
    <div>
      <div>
        <Link to="/student/login">
                  <h2>As Student
            
                  </h2>
                  <img src="https://img.icons8.com/ios/60/000000/external-student-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
                  
        </Link>
      </div>
    </div>
  );
}
