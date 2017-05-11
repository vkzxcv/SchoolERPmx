import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Inputform from './Inputform';
import React from 'react';
import Table from './Table';
import Student from './student.js';
import Studentedit from './Studentedit';
import attendance from './attendance';
import feeasssign from './feeassign';
import Feepay from './feepay';
import addsub from './addsubject';
import Login from './login';
import addexam from './addexam';
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    <Route path='/Inputform' component={Inputform}/>
    <Route path='/Table' component={Table}/>
    <Route path='/Student' component={Student} />
    <Route path='/Student/edit' component={Studentedit} />
    <Route path='/attendance' component={attendance} />
    <Route path='/fee/assign' component={feeasssign} />
    <Route path='/fee/pay' component={Feepay} />
    <Route path='/login' component={Login} />
    <Route path='/addsubject' component={addsub} />
    <Route path='/addexam' component={addexam} />
  </Route>
</Router>
)
export default routes;
