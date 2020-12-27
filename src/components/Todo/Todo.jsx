import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import './Todo.scss';

export default class Todo extends Component {

    state = {
        task: "",
        defaultNoTaskText: "Empty todo list, please add something.",
        taskList: []
    };

    handleInputChange = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    handleAddTodo = (e) => {
        e.preventDefault();
        if (this.state.task !== "") {
            this.setState({
            taskList: [...this.state.taskList, this.state.task.trim()],
            task:""
            });
        }
    }

    render() { 
        return (
            <div>
                <form>
                    <input type="text" name="task" value={this.state.task} 
                           onChange={this.handleInputChange} />
                           
                    <button type="submit"
                            className="addTodoBtn" 
                            onClick={this.handleAddTodo}> 
                            Add Todo
                    </button>
                </form>
                {this.state.taskList.length === 0 && (<p>{this.state.defaultNoTaskText}</p>)}
                {this.state.taskList.length !== 0 && (<TodoList list={this.state.taskList}/>)}
            </div>
        );
    }
}