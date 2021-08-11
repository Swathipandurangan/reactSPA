import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
class Footer extends React.Component{
    render(){
        return <div>
            <Navbar bg="dark" variant = "dark" fixed = "bottom" className = "justify-content-center">
                <Navbar.Text>
                    Stackroute@copyright
                </Navbar.Text>
        </Navbar>
            </div>
    }
}
export default Footer;