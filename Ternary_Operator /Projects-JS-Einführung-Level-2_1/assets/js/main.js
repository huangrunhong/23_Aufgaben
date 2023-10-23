const messageInput = document.querySelector("#messageInput");

const messageOutput = document.querySelector("#messageOutput");

const warning = document.querySelector("#warning");

function checkMessage() {
  const message = messageInput.value;
  const messageLength = message.length;
  //   messageLength >= 1
  //     ? (messageOutput.textContent = messageInput.value)
  //     : (warning.textContent = "Gib bitte eine Nachricht ein!");

  if (messageLength >= 1) {
    messageOutput.textContent = messageInput.value;
    warning.textContent = "";
  } else {
    warning.textContent = "Gib bitte eine Nachricht ein!";
  }
}
