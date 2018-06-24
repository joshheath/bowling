function Bowling() {
  this.startFrame = 1;
  this.currentFrame = 1;
  this.scorecard = [0,0];
};

Bowling.prototype.nextFrame = function(){
  this.currentFrame +=1;
};


module.exports = BowlingGame;
