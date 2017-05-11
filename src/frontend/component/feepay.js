import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button} from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
class Feepay extends Component {


  
Class = [
    { value: 'I', label: '1st' },
    { value: 'II', label: '2nd'},
    { value: 'III', label: '3rd' }
  ];
  section = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B'},
    { value: 'C', label: 'C' }
  ];
  cycle = [
    { value: '1', label: 'Monthly' },
    { value: '2', label: 'Quaterly'},
    { value: '3', label: 'Semi-Annual' },
    { value: '4', label: 'Annual' }
  ];
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };
   state = {
    checkbox: false
  };

  handleCheckboxChange = () => {
    this.setState({checkbox: !this.state.checkbox});
  };
handleclass = (value) => {
    this.setState({classvalue: value});
  };
  handlecycle = (value) => {
    this.setState({cyclevalue: value});
  };
  handlesection = (value) => {
    this.setState({sectionvalue: value});
  };
  render () {
   
      /*
          id provided through props
        */

    return (
      <div style={{ flex: 1, overflowX: 'auto', margin: '5% 10% 10% 20%' }}>

        


        <Input type='no' label='Enrollment ID' name='enroll-id' icon='account_box' value={this.props.id} onChange={this.handleChange.bind(this, 'enrollid')} /> 
        <ListItem caption='Student' legend='John Doe' leftIcon='child_care' />
        
        <ListItem caption='Name of Guardian' legend='John Legend' leftIcon='security' />
        <ListItem caption='Class(Section)' legend='5th(A)' leftIcon='class' />
        <ListItem caption='Fee Cycle' legend='Monthly'leftIcon='cached' />
        <ListItem caption='Total Fee' legend='Rs 20000'leftIcon='attach_money' />
        <ListItem caption='Paid Before' legend='Rs 10000'leftIcon='money_off' />
        <ListItem caption='Paid Today' legend='Rs 5000'leftIcon='money_off' />
        <ListItem caption='Remaining' legend='Rs 5000'leftIcon='attach_money' />
        <ListCheckbox
          caption='Print Reciept'
          checked={this.state.checkbox}
          
          onChange={this.handleCheckboxChange}
        />
        
      <Button  icon='done' label='Submit Fee' onClick={this.submit} accent raised/>
      
      </div>
    );
  }
}

export default Feepay;