import { createGroup, closeGroup, createcloseGroup } from "./CLI.js";

const container = document.querySelector(".list-container"); // get the container
container.appendChild(
  createcloseGroup(
    "li",
    "current",
    `
Romeo B. Manzanilla III: Web Portfolio Project

With a unique terminal style to jazz things up

What do you to know about Romeo B. Manzanilla III
1) Things
    `
  )
);

let current = container.appendChild(createGroup("li", "current")); // create first group to container
current.querySelector(".command").focus(); // put cursor on command input

function onkeydown(event) {
  if (event.key === "Enter") {
    const closeCreateCurrent = (output) => {
      // close the group with output
      closeGroup(current, output).removeEventListener("keydown", onkeydown);

      // create new group to container
      current = container.appendChild(createGroup("li", "current"));
      current.addEventListener("keydown", onkeydown);
      current.querySelector(".command").focus();
    };

    if (current.querySelector(".command").value == "1")
      closeCreateCurrent("I started programming because it's cool!");
    else closeCreateCurrent("Invalid Input");
  }
}

current.addEventListener("keydown", onkeydown);
