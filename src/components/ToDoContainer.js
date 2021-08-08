import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

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
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        }));
    };
    render() {
        return (
            <div>
                <Header/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
            </div>
        )
    }
}

export default TodoContainer