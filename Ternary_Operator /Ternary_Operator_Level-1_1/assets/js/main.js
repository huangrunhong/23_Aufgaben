const age = document.getElementById("age");

const ageOutput = document.getElementById("ageOutput");

function checkAge() {
  const ergibnis =
    Number(age.value) >= 18
      ? (ageOutput.textContent = "Volljährig")
      : (ageOutput.textContent = "Minderjährig");

  console.log(ergibnis);
}
