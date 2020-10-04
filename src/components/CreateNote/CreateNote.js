import React,{useState} from 'react'
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./CerateNote.css";
const CreateNote = (props) => {
    const [isExpanded,setExpanded]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const handleChange=(event)=>{
        // const name=event.target.name;
const {name,value}=event.target;
// console.log(name,value);
setNote((prevNote)=>{
    return{
        ...prevNote,
        [name]:value
    };
})
    };
    console.log(note);
    const expand=()=>{
        setExpanded(true);
    };

const submitNote=(event)=>{
    event.preventDefault();
    props.addNote(note);
    setNote({
        title:"",
        content:""
    })
    setExpanded(false)

};
    return (
        <div>
           <form className="create-note">
               {isExpanded&&
               <input name="title" type="text"  placeholder="Title" value={note.title}onChange={handleChange}/>}
               <textarea type="text" value={note.content} rows={isExpanded?3:1} name="content" placeholder="Take a note ..." onClick={expand} onChange={handleChange}/>
               <Zoom in={isExpanded}>
                   <Fab onClick={submitNote}>
                   <AddIcon />
                   </Fab>
               </Zoom>
           </form>
        </div>
    )
}

export default CreateNote
