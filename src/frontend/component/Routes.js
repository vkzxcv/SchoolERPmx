import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Inputform from './Inputform';
import React from 'react';
import Table from './Table';
import Profile from './student_module/profile';
import Attendance from './student_module/attendance';
import Addexam from './Acads_module/Addexam';
import Addsubject from './Acads_module/Addsubject';
import Feeassign from './finance_module/Feeassign';
import Feepay from './finance_module/Feepay';
import Login from './Login'
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    <Route path='/Inputform' component={Inputform}/>
    <Route path='/Table' component={Table}/>
    <Route path='/Profile' component={Profile}/>
    <Route path='/Attendance' component={Attendance}/>
    <Route path='/Addexam' component={Addexam}/>
    <Route path='/Addsubject' component={Addsubject}/>
    <Route path='/Feeassign' component={Feeassign}/>
    <Route path='/Feepay' component={Feepay}/>
    <Route path='/Login' component={Login}/>
  </Route>
</Router>
)
export default routes
