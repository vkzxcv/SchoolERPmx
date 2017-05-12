import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button} from 'react-toolbox/lib/button';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
class addsub extends Component {


   constructor(props) {
          super(props);

            this.state = {
                 classvalue:'',sectionvalue:'',Faculty:''
                };
                this.baseState = this.state ;
            }
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
   faculty = [
    { value: 'fac1', label: 'Ramesh' },
    { value: 'fac2', label: 'Suresh'},
    { value: 'fac3', label: 'Mahesh' },
    { value: 'fac4', label: 'Fucker' }
  ];
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };


  handlefaculty = (value) => {
    this.setState({faculty: value});
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



    return (
      <div style={{ flex: 1, overflowX: 'auto', padding: '5% 10% 10% 20%' }}>
          <h2> Add Subject </h2>
          <MenuDivider />
         <Dropdown icon='class'
          source={this.Class} // to be pulled from class database ( no. of classes of that school)
          onChange={this.handleclass}
          value={this.state.classvalue} label='Standard' required
        />
        <Dropdown icon='label'
          source={this.section} // to be pulled from class database ( no. of classes of that school)
          onChange={this.handlesection}
          value={this.state.sectionvalue} label='Section' required
        />
        <Dropdown icon='face'
          source={this.faculty} // to be pulled from class database ( no. of classes of that school)
          onChange={this.handlefaculty}
          value={this.state.Faculty} label='Faculty' required
        />
         <Input type='no' label='Subject Name' name='subject' icon='subject' value={this.state.sub_name} onChange={this.handleChange.bind(this, 'sub_name')} />

        <Card>
      <Button  icon='done' label='Add Subject' onClick={this.submit} accent raised/>
      </Card>
      </div>
    );
  }
}

export default addsub;
