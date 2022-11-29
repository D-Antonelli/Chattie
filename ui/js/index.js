let output = document.querySelector(".output");
let input = document.querySelector(".input");
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:3000");
// console.log("hello socket");
// Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Y'ello");
// });

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const query = event.target.value;
    event.target.value = "";
    sendQuery(query);
  }
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
  appendChat(event.data)
});

function sendQuery(query) {
  appendChat(query);
  socket.send(query);
}

function appendChat(chat) {
  let p = document.body.appendChild(document.createElement("p"));
  p.innerHTML = chat;
}
