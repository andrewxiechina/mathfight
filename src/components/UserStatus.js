import React, { Component } from 'react';

export default class UserStatus extends Component{
  getScore() {
    function add(a, b) {
        return a + b;
    }
    return this.props.user.scores.reduce(add);
  }
  getText(score) {
    if(score !== null){
      return "" + score + "/100"
    }else{
      return "--";
    }
  }
  getClass(score) {
    var itemColor = ""
    switch (score) {
      case 100:
        itemColor = "list-group-item-success";
        break;
      case -25:
        itemColor = "list-group-item-danger";
        break;
      case 50:
        itemColor = "list-group-item-warning";
        break;
      case 0:
        itemColor = "list-group-item-warning";
        break;
      default:
        itemColor = "";
    }
    return "list-group-item small " + itemColor;
  }
  renderItems() {
    const options = this.props.user.scores;
    const listItems = options.map((score, key) =>
      <li className={this.getClass(score)} key={key} >{this.getText(score)}</li>
    );
    return (
      listItems
    );
  }
  render() {
    return (
      <div className="card fight-window-user" >
        <img className="card-img-top" src={this.props.user.avatar} alt=""/>

        <ul className="list-group list-group-flush">
          <li className="list-group-item flex-row align-items-start">
            <div><h3>Score: {this.getScore() }</h3></div>
            <div className="align-self-end text-muted">{this.props.user.name}</div>
          </li>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}
