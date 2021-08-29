import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import HomeScreen from './Screen/HomeScreen';
import StudentLogin from "./Screen/StudentLogin";
import TeacherLogin from "./Screen/TeacherLogin";
import StudentRegister from "./Screen/StudentRegister";
import TeacherRegister from "./Screen/TeacherRegister";
import LoginScreen from "./Screen/LoginScreen";
import CreateClass from './Screen/CreateClass';
import CreateTest from './Screen/CreateTest';
import CreateAssigement from './Screen/CreateAssigement';


// import Login from "./components/Login";

function App() {
  
  return (
    <div>
  
      <BrowserRouter>
        <Nav/>
        
        {/* <Route  component={Login} path="/login"/> */}
        <Route exact component={HomeScreen} path="/" />
        





        <Route component={StudentLogin} path="/student/login" />
        <Route component={TeacherLogin} path="/teacher/login" />
        <Route component={StudentRegister} path="/student/register" />
        <Route component={TeacherRegister} path="/teacher/register" />
        <Route component={LoginScreen} path="/login" />
        <Route component={CreateClass} path="/create/class" />
        <Route component={CreateTest} path="/create/test" />
        <Route component={CreateAssigement} path="/create/assigement" />
        
        {/* register */}
          
      </BrowserRouter>
   
    </div>
  );
}

export default App;
