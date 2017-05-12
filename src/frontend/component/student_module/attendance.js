import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';
import Input from 'react-toolbox/lib/input';
import PouchDB from 'pouchdb-browser' ;
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button} from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
var db = new PouchDB('dbname');
const data=[];
db.allDocs({"include_docs": true,"ascending": true}).then(function(docs){
  docs.rows.forEach(function(entry){
   // console.log(entry.doc);
    data.push(entry.doc);
  });});
const u=[];

const sortByIdAsc = (a, b) => {
  if (a._id < b._id) return -1;
  if (a._id > b._id) return 1;
  return 0;
};

const sortByIdDesc = (a, b) => {
  if (a._id > b._id) return -1;
  if (a._id < b._id) return 1;
  return 0;
};

class attendance extends Component {


  state = {
    selected: [],
    sorted: 'asc',
    name:''
  };

  getSortedData = () => {
    const compare = this.state.sorted === 'asc' ? sortByIdAsc : sortByIdDesc;
    return data.sort(compare);
  };
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleRowSelect = selected => {
    const sortedData = this.getSortedData();
    this.setState({ selected: selected.map(item => sortedData[item].name) });
  };
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
  handleClick=()=>{
    const name = this.state.name;
    u.push(data.map(function(item,index){
      if(item.name===name)return item;
      else return -1;
    }));

    for(var a=u[0].length;a>-1;a--)
    {
      if(u[0][a]===-1)
      u[0].splice(a,1);
    }

    console.log(u[0]);
  };

  handleSortClick = () => {
    const { sorted } = this.state;
    const nextSorting = sorted === 'asc' ? 'desc' : 'asc';
    this.setState({ sorted: nextSorting });
  };
handleclass = (value) => {
    this.setState({classvalue: value});
  };
  handlesection = (value) => {
    this.setState({sectionvalue: value});
  };
  render () {
    const { sorted } = this.state;
    const sortedData = this.getSortedData();


    return (
      <div style={{ flex: 1, overflowX: 'auto', margin: '5% 10% 10% 20%' }}>

        <Card>

      <DatePicker icon='event'
          label='Date'
          onChange={this.handleChange.bind(this, 'date1')}
          value={this.state.date1}
          sundayFirstDayOfWeek
          required />
          <Dropdown icon='date_range'
          source={this.Class} // to be pulled from class database ( no. of classes of that school)
          onChange={this.handleclass}
          value={this.state.classvalue} label='Standard' required
        />
        <Dropdown icon='label'
          source={this.section} // to be pulled from class database ( no. of classes of that school)
          onChange={this.handlesection}
          value={this.state.sectionvalue} label='Section' required
        />

      <Table multiSelectable onRowSelect={this.handleRowSelect} style={{ marginTop: 10 }}>
        <TableHead>
          <TableCell onClick={this.handleSortClick} string sorted={sorted}>ID</TableCell>
          <TableCell string>Name</TableCell>
          <TableCell string>Email</TableCell>
          <TableCell string>Phone</TableCell>
        </TableHead>
        {sortedData.map((item, idx) => (
            <TableRow key={idx} selected={this.state.selected.indexOf(item.name) !== -1}>
            <TableCell >{item._id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell >{item.email}</TableCell>
            <TableCell >{item.phone}</TableCell>
            </TableRow>
        ))}

      </Table>
      <Button  icon='done' label='Mark Present' onClick={this.mark} accent raised/>
      </Card>
      </div>
    );
  }
}

export default attendance;
