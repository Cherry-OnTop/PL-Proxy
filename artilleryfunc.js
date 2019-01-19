'use strict';

module.exports = {
  randomizeNum
};

function randomizeNum(context, events, done) {
  var randomNum = Math.floor(Math.random() * Math.floor(10000100));
  context.vars.randomNum = randomNum;
  // continue with executing the scenario:
  return done();
}
