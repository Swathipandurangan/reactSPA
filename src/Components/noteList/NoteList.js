import React from 'react';
import NoteCard from '../noteCard/NoteCard';
import CardDeck from 'react-bootstrap/CardDeck'
class NoteList extends React.Component{
    render(){
        let notes = "";
        if(this.props.notes){
            notes = this.props.notes.map((item) =><NoteCard key = {item.noteid} note = {item}></NoteCard>)
        }
        
        return <div>
            <CardDeck>
                {notes}
            </CardDeck>
                
            
        </div>
    }
}
export default NoteList;