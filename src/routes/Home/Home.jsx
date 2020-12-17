import React, { Component } from 'react';
// import Counter from '../../components/Counter/Counter';
// import Todo from '../../components/Todo/Todo';
// import Clock from '../../components/Clock/Clock.jsx';
// import ShowService from '../../services/showService.jsx';
import MagazineList from '../../components/MagazineList/Magazinelist.jsx'
import './Home.css';

class HomePage extends Component {

    render(){
        return (
            <div>
                {/* <p>This is Home Page</p> */}
                <p>Username : {this.props.user}</p>
                {/* <Clock />
                <Counter />
                <Todo /> */}
                <MagazineList />  
            </div>
        );
    }
}

export default HomePage;


