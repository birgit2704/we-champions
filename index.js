let textAreaEl = document.getElementById("text-field");
let buttonEl = document.getElementById("publish-btn");
let messageBoardEl = document.getElementById("message-board");

buttonEl.addEventListener("click", function () {
  let newMessage = textAreaEl.value;
  messageBoardEl.innerHTML =
    `<p class="message-txt">${newMessage}</p>` + messageBoardEl.innerHTML;
  textAreaEl.value = "";
});
