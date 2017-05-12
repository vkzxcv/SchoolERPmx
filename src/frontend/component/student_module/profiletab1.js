import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import React, { Component } from 'react';
const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
import img from './DSC_0167.jpg'

class First extends React.Component {

render(){
 return (
  <div>
  <div>
  <Card style={{width: '350px'}} >
    <CardTitle
      avatar={img}
      title="NAME OF THE STUDENT"
      subtitle="Roll number"
    />
    <CardMedia
      aspectRatio="wide"
      image={img}
    />
  </Card>
  </div>
  <div style={{ flex: 1, overflowX: 'auto', margin: '-28% 5% 10% 20%' }}>
  <Card style={{width: '500px'}}>
    <CardText >NAME:</CardText>
    <CardText>EMAIL:</CardText>
    <CardText>CLASS:</CardText>
    <CardText>ROLL NUMBER:</CardText>
    <CardText>DOB:</CardText>
    <CardText>GUARDIAN:</CardText>
    <CardText>MOTHER:</CardText>
  </Card>
  <Card style={{width: '900px'}} >
    <CardText >{dummyText}</CardText>
    <CardText>pritn the loda</CardText>
    <CardActions >
      <Button label="PRINT DETAILS" />
      <Button label="EDIT INFO" />
    </CardActions>
  </Card>
  </div>


  </div>

    );
  }
}

export default First;
