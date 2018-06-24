// 'use strict';
describe("TenpinBowlingGame", function() {

var bowling = new Bowling();

  it('starts the game at frame 1', function() {
    expect(bowling.startFrame).toEqual(1)
  })

  it('can progress to the next frame', function(){
    bowling.nextFrame();
    expect(bowling.currentFrame).toEqual(2);
  });

  it('scorecard starts as an array with space to record two rolls per frame', function(){
    expect(bowling.scorecard).toEqual([0,0])
  });

});
