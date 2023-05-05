function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
close.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


function checkFirstname() {
  const regFirstName = /^[a-zA-Z]{2,}(?:['\s-][a-zA-Z]+)*$/;
  const firstname = document.getElementById('first');
  const error = document.getElementById('errorFirstname');

  if (!regFirstName.test(firstname.value)) {
    error.style.display = 'block';
    error.textContent = 'Veuillez inscrire un prénom correct';
    firstname.focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkLastName() {
  const regLastName = /^[a-zA-Z]{2,}(?:['\s-][a-zA-Z]+)*$/;
  const lastName = document.getElementById('last');
  const error = document.getElementById('errorLast');

  if (!regLastName.test(lastName.value)) {
    error.style.display = 'block';
    error.textContent = 'Veuillez inscrire un nom de famille correct';
    lastName.focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkEmail() {
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const email = document.getElementById('email');
  const error = document.getElementById('errorEmail');

  if (!regEmail.test(email.value)) {
    error.style.display = 'block'
    error.textContent = 'Veuillez inscrire une adresse e-mail valide';
    email.focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkDate() {
  const date = document.getElementById('birthdate');
  const error = document.getElementById('errorDate');

  const inputDate = new Date(date.value);
  const yearMax = new Date().getFullYear() - 13 ;
  console.log(yearMax)

  const inputYear = inputDate.getFullYear();

  if (inputYear > yearMax) {
    error.style.display = 'block'
    error.textContent = 'Vous devez avoir plus de 13 ans';
    date.focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkNumber() {
  const regNumbers = /^\d+$/;

  const input = document.getElementById('quantity');
  const error = document.getElementById('errorNumber');
  
  if (!regNumbers.test(input.value)) {
    error.style.display = 'block'
    error.textContent = 'Veuillez inscrire uniquement des chiffres';
    input.focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkRadio() {
  const radioButtons = document.getElementsByName('location');
  const error = document.getElementById('errorRadio');
  
  let selected = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selected = true;
      break;
    }
  }
  
  if (!selected) {
    error.style.display = 'block'
    error.textContent = 'Veuillez sélectionner un lieu';
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkCheckbox(){
  const checkbox1 = document.getElementById('checkbox1')
  const error = document.getElementById('errorCheckbox')

  if(!checkbox1.checked){
    error.style.display = 'block'
    error.textContent = 'Vous devez accepter les conditions générales d\'utilisation'
    return false
  }else{
    error.style.display = 'none'
    return true;
  }
}

// formModal
const formModal = document.getElementById('formModal')
formModal.addEventListener('submit', (e) => validate(e))
// formModal.addEventListener('submit', (e) => {
//   //Ton code
// })

function validate(e){
  e.preventDefault()

  if(checkFirstname() && checkLastName() && checkEmail() && checkDate() && checkNumber() && checkRadio() && checkCheckbox()){
    // Toutes tes valeurs
    const firstname = document.getElementById('first').value;
    const lastname = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const quantity = document.getElementById('quantity').value;

    const contact = {
      firstname,
      lastname,
      email,
      birthdate,
      quantity
    }

    // Les afficher dans un console.log(contact)
    console.log(contact)
      console.log("Tout est ok")
      return true;
    }else{
      console.log("Erreur")
      return false;
    }

}


