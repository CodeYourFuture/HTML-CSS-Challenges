// Submiting the form
function showMessage(event) {
  event.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  submitedForm.innerHTML = `Thank you for your order, ${firstName} ${lastName}! We will send your order as soon as possible. Have a nice day!`;
}

//listening to submiting form
let submitedForm = document.querySelector(".order-form");
submitedForm.addEventListener("submit", showMessage);

function changeIntoGreen(event) {
  event.preventDefault();
  alert("Green");
}

function changeIntoBrown(event) {
  event.preventDefault();
  alert("Brown");
}

let greenColor = document.getElementById("green-t-shirt");
console.log(greenColor);
greenColor.addEventListener("click", changeIntoGreen);

let brownColor = document.getElementById("brown-t-shirt");
console.log(brownColor);
brownColor.addEventListener("click", changeIntoBrown);
