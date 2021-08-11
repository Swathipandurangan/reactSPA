import React from 'react';
import Card from 'react-bootstrap/Card'
class NoteCard extends React.Component{
    render(){
        console.log(this.props.note);
        
        return <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.props.note.notetitle}</Card.Title>
    <Card.Text>{this.props.note.notetext}</Card.Text>
  </Card.Body>
</Card>
        </div>
    }
}
export default NoteCard;