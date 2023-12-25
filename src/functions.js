import messages from "./messages.js";
import * as el from "./elements.js";

export function openBiscuit() {
  const number = Math.round(Math.random() * (messages.length - 1));
  const phrase = messages[number];

  el.message.textContent = phrase;
  toggleScreen();
  el.message.classList.add('animation');
}

export function toggleScreen() {
  el.screen1.classList.toggle("hide");
  el.screen2.classList.toggle("hide");
}