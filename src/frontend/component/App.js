import React, { Component } from 'react';
import { Layout } from 'react-toolbox';
import Nav from './Nav.js';


class App extends React.Component {
    render() {
        return (<Layout>
        <Nav/>
        {this.props.children}
      </Layout>
        );
    }
}
export default App;
