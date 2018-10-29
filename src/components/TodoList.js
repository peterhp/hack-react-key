import React from 'react';
import TodoItem from './TodoItem';
import shortid from 'shortid';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      counter: 0
    };
  }

  sortById() {
    const sorted = this.state.todos.sort(
      (t1, t2) => t1.id - t2.id
    );
    this.setState({todos: [...sorted]});
  }

  addFront() {
    const cnt = this.state.counter;
    this.setState({
      todos: [
        {id: cnt, tag: `TAG::ID#${cnt}`}, 
        ...this.state.todos
      ],
      counter: cnt + 1
    });
  }

  addTail() {
    const cnt = this.state.counter;
    this.setState({
      todos: [
        ...this.state.todos, 
        {id: cnt, tag: `TAG::ID#${cnt}`}
      ],
      counter: cnt + 1
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.addFront.bind(this)}>Add to Front</button>
          <button onClick={this.addTail.bind(this)}>Add to Tail</button>
          <button onClick={this.sortById.bind(this)}>Sort by Id</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tag</th>
              <th>Note</th>
              <th>Self</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map(
                (todo, index) => (
                  <TodoItem key={todo.id} {...todo} />
                )
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
