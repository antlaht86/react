import React, { Component } from 'react';


import classes from './app.css';
import Cockpit from '../components/cockpit/cockpit';
import Personss from '../components/persons/persons';
import Auks from '../hoc/auks';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
  }
  state = {
    persons: [
      { id: 'asdsa1', name: 'Max', age: 2 },
      { id: 'asddsa2', name: 'Manu', age: 24 },
      { id: 'fdge1', name: 'Step', age: 15 },

    ],
    otherState: 'Some other value',
    showPersons: false,
    toggleClicked: 0
  }

  componentWillMount() {
    console.log('[App.js] inside ComponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update app.js.js] inside shouldComponentUpdate', nextProps, nextState);
    // return true
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;

  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update app.js.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update app.js] inside componentDidUpdate');
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // console.log("p: ", p);//{id: "asdsa1", name: "Max", age: 2}
      // console.log("id: ", id);//id:  asdsa1
      return p.id === id;
    });
    // console.log("personIndex: ", personIndex);

    const person = {// tämä tehdään siksi, ettei muuteta pointteria, vaan kopioidaan oikeaste olio tänne
      ...this.state.persons[personIndex]
    };


    // const person = Object.assign({}, this.state.persons[personIndex]); <--vanha tapa

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();<-- vanhatapa. ennempää kuin aloitat manipuloimaan taulukkoa, on hyvä ottaa sitää kopio
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      console.log('prevState: ', prevState, 'props', props);
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('[App.js] inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Personss
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />
    }

    return (

      <Auks>
        <button
          onClick={() => {
            this.setState({
              showPersons: true
            });
          }}
        >Show Persons</button>

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          title={this.props.title}
        />
        {persons}
      </Auks>

    );
  }
}



export default withClass(App, classes.App);

   // tätä tapaa kutsutaan inline style. Käytetään javascript muotoilua. 
    // const style1 = { <---inline styling
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   marginTop: '20px' 
    //   // ':hover': {  <--- Radium tapa
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };

   // style1.backgroundColor = 'red';
      // style1[':hover'] = { <<-- Radium
      //   backgroundColor: 'lightred',
      //   color: 'black'
      //  }; 