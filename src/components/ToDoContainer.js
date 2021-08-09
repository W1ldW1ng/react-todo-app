import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup new Rocket League Team",
                completed: true,
            },
            {
                id: uuidv4(),
                title: "Onboard Burrows onto low level team ",
                completed: false
            },
            {
                id: uuidv4(),
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
    //input todo handler
    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    //edit mode handler
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }
    //todo list render
    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo
                        addTodoProps={this.addTodoItem}
                    />
                    <TodosList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange} 
                        deleteTodoProps={this.delTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer