// Submiting the form
function showMessage(event) {
  event.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  submitedForm.innerHTML = `Thank you for your order, ${firstName} ${lastName}! We will send your order as soon as possible. Have a nice day!`;
}

var submitedForm = document.querySelector(".order-form");
submitedForm.addEventListener("submit", showMessage);
