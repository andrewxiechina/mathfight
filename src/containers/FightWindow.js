import React, { Component } from 'react';
import MultipleChoice from '../components/MultipleChoice';
import '../styles/FightWindow.css'
class FightWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      me: {
        name: "Andy",
        scores: [-25, 100, 50, 0, null],
        avatar: "../img/sumrez.png"
      },
      progress: 0,
      questions: [
        {
          id: 1,
          content: "兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
          options: [
            "100",
            "200",
            "300",
            "400"
          ],
          answer: 2
        },
        {
          id: 2,
          content: "兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
          options: [
            "100",
            "200",
            "300",
            "400"
          ],
          optionSelected: 2,
          answer: 2
        },
        {
          id: 3,
          content: "兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
          options: [
            "100",
            "200",
            "300",
            "400"
          ],
          optionSelected: 2,
          answer: 2
        },
        {
          id: 4,
          content: "兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
          options: [
            "100",
            "200",
            "300",
            "400"
          ],
          optionSelected: 2,
          answer: 2
        },
        {
          id: 5,
          content: "兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
          options: [
            "100",
            "200",
            "300",
            "400"
          ],
          optionSelected: 2,
          answer: 2
        },

      ]
    }
  }

  handleAnswer(answer) {
    console.log(answer)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 ">
            <div className="card fight-window-user" >
              <img className="card-img-top" src="../img/sumrez.png"/>

              <ul className="list-group list-group-flush">
                <li className="list-group-item"><h2>Score: 500</h2></li>
                <li className="list-group-item small text-center">100/100</li>
                <li className="list-group-item list-group-item-success small text-center">100/100</li>
                <li className="list-group-item list-group-item-warning small text-center">100/100</li>
              </ul>

            </div>
          </div>
          <div className="col-sm-6">
            <MultipleChoice question={this.state.questions[0]} submit={(answer) => {this.handleAnswer(answer)}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FightWindow;
