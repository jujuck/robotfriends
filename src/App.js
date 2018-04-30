import React, {Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './searchBox'


class App extends Component {
    constructor(props) {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange(event) {
        console.log(event);
    }
    
    render() {
        return (
            <div className="tc">
                <h1> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>

        );
    }
}

export default App;
