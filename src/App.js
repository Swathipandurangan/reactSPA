import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard'; 

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends React.Component {
  render(){
    return <div>
    <Container>
      <Row className = "row-header">
        <Header></Header>
      </Row>
      <Row>
    </Row>
    <Router>
       <Route exact path = "/" component = {Login} />
       <Route exact path="/dashboard" component={Dashboard} />
     </Router>
    <Row className = "row-footer">
      <Footer></Footer>
    </Row>
</Container>
  </div>
  }
  
}
export default App;