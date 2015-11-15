wordScore = function(word){
  return _.reduce(
    word.split(''),
    function(subTotal, letter){
      letter = letter.toUpperCase();
      letterValue = letterVals[letter]
      // console.log("wordScore : " + subTotal + " - " + letter + " - " + letterValue);
      return subTotal + letterValue;
    }
  ,0)
}

var letterVals = {
  "A":1,
  "B":3,
  "C":3,
  "D":2,
  "E":1,
  "F":4,
  "G":2,
  "H":4,
  "I":1,
  "J":8,
  "K":5,
  "L":1,
  "M":3,
  "N":1,
  "O":1,
  "P":3,
  "Q":10,
  "R":1,
  "S":1,
  "T":1,
  "U":1,
  "V":4,
  "W":4,
  "X":8,
  "Y":4,
  "Z":10
}

var fs = require('fs');
var wordListPath = require('word-list');
var _ = require('underscore');

var wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

var maxScore = 0, maxWord, minScore = 0, minWord, totalScore = 0, wordCount = 0;

_.each(wordArray, function(word) {
  if (typeof word === 'string' && word.length < 8){
    var score = wordScore(word);
    wordCount = wordCount + 1;
    if (isNaN(score)){
      console.log(word)
    } else
    {
      totalScore = totalScore + score;
      if (minScore == 0 || score < minScore) {
        minScore = score;
        minWord = word
      }
      if (score > maxScore) {
        maxScore = score;
        maxWord = word
      }
    }
  }
})

console.log( "MAX: " + maxScore + " - " + maxWord + " MIN: " + minScore + " - " + minWord + " - TOTAL: " + totalScore+ " - " + wordCount + " AVG: " +  totalScore / wordCount)


// var wordsWithScores = []
// for (i = 0; i < 100; i++) {
//   var word = _.sample(wordArray);
//   var wordAndScore={}
//   wordAndScore[word] = wordScore(word)
//   wordsWithScores.push(wordAndScore);
// }
// console.log(wordsWithScores);
