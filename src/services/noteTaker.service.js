async function saveNote(data){
    let url = "http://localhost:3001/notes"
    const response = await fetch(url,{
        method : 'POST',
        headers:{
            'content-Type': "application/json"
        },
        body:JSON.stringify(data)
    });
    return await response.json();
}

module.exports ={saveNote}