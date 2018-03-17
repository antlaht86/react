
// // react tarvitsee keyn jotta voi kohdentaa elementin tai osan listasta
//         // Jos lisäisit esim errorBoundaryn, laita siihen key. koska keyn on oltava aina ulommaisessa elementissä.
//         //käytä errorBoundaryä vain silloin, kun oletat koodin olevan paskaa. errorBoundary löytyy udemystä.

import React, { Component } from 'react';  // pureComponentissä on sisään rakennettu shouldComponentUpdatessa olevat tarkastus toiminnot
                                            // käytetään vain jos tiedät että on paljon componentteja joiden ei pitäisi uppaantua

import Person from './person/person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[persons.js] Inside Constructor', props)
    }

    componentWillMount() {
        console.log('[persons.js] inside ComponentWillMount()');
    }

    componentDidMount() {
        console.log('[persons.js] inside componentDidMount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('[Update persons.js] inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] inside shouldComponentUpdate', nextProps, nextState);
        // return false
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate() {
        console.log('[Update Persons.js] inside componentDidUpdate');
    }

    render() {
        console.log('[persons.js] inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;