import React from 'react';

import { Nav, Navbar}  from 'react-bootstrap';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {}

// React compenents/functions should return JSX.
export default () => {
//   render() {
    return (
      <>
        <ToDo />
      </>
    );
}
