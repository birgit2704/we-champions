// https://realtime-database2-54e92-default-rtdb.europe-west1.firebasedatabase.app/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database2-54e92-default-rtdb.europe-west1.firebasedatabase.app",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const messageListInDB = ref(database, "messageList");

let textAreaEl = document.getElementById("text-field");
let buttonEl = document.getElementById("publish-btn");
let messageBoardEl = document.getElementById("message-board");
let fromEl = document.getElementById("from");
let toEl = document.getElementById("to");

buttonEl.addEventListener("click", function () {
  let newMessage = `To: ${toEl.value} ${textAreaEl.value} From: ${fromEl.value}`;
  addMessageToMessageboard(newMessage);
  push(messageListInDB, newMessage);
  clearValues();
  console.log(newMessage);
});

onValue(messageListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let storedMessages = Object.entries(snapshot.val());
    messageBoardEl.innerHTML = "";
    storedMessages.forEach((message) => addMessageToMessageboard(message));
  } else {
    messageBoardEl.innerHTML = "No messages here";
  }
});

function addMessageToMessageboard(input) {
  let newElementInMessageboard = document.createElement("p");
  newElementInMessageboard.textContent = input[1];
  messageBoardEl.prepend(newElementInMessageboard);

  newElementInMessageboard.addEventListener("click", function () {
    let exactLocationOfMessageInDB = ref(database, `messageList/${input[0]}`);
    remove(exactLocationOfMessageInDB);
  });
}

function clearValues() {
  textAreaEl.value = "";
  fromEl.value = "";
  toEl.value = "";
}
