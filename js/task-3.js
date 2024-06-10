const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", changeName);
function changeName() {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
}

