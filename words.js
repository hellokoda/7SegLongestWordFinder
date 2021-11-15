var fs = require("fs");
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");

var badLetters = /[gkmqvwxzio]/;
var longestAcceptableWord = "";
var wordLen = 0;

for(let i = 0; i < words.length; i++) {
    if(words[i].match(badLetters)) { continue; }

    if(words[i].length > wordLen) {
        wordLen = words[i].length;
    }
}

var wordList = [];
for(let i = 0; i < words.length; i++) {
    if(words[i].match(badLetters)) { continue; }
    if(words[i].length != wordLen) { continue; }

    wordList.push(words[i]);
}

console.log(wordList);
