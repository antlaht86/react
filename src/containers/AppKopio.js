import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 2 },
      { name: 'Manu', age: 24 },
      { name: 'Step', age: 15 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }
  switchNameHandler = () => { // pitää käyttää es6 syntaksia. Eli arrowfunctionia. Muuten tulee ongelmia this.sanan kanssa
    //console.log('Was clicked!');
    // this.state.persons[0].name = 'Antti'; tälläinen tapa ei  toimi. Ei ole reactin syntaksin mukaista
    this.setState({
      persons: [
        { name: 'Minttu', age: 29 },
        { name: 'Pekka', age: 29 },
        { name: 'Jorma', age: 12 }
      ]
    })

  };
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Minttu', age: 29 },
        { name: event.target.value, age: 28 },
        { name: 'Jorma', age: 12 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {  // tätä tapaa kutsutaan inline style. Käytetään javascript muotoilua. 
    const style1 = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click1={this.switchNameHandler}
            changed1={this.nameChangeHandler}

          > </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }
    
    return (
      <div className="App">
        <p> hi! </p>
        <button style={style1}
          onClick={this.togglePersonsHandler}>Switch name</button>
        {/* this.switchNameHandler() laukaisee koodin heti */}
        {persons}
      </div>
    );
  }
}

export default App;
