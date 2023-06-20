let textAreaEl = document.getElementById("text-field");
let buttonEl = document.getElementById("publish-btn");
let messageBoardEl = document.getElementById("message-board");
let fromEl = document.getElementById("from");
let toEl = document.getElementById("to");

buttonEl.addEventListener("click", function () {
  let newMessage = textAreaEl.value;
  let from = fromEl.value;
  let to = toEl.value;
  let newElementInMessageboard = `<p class="message-txt bold">
  To ${to} <br/><span class="inner">${newMessage}</span><br/>From ${from}</p><p class="inner">hi</p>`;

  messageBoardEl.innerHTML =
    newElementInMessageboard + messageBoardEl.innerHTML;
  textAreaEl.value = "";
  fromEl.value = "";
  toEl.value = "";
});
