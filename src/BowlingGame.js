function Bowling() {
  this.startFrame = 1;
  this.currentFrame = 1;
  this.scorecard = [0,0];
  this.roll = 1
};

Bowling.prototype.nextFrame = function(){
  this.currentFrame +=1;
};

Bowling.prototype.isFirstRoll = function(){
  return this.roll ===1;
};

Bowling.prototype.nextRoll = function(){
  this.isFirstRoll() ? this.roll = 2 : this.roll = 1;
};

module.exports = BowlingGame;
