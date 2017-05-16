var userIdAlreadyAnsweredRight = null;

export default class Judge {
  constructor() {
    this.userIdAlreadyAnsweredRight = null;
  }
  getScore(myAnswer, rightAnswer, userId){
    if(myAnswer === rightAnswer){
      if(userIdAlreadyAnsweredRight === null){
        this.userIdAlreadyAnsweredRight = userId;
        return 100;
      }else{
        this.userIdAlreadyAnsweredRight = null;
        return 50;
      }
    }else{
      return -25;
    }
  };
}
