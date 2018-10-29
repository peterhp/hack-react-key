import React from 'react';
import shortid from 'shortid';

const Label = props => {
  console.log(`${props.parent}::${props.name} rendered.`);
  return (<label>{props.text}</label>);
};

const Input = props => {
  console.log(`${props.parent}::${props.name} rendered.`);
  return (<input />);
};

let tiCounter = 0;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      self: `TI#${tiCounter}_${shortid.generate()}`
    };

    tiCounter++;

    console.log(`${this.state.self} constructed.`);
  }

  render() {
    return (
      <tr>
        <td><Label name='ID' parent={this.state.self} text={this.props.id} /></td>
        <td><Label name='Tag' parent={this.state.self} text={this.props.tag} /></td>
        <td><Input name='Note' parent={this.state.self} /></td>
        <td><Label name='Self' parent={this.state.self} text={this.state.self} /></td>
      </tr>
    );
  }

  componentDidMount() {
    console.log(`${this.state.self} mounted.`);
  }

  componentWillUnmount() {
    console.log(`${this.state.self} will unmount.`);
  }

  componentWillReceiveProps() {
    console.log(`${this.state.self} will update props.`);
  }

  componentDidUpdate() {
    console.log(`${this.state.self} updated.`);
  }
}

export default TodoItem;
