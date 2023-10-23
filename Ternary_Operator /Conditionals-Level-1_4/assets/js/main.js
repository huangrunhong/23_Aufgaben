const passwordInput = document.body.querySelector("#passwordInput");

const result = document.querySelector("#result");

function checkPassword() {
  let zahl = passwordInput.value;
  console.log(zahl.length);
  const zahlLength =
    zahl.length >= 8
      ? (result.textContent = "The password is sicher")
      : (result.textContent = "The password is too short");
}
