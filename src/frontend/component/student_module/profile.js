import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import {Button} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Tab, Tabs} from 'react-toolbox';
import First from './profiletab1';

class Student extends React.Component {
  state = {
    index: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };



  handleActive = () => {
    console.log('Special one activated');
  };

  render () {
    return (
        <div style={{ flex: 1, overflowX: 'auto', margin: '5% 5% 10% 20%' }}>
      <section>
      <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
         <Tab label='First'><First /> </Tab>
         <Tab label='Second'><small>Second Content</small></Tab>
       </Tabs>
      </section>
      </div>
    );
  }
}




export default Student;
