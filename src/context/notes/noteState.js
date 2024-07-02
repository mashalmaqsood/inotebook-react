import noteContext from "./noteContext"
import { useState } from "react"

export const NoteState = (props) =>{
   const notesInitial = [
    {
      "_id": "6681b4f592aacb9063470742",
      "user": "667f0c0290a6314afaaf5ed2",
      "title": "My note",
      "description": "This is my first note",
      "tag": "Personal",
      "date": "2024-06-30T19:41:41.972Z",
      "__v": 0
    },
    {
        "_id": "6681b4f592aacb9063470742",
        "user": "667f0c0290a6314afaaf5ed2",
        "title": "My note",
        "description": "This is my first note",
        "tag": "Personal",
        "date": "2024-06-30T19:41:41.972Z",
        "__v": 0
      },
      {
        "_id": "6681b4f592aacb9063470742",
        "user": "667f0c0290a6314afaaf5ed2",
        "title": "My note",
        "description": "This is my first note",
        "tag": "Personal",
        "date": "2024-06-30T19:41:41.972Z",
        "__v": 0
      },
      {
        "_id": "6681b4f592aacb9063470742",
        "user": "667f0c0290a6314afaaf5ed2",
        "title": "My note",
        "description": "This is my first note",
        "tag": "Personal",
        "date": "2024-06-30T19:41:41.972Z",
        "__v": 0
      },
      {
        "_id": "6681b4f592aacb9063470742",
        "user": "667f0c0290a6314afaaf5ed2",
        "title": "My note",
        "description": "This is my first note",
        "tag": "Personal",
        "date": "2024-06-30T19:41:41.972Z",
        "__v": 0
      }
  ]
  const [notes, setnotes] = useState(notesInitial)
    return(
        <noteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </noteContext.Provider>
    )
}