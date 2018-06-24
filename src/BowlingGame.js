function Bowling() {
  this.currentFrame = 1;
};

Bowling.prototype.nextFrame = function(){
  this.currentFrame +=1;
};

module.exports = BowlingGame;
