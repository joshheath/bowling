// 'use strict';
describe("TenpinBowlingGame", function() {

var bowling = new Bowling();

  it('starts the game at frame 1', function() {
    expect(bowling.currentFrame).toEqual(1)
  })

  it('can progress to the next frame', function(){
    bowling.nextFrame();
    expect(bowling.currentFrame).toEqual(2);
  });

});
