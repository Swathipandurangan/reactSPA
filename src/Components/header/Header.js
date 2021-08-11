import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component{
    render(){
        return <div>
            <Navbar bg="dark" variant = "dark" fixed = "top">
                <Navbar.Brand href="#home">Keep</Navbar.Brand>
            </Navbar>
        </div>
    }
}
export default Header;