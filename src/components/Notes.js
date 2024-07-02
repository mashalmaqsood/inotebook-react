import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <AddNote />
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => (
          <NoteItem note={note} key={note._id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
