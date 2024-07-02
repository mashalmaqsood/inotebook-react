import noteContext from "./noteContext";
import { useState } from "react";

export const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6681b4f592aacb9063470742",
      user: "667f0c0290a6314afaaf5ed2",
      title: "My note",
      description: "This is my first note",
      tag: "Personal",
      date: "2024-06-30T19:41:41.972Z",
      __v: 0,
    },
    {
      _id: "6681b4i592aacb9063470742",
      user: "667f0c0290a6314afaaf5ed2",
      title: "My note",
      description: "This is my first note",
      tag: "Personal",
      date: "2024-06-30T19:41:41.972Z",
      __v: 0,
    },
    {
      _id: "6681b4f598aacb9063470742",
      user: "667f0c0290a6314afaaf5ed2",
      title: "My note",
      description: "This is my first note",
      tag: "Personal",
      date: "2024-06-30T19:41:41.972Z",
      __v: 0,
    },
    {
      _id: "6681b4f592bacb9063470742",
      user: "667f0c0290a6314afaaf5ed2",
      title: "My note",
      description: "This is my first note",
      tag: "Personal",
      date: "2024-06-30T19:41:41.972Z",
      __v: 0,
    },
    {
      _id: "6681b4k592aacb9063470742",
      user: "667f0c0290a6314afaaf5ed2",
      title: "My note",
      description: "This is my first note",
      tag: "Personal",
      date: "2024-06-30T19:41:41.972Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  //add a note
  const addNote = (title,description,tag) =>{
   console.log("Adding a new note")
   const note = {
    _id: "6681b4k592aacb9063470742",
    user: "667f0c0290a6314afaaf5ed2",
    title: title,
    description: description,
    tag: tag,
    date: "2024-06-30T19:41:41.972Z",
    __v: 0,
   }
   setNotes(notes.concat(note))
  }

  //edit a note
  const editNote = (id,title,description,tag) =>{
   for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag =tag;
    }
   }
  }

  //delete a note
  const deleteNote = (id) =>{
   console.log("Deleting a note")
   const newNotes = notes.filter((note => {
    console.log("note",note)
    return note._id !== id
   }))
   setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes,addNote,editNote,deleteNote}}>
      {props.children}
    </noteContext.Provider>
  );
};
