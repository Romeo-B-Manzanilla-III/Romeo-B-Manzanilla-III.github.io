import { createGroup, closeGroup, createcloseGroup } from "./CLI.js";

const where_do_you_want_to_go = `Where do you want to go?
1) About
2) Skills
3) Projects
4) Contact
`;

const container = document.querySelector(".list-container"); // get the container
container.appendChild(
  createcloseGroup(
    "li",
    "current",
    `
Romeo B. Manzanilla III: TLE Web Portfolio Project

With a unique terminal style to jazz things up

${where_do_you_want_to_go}
`
  )
);

let current = container.appendChild(createGroup("li", "current")); // create first group to container
current.querySelector(".command").focus(); // put cursor on command input
const closeCreateCurrent = (output) => {
  // close the group with output
  closeGroup(current, output).removeEventListener("keydown", onkeydown);

  // create new group to container
  current = container.appendChild(createGroup("li", "current"));
  current.addEventListener("keydown", onkeydown);
  current.querySelector(".command").focus();
};

const createLink = (content, link) => {
  return `<a href="${link}" target=”_blank”>${content}</a>\n`;
};

let promptIndex = 0;
const prompt = [
  (command) => {
    switch (command) {
      case "1":
        return `
This website is for my TLE web portfolio project.
I made it a modern terminal style, so I can have some challenges with it.

The GitHub account for this Website is only made for this project for now,
so if you want to see my actual Github account go to ${createLink(
          "Romelianism",
          "https://github.com/Romelianism"
        )}
${where_do_you_want_to_go}
`;
      case "2":
        return `
I have worked in almost all fields of computer science!

Most skills that i used to make projects with (Chronological order):
${
  createLink("C++", "https://isocpp.org/") +
  createLink("C#", "https://docs.microsoft.com/dotnet/csharp/") +
  createLink(".NET", "https://dotnet.microsoft.com/") +
  createLink("Unity", "https://unity.com/") +
  createLink("WPF", "https://docs.microsoft.com/dotnet/desktop/wpf/") +
  createLink("ElectronJS", "https://www.electronjs.org/") +
  createLink("HTML", "https://html.spec.whatwg.org/") +
  createLink("CSS", "https://www.w3.org/TR/CSS/#css") +
  createLink(
    "JavaScript",
    "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
  ) +
  createLink("Python", "https://www.python.org/") +
  createLink("Numpy", "https://numpy.org/") +
  createLink("Pandas", "https://pandas.pydata.org/") +
  createLink("Matplotlib", "https://matplotlib.org/") +
  createLink("TensorFlow", "https://www.tensorflow.org/") +
  createLink("IBM Quantum", "https://quantum-computing.ibm.com/") +
  createLink("Qiskit", "https://qiskit.org/") +
  createLink("GIT", "https://git-scm.com/") +
  createLink("Linux", "https://www.linux.org/") +
  createLink("TypeScript", "https://www.typescriptlang.org/") +
  createLink("ReactJS", "https://reactjs.org/") +
  createLink("NextJS", "https://nextjs.org/") +
  createLink("Firebase", "https://firebase.google.com/") +
  createLink("Supabase", "https://supabase.com/") +
  createLink("Prisma", "https://www.prisma.io/") +
  createLink("Material UI", "https://mui.com/") +
  createLink("Mantine", "https://mantine.dev/") +
  createLink("Rust", "https://www.rust-lang.org/") +
  createLink("Bevy", "https://bevyengine.org/") +
  createLink("C", "https://www.iso.org/standard/74528.html")
}
${where_do_you_want_to_go}
`;
      case "3":
        return `
I really like to start a project, then abandon it after I find something cooler.
This helped me learn a lot over all fields.

This isn't even all of it.

It is too much to list all of it:<code>
3 Cube Chance
Alter 1010
Realm World
Quantum Resizable Addition and Multiplication
StockAI
BuffetBot
Connect4
PartThis.Space
AI Chat
Simple AI
RNN
ALL AI
Snake
Rust Snake
The Bloch Sphere Visualizer
Autoencoder
FlappyTurd
ChaosBall
Procedural Generator
World Of Wonder
Shoot For Life
RealmIsle
Chunk-System
Fluffy Blog
Shuper
Rhash
TensorFlowUI
WriteALog
Cryptop
Amazon Web Scraper
</code>
${where_do_you_want_to_go}
`;
      case "4":
        return `
NOTE: This doesn't really send the message to me;
this is just for completion;
but you can contact me at romelianism@gmail.com!
<form><label>
Name: 
<input></input>
</label><label>
Email: 
<input></input>
</label><label>
Message: 
<textarea></textarea>
</label>
<input type="submit" value="Submit">
</form>
${where_do_you_want_to_go}
`;
    }
    return `
Invalid Input

${where_do_you_want_to_go}
`;
  },
];
function onkeydown(event) {
  if (event.key === "Enter") {
    closeCreateCurrent(
      prompt[promptIndex](current.querySelector(".command").value)
    );
  }
}

current.addEventListener("keydown", onkeydown);
