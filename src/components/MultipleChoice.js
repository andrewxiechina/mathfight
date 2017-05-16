import React, { Component } from 'react';

class MultipleChoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null,
    };
  }
  onClick(id) {
    this.setState({
      selected: id,
    })
  }
  submit() {
    if(this.state.selected !== null){
      this.props.submit(this.state.selected);
    }
  }
  renderItems() {
    const options = this.props.question.options;
    const listItems = options.map((item, key) =>
      <li
        className={(key===this.state.selected ? "list-group-item-success" : "")
                    + " list-group-item list-group-item-action "}
        key={key}
        onClick={() => {this.onClick(key)}}
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
        <ul className="list-group">
          <li className="list-group-item">{this.props.question.content}</li>
          {this.renderItems()}
          <li className="btn btn-primary btn-lg" onClick={() => this.submit() }>Submit</li>
        </ul>

      </div>
    );
  }
}

export default MultipleChoice;
