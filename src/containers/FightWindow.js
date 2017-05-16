import React, { Component } from 'react';
import MultipleChoice from '../components/MultipleChoice';
import UserStatus from '../components/UserStatus';
import Judge from './Judge'
import '../styles/FightWindow.css';

const INITIAL_STATE = {
  me: {
    id: 1,
    name: "Andy",
    scores: [null, null, null, null, null],
    avatar: "../img/sumrez.png"
  },
  opponent: {
    id: 2,
    name: "Julius",
    scores: [null, null, null, null, null],
    avatar: "../img/sumrez.png"
  },
  progress: 0,
  questions: [
    {
      id: 1,
      content: "QUESTION 01: 兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
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
      content: "QUESTION 02: 兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
      options: [
        "100",
        "200",
        "300",
        "400"
      ],
      answer: 2
    },
    {
      id: 3,
      content: "QUESTION 03: 兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
      options: [
        "100",
        "200",
        "300",
        "400"
      ],
      answer: 2
    },
    {
      id: 4,
      content: "QUESTION 04: 兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
      options: [
        "100",
        "200",
        "300",
        "400"
      ],
      answer: 2
    },
    {
      id: 5,
      content: "QUESTION 05: 兔子和乌龟相约进行1000米赛跑,兔子的速度是乌龟速度的5倍,它们同时起跑,乌龟不停地跑,轻敌的兔子跑到某一点就睡着了.当兔子醒来时,发现乌龟已领先500米,于是奋起直追.然而当乌龟到终点时,兔子仍落后10米,兔子懊悔不已,兔子在睡觉的时候乌龟跑了多少米?",
      options: [
        "100",
        "200",
        "300",
        "400"
      ],
      answer: 2
    },

  ]
};

class FightWindow extends Component {
  constructor(props){
    super(props);
    this.judge = new Judge();
    this.state = INITIAL_STATE;
  }

  handleAnswer(answer) {
    var scores = this.state.me.scores;
    var rightAnswer = this.state.questions[this.state.progress].answer;
    scores[this.state.progress] = this.judge.getScore(answer, rightAnswer, this.state.me.id);

    this.setState({
      me:{
        name: this.state.me.name,
        avatar: this.state.me.avatar,
        scores: scores,
      }
    })

    if(!(this.state.progress >= this.state.me.scores.length-1)){
      this.setState({
        progress: this.state.progress + 1,
      });
    }


  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 ">
            <UserStatus user={this.state.me}/>
          </div>
          <div className="col-sm-6">
            <h2>Question {this.state.progress + 1}</h2>
            <MultipleChoice question={this.state.questions[this.state.progress]} submit={(answer) => {this.handleAnswer(answer)}}/>
          </div>
          <div className="col-sm-3 ">
            <UserStatus user={this.state.opponent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FightWindow;
