import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import HomeScreen from './Screen/HomeScreen';
import StudentLogin from "./Screen/StudentLogin";
import TeacherLogin from "./Screen/TeacherLogin";
import StudentRegister from "./Screen/StudentRegister";
import TeacherRegister from "./Screen/TeacherRegister";
import LoginScreen from "./Screen/LoginScreen";
import CreateTest from './Screen/CreateTest'
import CreateClass from './Screen/CreateClass'
import CreateAssigment from './Screen/CreateAssigement'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Route exact component={HomeScreen} path="/" />
        <Route component={LoginScreen} path="/login" />
        <Route component={StudentLogin} path="/student/login" />
        <Route component={TeacherLogin} path="/teacher/login" />
        <Route component={StudentRegister} path="/student/register" />
        <Route component={TeacherRegister} path="/teacher/register" />
        <Route component={CreateTest} path="/create/test" />
        <Route component={CreateAssigment} path="/create/assigment"/>
        <Route component={CreateClass} path="/create/class"/>
      </BrowserRouter>
    </div>
  );
}
export default App;
