import React ,{useState}from 'react';
import './App.css';
import Header from './components/Header/Header';
import CreatNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';
import Footer from './components/Footer/Footer';

function App() {
  const [notes,setNotes]=useState([]);

  const addNote=(newNote)=>{
setNotes((prevNotes)=>{
  return[...prevNotes,newNote]
})
  };

  console.log("sdfsd",notes)
  const deleteNote=(id)=>{
setNotes((prevNotes)=>{
  return prevNotes.filter((noteItem,index)=>{
    return index!==id
  })
})
  }
  return (
    <div className="App">
      <Header />
      {/* onAdd=====props */}
      <CreatNote addNote={addNote}/>
      {notes.map((note,index)=>{
        return(
<Note id={index}title={note.title} content={note.content} deleteNote={deleteNote}/>
        )
      })}
      <Note />
      
      <Footer />
    </div>
  );
}

export default App;
