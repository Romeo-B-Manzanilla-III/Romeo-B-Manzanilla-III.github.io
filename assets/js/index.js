import { createGroup, closeGroup } from "./CLI.js";

const container = document.querySelector(".list-container"); // get the container
let current = container.appendChild(createGroup("li", "current")); // create first container to container
current.querySelector(".command").focus(); // put cursor on command input

function onkeydown(event) {
  if (event.key === "Enter") {
    // close the group with output same as input
    closeGroup(
      current,
      current.querySelector(".command").value
    ).removeEventListener("keydown", onkeydown);

    // create new group to container
    current = container.appendChild(createGroup("li", "current"));
    current.addEventListener("keydown", onkeydown);
    current.querySelector(".command").focus();
  }
}

current.addEventListener("keydown", onkeydown);
