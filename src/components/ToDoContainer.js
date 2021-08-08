import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup new Rocket League Team",
                completed: true,
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
    // checkbox handler
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
    // delete button handler
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    //todo list render
    render() {
        return (
            <div>
                <Header/>
                <InputTodo/>
                <TodosList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.delTodo}
                />
            </div>
        )
    }
}

export default TodoContainer