import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import HomeScreen from './Screen/HomeScreen';
import StudentLogin from "./Screen/StudentLogin";
import TeacherLogin from "./Screen/TeacherLogin";
import StudentRegister from "./Screen/StudentRegister";
import TeacherRegister from "./Screen/TeacherRegister";
import LoginScreen from "./Screen/LoginScreen";
import TeacherDashboardClass from './Screen/TeacherDashboardClass';
import TeacherDashboardTest from './Screen/TeacherDashboardTest';
import TeacherDashboardAssigment from './TeacherDashboardAssigment';
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
        <Route component={TeacherDashboardTest} path="/dashboard/test" />
        <Route component={TeacherDashboardAssigment} path="/dashboard/assigment"/>
        <Route component={TeacherDashboardClass} path="/dashboard/class"/>
      </BrowserRouter>
    </div>
  );
}
export default App;
