import noteContext from "./noteContext";
import { useState } from "react";

export const NoteState = (props) => {
  const host = "http://localhost:5000/";
  const [notes, setNotes] = useState([]);

  //Get All Notes
  const getAllNotes = async () => {
    const url = `${host}api/notes/getAllNotes`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZjBjMDI5MGE2MzE0YWZhYWY1ZWQyIn0sImlhdCI6MTcxOTY5NjEyOH0.SYvA3i3r4pvJzNm7rZZ5mjxNIKjQWPZEfsulW3qwD0M",
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
    const url = `${host}api/notes/addNote`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZjBjMDI5MGE2MzE0YWZhYWY1ZWQyIn0sImlhdCI6MTcxOTY5NjEyOH0.SYvA3i3r4pvJzNm7rZZ5mjxNIKjQWPZEfsulW3qwD0M",
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
    const url = `${host}api/notes/updateNote/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZjBjMDI5MGE2MzE0YWZhYWY1ZWQyIn0sImlhdCI6MTcxOTY5NjEyOH0.SYvA3i3r4pvJzNm7rZZ5mjxNIKjQWPZEfsulW3qwD0M",
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
    const url = `${host}api/notes/deleteNote/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZjBjMDI5MGE2MzE0YWZhYWY1ZWQyIn0sImlhdCI6MTcxOTY5NjEyOH0.SYvA3i3r4pvJzNm7rZZ5mjxNIKjQWPZEfsulW3qwD0M",
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
