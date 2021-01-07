const form = document.querySelector("form");
const output = document.querySelector(".output");
const paragraph = document.querySelector(".output");

let numOfParagraphs = "";
const numberOfWords = 80;

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
];

let outputText = ["Ermek ipsum"];

const submitHandler = (e) => {
  e.preventDefault();
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
    }
  }

  if (paragraph) {
    capitalize();
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

const capitalize = () => {
  const capitalizedWord =
    outputText[0].charAt(0).toUpperCase() + outputText[0].slice(1);
  outputText.shift();
  outputText[0] = capitalizedWord;
};

const randomNumber = () => {
  const index = Math.floor(Math.random() * lovePhrases.length);
  return index;
};

//Event listeners
form.addEventListener("submit", submitHandler);
