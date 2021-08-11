import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NoteTaker extends React.Component{
    constructor(){
        super();
        this.state = {
            notetitle : "",
            notetext:""
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this)
        this.handleOnChangeText = this.handleOnChangeText.bind(this)
    }
    handleOnSubmit(event){
        event.preventDefault();
       // let check = document.getElementById('text1').value;
       // console.log("state = ",this.state);
       this.props.saveNote(this.state);
       this.setState({
           notetitle : "",
           notetext:""
       })
    }
    handleOnChangeTitle(event){
        event.preventDefault();
        this.setState({
            notetitle : event.target.value
        })

    }
    handleOnChangeText(event){
        event.preventDefault();
        this.setState({
            notetext : event.target.value
        })

    }
    render(){
        return <div>
            <Form>
                <Form.Control type="text" placeholder="Note Title" onChange = {this.handleOnChangeTitle} value = {this.state.notetitle} />
                <Form.Control type="text" placeholder="Note Text" onChange = {this.handleOnChangeText} value = {this.state.notetext}/>
                <Button variant="primary" type="submit" 
                onClick = {this.handleOnSubmit}>
                    Submit
                </Button>
            </Form>
            </div>
    }
}
export default NoteTaker;