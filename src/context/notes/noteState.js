import noteContext from "./noteContext"
import { useState } from "react"

export const NoteState = (props) =>{
    const s1 = {
        "name" : "Mashal",
        "class" : "5A"
    }
    const [state, setstate] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
          setstate({
            "name" : "sania",
            "class" : "3A"
          })
        },1000)
    }
    return(
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}