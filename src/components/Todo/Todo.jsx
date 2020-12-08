import React, { Component } from 'react';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends Component {

    state = {
        task: "",
        countTask: 0,
        defaultNoTaskText: "Empty todo list, please add something",
        taskList: []
    };

    onChangeEvent = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    onAddEvent = (e) => {
        e.preventDefault();
        if(this.state.task !== ""){
            this.setState({
            countTask: this.state.countTask + 1,
            taskList: [...this.state.taskList, this.state.task.trim()],
            });
        }
        this.setState({
            task:""
        });
    }

    render(){ 
        return (
            <div>
                <form>
                    <input type="text" name="task" value={this.state.task} onChange={this.onChangeEvent} />
                    <button type="submit" className="TodoBtn" onClick={this.onAddEvent}>Add Todo</button>
                    {this.state.countTask === 0 && (<p>{this.state.defaultNoTaskText}</p>)}
                </form>
                {this.state.taskList[0] !== undefined && (<TodoList list={this.state.taskList} />)}
            </div>
        );
    }
}

export default Todo;





// PLEASE IGNORE BELOW

    // console.log(e.target)
    // console.log(e.target.value)
    
    // console.log(this.state.taskList);

// this.props.taskInput(this.state.task);
// console.log(this.state.task);