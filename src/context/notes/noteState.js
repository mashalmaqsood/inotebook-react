import noteContext from "./noteContext";
import { useState } from "react";

export const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //Get All Notes
  const getAllNotes = async () => {
    const url = `${process.env.REACT_APP_HOST}api/notes/getAllNotes`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Add A Note
  const addNote = async (title, description, tag) => {
    const url = `${process.env.REACT_APP_HOST}api/notes/addNote`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error(error.message);
    }
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const url = `${process.env.REACT_APP_HOST}api/notes/updateNote/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      let newNotes = structuredClone(notes);
      for (let index = 0; index < newNotes.length; index++) {
        if (newNotes[index]._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Delete a note
  const deleteNote = async (id) => {
    const url = `${process.env.REACT_APP_HOST}api/notes/deleteNote/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
    } catch (error) {
      console.error(error.message);
    }
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
