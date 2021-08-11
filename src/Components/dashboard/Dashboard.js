import React from 'react';
import Col from 'react-bootstrap/Col'
import NoteTaker from '../noteTaker/NoteTaker';
import NoteList from '../noteList/NoteList';

class Dashboard extends React.Component{
    constructor(){
            super()
            this.state ={
              notes : []
            }
            this.saveNote = this.saveNote.bind(this);
          } 
          saveNote(data){
           let notes = this.state.notes;
           data.noteid = notes.length+1;
           notes.push(data);
           this.setState({
             notes
           }) 
          }
    render(){
        return <div>
                <Col md = {{span : 6, offset : 3}}>
                <NoteTaker saveNote = {this.saveNote} ></NoteTaker>
            </Col>
            <Col>
            <NoteList notes = {this.state.notes}></NoteList>
            </Col>
        </div>
    }
}
export default Dashboard;