import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <label>Hack <strong>Key</strong> Property in Component List</label>
        <TodoList />
      </div>
    );
  }
}

export default App;
