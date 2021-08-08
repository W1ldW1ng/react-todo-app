//global components
import React from "react"
import ReactDOM from "react-dom"

//component files
import TodoContainer from "./components/ToDoContainer"
//end of componet files

//virtualDOM
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>, 
    document.getElementById('root')
)
