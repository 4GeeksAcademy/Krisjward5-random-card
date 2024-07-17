/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suit = [
  ["♦", "diamond"],
  ["♥", "heart"],
  ["♠", "spade"],
  ["♣", "club"]
];

const face = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generateRandomCard() {
  const suitIndex = Math.floor(Math.random() * suit.length);
  const randomSuit = suit[suitIndex];

  const topLeftSuitDivElement = document.querySelector(".top-left-suit");
  topLeftSuitDivElement.innerText = randomSuit[0];

  const bottomRightSuitDivElement = document.querySelector(
    ".bottom-right-suit"
  );
  bottomRightSuitDivElement.innerText = randomSuit[0];

  const faceIndex = Math.floor(Math.random() * face.length);
  const randomFace = face[faceIndex];

  const cardNumberDivElement = document.querySelector(".card-number");
  cardNumberDivElement.innerText = randomFace;

  for (const s of suit) {
    const suitClassName = s[1];
    if (suitClassName === randomSuit[1]) {
      topLeftSuitDivElement.classList.add(suitClassName);
      bottomRightSuitDivElement.classList.add(suitClassName);
    } else {
      topLeftSuitDivElement.classList.remove(suitClassName);
      bottomRightSuitDivElement.classList.remove(suitClassName);
    }
  }
}

window.onload = generateRandomCard;

const randomCardGenButton = document.querySelector(".new-card-button");
randomCardGenButton.addEventListener("click", generateRandomCard);

const intervalID = setInterval(generateRandomCard, 5000);
