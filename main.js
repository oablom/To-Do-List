let input = document.querySelector("#input");
let inputButton = document.querySelector("#input-button");
let form = document.querySelector("#form");

let ul = document.createElement("ul");
document.body.appendChild(ul);

let toDoList = [];
toDoListCount = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (toDoListCount < 5) {
    toDoList.push(input.value);
    toDoListCount++;
    console.log(toDoListCount);

    toDoList.forEach((item, index) => {
      let li = document.createElement("li");
      let liButton = document.createElement("button");
      liButton.innerText = "Ta bort\n";

      li.innerText = input.value + "  ";
      li.style.listStyle = "none";

      ul.append(li);
      li.append(liButton);

      liButton.addEventListener("click", () => {
        ul.removeChild(li)[index];
        toDoListCount--;
        console.log(toDoListCount);
      });
      toDoList = [];
    });
  } else if (input.value.trim() === "") {
    alert("Du måste skriva något i textform");
  } else {
    alert("Din lista är full, du får ha max fem punkter i listan.");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toDoListCount > 0) {
    ul.removeChild(ul.children[toDoListCount - 1]);
    toDoListCount--;
    console.log(toDoListCount);
  }
});

// input.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     inputText = event.target.value;
//     alert("hej " + inputText);
//     toDoList.push(inputText);
//     console.log(toDoList);
//   }
// });

function inputEvent() {}

// Skapa en Att göra-lista (todo-list). Användaren ska kunna fylla i ett textfält med något personen behöver göra (diska, städa, köpa kattmat etc). Användaren ska sedan kunna klicka på en knapp för att lägga till ärendet i en Att göra-lista.
// (Extra/Svår) Kan du sätta en maxgräns på fem ärenden i Att göra-listan? Testa!
// (Extra/Svår) När användaren skapar ett ärende, ska även en knapp för att radera ärendet skapas bredvid. När användare klickar på knappen, ska ärendet försvinna.
// //
