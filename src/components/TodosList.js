import React from "react"

class TodosList extends React.Component {
    
    render() {
        return (
            <ul>
                {this.props.todos.map(todos => (
                    <li>{todos.title}</li>
                ))}
            </ul>
        )
    }
}

export default TodosList