import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import {Button} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Tab, Tabs} from 'react-toolbox';

class Studentedit extends React.Component {
        constructor(props) {
          super(props);
            this.state = {
                  _id: '' ,  name: 'vishal', phone: '', email: '', index: '1'
                };
                this.baseState = this.state ;
            }
  handleClick = () => {
    console.log(this.state);
    this.setState(this.baseState);
    this.state._id = new Date().toISOString();
    if(this.state.name === ''){console.log('EMptyinput');}
    else {
    db.put(this.state);
}
  };
handleedit = () => {
    this.setState({index: 1});
  };
  handleTabChange = (index) => {
    this.setState({index});
  };
  resetForm = () => {
      this.setState(this.baseState);
  }
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (<div style={{ flex: 1, overflowX: 'auto', margin: '5% 10% 10% 20%' }}>
      
      <section>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label='Personal'>
        <Input type='text' label='Name' name='name' icon='person' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} disabled={this.state.edit}/>
        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} disabled={this.state.edit}/>
        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} disabled={this.state.edit}/>
        </Tab>
        
         <Tab label='Parents'><small>Disabled content</small></Tab>
          <Tab label='Address' ><small>Fourth content hidden</small></Tab>
          </Tabs>
        <div style={{ flex: 1, overflowX: 'auto', padding: '1.8rem' }}>
        <Button  label='Save' raised primary />
        
        </div>
      </section>
      </div>
    );
  }
}

export default Studentedit;
