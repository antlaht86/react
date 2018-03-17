import React from 'react';
import classes from './cockpit.css';
import Auks from '../../hoc/auks';

const cockpit = (props) => {

  let assingnedClasses = [];

  let btnClass = classes.button;

  if (props.showPersons) {
    btnClass = [classes.button, classes.Red].join(" ");
  }


  if (props.persons.length <= 2) {
    assingnedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assingnedClasses.push(classes.bold);
  }
  return (

    <Auks>
      <h3>{props.title}</h3>
      <h1> Welcome!</h1>
      <p className={assingnedClasses.join(' ')}> some text</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle name
        </button>
    </Auks>

  );
}

export default cockpit;