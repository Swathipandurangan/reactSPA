import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
import { FormErrors } from './formErrors';
import './login.css'
class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username : '',
            password:'',
            formErrors:{username:'',password : ''},
            usernameValid:false,
            passwordValid:false,
            formValid:false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);

    }
    handleUserInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]:value},() => {
            this.validateField(name,value)
        })
    }
    validateField(fieldName,value){
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName){
            case 'username':
            usernameValid = value.length >= 3;
            fieldValidationErrors.username = usernameValid ? '':'is invalid';
            break;
            case 'password':
            passwordValid = value.length>=6;
            fieldValidationErrors.password = passwordValid?'':'is too short';
            break;
            default:
            break;
        }
        this.setState({formErrors:fieldValidationErrors,
                        usernameValid:usernameValid,
                    passwordValid:passwordValid},this.validateForm)
        }
        validateForm(){
            this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
        }
        errorClass(error){
            return(error.length === 0?'':'has-error');
        }



    render(){
        return <div>
            <Form className = 'loginForm'>
            <FormErrors formErrors = {this.state.formErrors}/>
                <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control type="username"
                required
                value = {this.state.username} 
                placeholder="Enter User Name" 
                name = "username"
                onChange = {this.handleUserInput}/>
                </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password"
    required
    value = {this.state.password} 
    placeholder="Password" 
    name = "password" 
    onChange = {this.handleUserInput}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    }
}
export default Login;

