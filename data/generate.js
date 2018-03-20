const Markov = require('./markov').Markov;

const zlib = require('zlib');
const fs = require('fs');
const path = require('path');


let currentMarkov;
const markovs = {};
const messages = JSON.parse(fs.readFileSync('messages.txt'));
messages.forEach((message) => {
  currentMarkov = getMarkov(message.corpus);
  message.subject = sen2gibberish(1, message.subject);
  const pars = message.body.split("\n");
  const sig = pars.slice(-2);
  message.body = msg2gibberish(message.body) + '\n' + sig.join("\n");
});
fs.writeFile('messages.json', JSON.stringify(messages), 'utf-8');


function sen2gibberish(mult, sentence) {
  const words = sentence.split(/\s+/).length * mult;
  const start = currentMarkov.randomStart();
  const gibberish = currentMarkov.generate(start, words);

  let sentence = gibberish;

  while (sentence.match(/^ *[,.?!]/)) {
    const words = sentence.split(/\s/);
    const newWord = currentMarkov.generate(words.slice(-2), 1);
    sentence = words.slice(1).join(" ") + newWord;
  }

  sentence = sentence.replace(/ ([^\w])/g, "$1");

  sentence = sentence.replace(/[!?.] [a-z]/g, (txt) => {
    const len = txt.length;
    return txt.substr(0, len-1) + txt.charAt(len - 1).toUpperCase();
  });

  sentence = sentence.trim().replace(/\w.+/, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });

  console.log("sentence: " + sentence);
  return sentence + ".";
}

function par2gibberish(paragraph) {
  return paragraph.split(/\./)
    .map(sen2gibberish.bind(null, 2))
    .join("   ");
}

function msg2gibberish(message) {
  return message.split("\n")
    .filter((s) => {
      return s.trim().length; 
    })
    .map(par2gibberish)
    .join("\n");
}


function getMarkov(corpus) {
  if (!markovs[corpus]) {
    markovs[corpus] = new Markov();
    const inputFile = path.join(__dirname, '/corpora/', corpus + '.txt');
    let text = fs.readFileSync(inputFile, 'utf8');
    text = text.replace(/([^\s\w.,?!])/g, "");
    text = text.replace(/([.,?!])/g, " $1 ");
    console.log("*** Training markov corpus with " + corpus);
    markovs[corpus].train(text);
  }
  return markovs[corpus];
}

