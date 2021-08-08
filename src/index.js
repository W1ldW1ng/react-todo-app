//global components
import React from "react"
import ReactDOM from "react-dom"

//component files
import TodoContainer from "./components/ToDoContainer"

//stylesheet
import "./App.css"

//virtualDOM
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>, 
    document.getElementById('root')
)
