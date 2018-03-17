import React, { Component } from 'react';  // jos ei  luoda classia, ei tarvitse importata componenttia
import propTypes from 'prop-types';

import classes from './person.css' // css modules. Muutettu config kansiosta.
import withClass from '../../../hoc/withClass';
import Auks from '../../../hoc/auks';

class Person extends Component {
    render() {
        return (
            <Auks>
                <p onClick={this.props.click}> Im a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auks>
        )
    }
}


//Jos tässä olisi class, käyttäisit this.props. Täällä ei käytetä statea
// const style2 = {
//     '@media (min-width: 500px)': {
//         width: '450px'
//     }
// };
Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
};

export default withClass(Person, classes.Person);
