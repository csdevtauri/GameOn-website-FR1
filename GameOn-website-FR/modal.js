function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// #2 Implement form entries
//Firstname --> Lastname --> Email --> Numbers tournaments
function validate() {
  console.log("Validate");

  let formValid = true;

  const inputFirstName = document.querySelector("#first");
  const firstName = inputFirstName.value;

  if (firstName.length < 2) {
    formValid = false;
  }

  const inputLastName = document.querySelector("#last");
  const lastName = inputLastName.value;

  if (lastName.length < 2) {
    formValid = false;
  }

  const inputEmail = document.querySelector("#email");
  const email = inputEmail.value;

  // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  // eslint-disable-next-line no-control-regex
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (regex.test(email) == false) {
    formValid = false;
  }

  // (4) Pour le nombre de concours, une valeur numérique est saisie.
  // debugger;
  const inputQuantityNumber = document.querySelector("#quantity");
  const quantityNumber = inputQuantityNumber.value;


  if (inputQuantityNumber.value < 1 || inputQuantityNumber.value > 99) {
    formValid = false;
  }

  // (5) Un bouton radio est sélectionné.

  // const inputRadio = document.querySelector("#checkbox-label");
  // const radioCheck = inputRadio.value;

  // if (inputCheck.value.match(regexNumber)) {
  //   formValid = false;
  // }

  return formValid;
}

/// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//*close modal*//
const modalClose = document.querySelectorAll("span.close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// #1 TODO : close modal

// Close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}






// (4) Pour le nombre de concours, une valeur numérique est saisie.
  // //regex
  // const regexNumber = /^([0-9]{1,2})$/;

  // if (inputQuantityNumber.value.match(regexNumber)== false) {
  //   formValid = false;
  // }