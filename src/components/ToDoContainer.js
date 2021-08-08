import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup new Rocket League Team",
                completed: true
            },
            {
                id: 2,
                title: "Onboard Burrows onto low level team ",
                completed: false
            },
            {
                id: 3,
                title: "Kick Burrows off low level team because he's shit",
                completed: false
            },
        ]
    };
    render() {
        return (
            <div>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoContainer