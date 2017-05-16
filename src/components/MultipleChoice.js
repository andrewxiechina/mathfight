import React, { Component } from 'react';

class MultipleChoice extends Component {
  renderItems() {
    const options = this.props.question.options;
    const listItems = options.map((item, key) =>
      <li
        className={(key===this.props.question.optionSelected ? "list-group-item-success" : "")
                    + " list-group-item list-group-item-action "}
        key={key}
        >
        <a>{item}</a>
      </li>
    );
    return (
      listItems
    );
  }
  render() {
    return (
      <div className="container">
      <div className="list-group-item">{this.props.question.content}</div>
      <ul className="list-group">
        {this.renderItems()}
      </ul>
      </div>
    );
  }
}

export default MultipleChoice;
