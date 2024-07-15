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

window.onload = function() {
  const suitIndex = Math.floor(Math.random() * suit.length);
  const randomSuit = suit[suitIndex];

  const topLeftSuitDivElement = document.querySelector(".top-left-suit");
  topLeftSuitDivElement.classList.add(randomSuit[1]);
  topLeftSuitDivElement.innerText = randomSuit[0];

  const bottomRightSuitDivElement = document.querySelector(
    ".bottom-right-suit"
  );
  bottomRightSuitDivElement.classList.add(randomSuit[1]);
  bottomRightSuitDivElement.innerText = randomSuit[0];

  const faceIndex = Math.floor(Math.random() * face.length);
  const randomFace = face[faceIndex];

  const cardNumberDivElement = document.querySelector(".card-number");
  cardNumberDivElement.innerText = randomFace;
};
