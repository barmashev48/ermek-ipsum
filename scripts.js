const form = document.querySelector("form");
const output = document.querySelector(".output");
const paragraph = document.querySelector(".output");

let numOfParagraphs = "";
let firstInSentence = "";

const lovePhrases = [
  "chipotle mayo",
  "Mom",
  "Dad",
  "pub crawls",
  "Wales",
  "Singapore",
  "Canada",
  "coding",
  "overeating",
  "english soccer",
  "old soviet films",
  "watching the night sky",
  "playing with dogs",
  "smart children",
  "finnish sauna",
  "diving into snow after sauna",
  "seeing other people succeed",
  "when ex texts you and you dont care",
  "strawberries",
  "cheesecake",
  "gyro",
  "Miss Vickies",
  "cheez whiz",
  "David Fincher",
  "4th quarter of a basketball game",
  "waking up early",
  "smoking weed alone",
  "camel milk",
  "Almaty, Kazakhstan",
  "watermelons",
  "pouring beer over stones in sauna",
  "when a bartender remembers your drink",
  "cherry beer",
  "gin and tonic",
  "cheap vodka",
  "french language",
  "sleeping on the fresh sheets",
  "korean cinema",
  "kazakh girls",
  "smell of basement",
  "shrimp",
  "ikea",
  "thrift stores",
  "Manchester United",
  "sad movies",
  "taking roadtrips to nowhere in particular",
  "helping people",
  "Ancient Aliens",
  "diversity",
  "conspiracy theories",
  "airplane food",
  "havingg my expectations exceeded",
  "black cats",
  "girls with bob cuts",
  "swimming in the lake",
  "making travel plans",
  "travelling to random obscure places",
  "getting roasted",
  "getting tattoed",
  "strawberries with kefir",
  "kazakh weddings in moderate amounts",
  "watching opera while drunk",
  "a hoagie",
  "empty art galleries",
  "brushing teeth with a new toothbrush",
  "giving presents",
  "Daft Punk - Something About Us",
  "wasabi flavoured pistachios",
  "hugging trees when drunk",
  "understanding a foreign language",
  "mentol cigarettes",
  "smell of a fresh baked bread",
  "smell of old books",
  "smell of new books",
  "having exact change",
  "Eric Andre",
  "fishing, I guess",
  "doing somethink kind without anyone knowing",
  "getting the corner seat on subway",
  "reading a book in one sitting",
  "partying with indians",
  "overcomplicated board games",
  "reading Harry Potter when I was a kid",
  "when people unintenionally say something funny",
  "basil",
  "buffalo chicken strips dipped into queso",
];

let outputText = ["Ermek ipsum"];

const submitHandler = (e) => {
  e.preventDefault();
  output.innerHTML = "";
  numOfParagraphs = parseInt(e.target.elements[0].value);
  evaluateArr();
};

const newParagraph = () => {
  if (numOfParagraphs > 0) {
    evaluateArr();
  }
};

const evaluateArr = () => {
  while (outputText.length < 60) {
    addNewWord();
    //Every 5 phrases add period to the last word
    if (outputText.length % 5 === 0) {
      const lastWordInSentence = outputText[outputText.length - 1];
      const wordArray = lastWordInSentence.split("");
      wordArray.push(". ");
      const finishedWord = wordArray.join("");
      outputText.pop();
      outputText.push(finishedWord);
    } else if (outputText.length % 5 === 1) {
      const currentWord = outputText[outputText.length - 1];
      const capitalizedWord = capitalize(currentWord);
      outputText.pop();
      outputText.push(capitalizedWord);
    }
  }

  if (paragraph) {
    const firstWord = capitalize(outputText[0]);
    outputText.shift();
    outputText[0] = firstWord;
  }

  output.insertAdjacentHTML(
    "beforeend",
    `<p class="paragraph">${outputText.join(" ")}</p>`
  );
  outputText.splice(0);
  numOfParagraphs -= 1;
  newParagraph();
};

const addNewWord = () => {
  const randomIndex = randomNumber();
  outputText.push(lovePhrases[randomIndex]);
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const randomNumber = () => {
  const index = Math.floor(Math.random() * lovePhrases.length);
  return index;
};

//Event listeners
form.addEventListener("submit", submitHandler);
