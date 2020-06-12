import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {
constructor(){
super();

this.state = {
  rekt: 'moneehz',
  huehue: 'boisboisbois'
}

this.state = {
  monsters: [
    {name: "bob", email: "bob@gmail.com", id:2},
    {name: "benny", email: "benny@gmail.com", id:3},
    {name: "bertha", email: "bertha@gmail.com", id:4}],
  searchField: ''
};


}

handleChange = (e) => {
  this.setState({searchField: e.target.value}, () => console.log(this.state));
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}));
  
  }

  render (){
    const { monsters, searchField } = this.state; //Fetcher variablerne fra state som destructured elementer. På den måde er de frakoblet det oprindelig objekt og vi ændrer kun klonen.
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (<div className="App">
    <h1>Monsters Rolodex</h1>
<SearchBox placeholder="Click here to search" handleChange={this.handleChange}/>
    <CardList monsters={filteredMonsters} />
  </div>
    )};
}

export default App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
//   Hello bois, {this.state.huehue}, {this.state.rekt}
//   <button onClick={() => this.setState({rekt: 'dododouuuble reekt bois'})}>test</button>

  
// </p>


// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
