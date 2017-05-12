import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button} from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
class Login extends React.Component{
    constructor(props) {
          super(props);

            this.state = {
                  user: '', password: ''

            }
    }
    handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };
    render()
        {
        return (
        <div style={{ flex: 1, overflowX: 'auto', margin: '20% 20% 20% 40%' }}>


        <Card>
        <Input type='text' label='Username' name='user' icon='person' value={this.state.user} onChange={this.handleChange.bind(this, 'user')}  />
        <Input type='password' label='Password' icon='keyboard' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}  />
        <Button  label='Login' href='/' accent raised/>
    </Card>

      </div>
    );
  }
}
export default Login;
