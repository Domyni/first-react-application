import React, { Component } from 'react';

export default class Filter extends Component{
    state = {
        filter: '',
        anotherFiler: '',
    }

    onChangeEventHandler = (event) => {
        this.setState({
            filter: event.target.value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.filter(this.state.filter);
    };

    render() {
        return (
            <form onSubmit="">
                <input type="text" name="filter" onChange={this.onChangeEventHandler}/>
                <button type="submit">Filter</button>
            </form>
        )
    }
}