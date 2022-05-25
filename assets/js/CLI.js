export function createGroup(tag, id) {
  // create group element
  const group = document.createElement(tag);
  if (id) group.setAttribute("id", id);
  group.setAttribute("class", "group");

  // create the input_line
  const input_line = group.appendChild(document.createElement("div"));
  input_line.setAttribute("class", "input-line");

  // create the prompt in input_line
  const prompt = input_line.appendChild(document.createElement("pre"));
  prompt.setAttribute("class", "prompt");
  prompt.textContent = "[user@HTML5] # ";

  // create the command input in input_line
  const command = input_line.appendChild(document.createElement("input"));
  command.setAttribute("class", "command");
  command.setAttribute("autocomplete", "off");

  // create the output
  const output = group.appendChild(document.createElement("output"));

  return group;
}

export function closeGroup(group, output) {
  group.querySelector("output").innerHTML = output;
  group.removeAttribute("id");
  group.querySelector(".command").disabled = true;
  return group;
}

export function createcloseGroup(tag, id, output) {
  return closeGroup(createGroup(tag, id), output);
}
