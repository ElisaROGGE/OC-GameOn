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
  const regFirstName = /^[a-zA-Z]{2,}$/;
  const firstname = document.getElementById('first').value;
  const error = document.getElementById('errorFirstname');

  if (!regFirstName.test(firstname)) {
    error.style.display = 'block';
    error.textContent = 'Veuillez inscrire un prénom correct';
    document.getElementById('first').focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkLastName() {
  const regLastName = /^[a-zA-Z]{2,}(?:['\s-][a-zA-Z]+)*$/;
  const lastName = document.getElementById('last').value;
  const error = document.getElementById('errorLast');

  if (!regLastName.test(lastName)) {
    error.style.display = 'block';
    error.textContent = 'Veuillez inscrire un nom de famille correct';
    document.getElementById('last').focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkEmail() {
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById('email').value;
  const error = document.getElementById('errorEmail');

  if (!regEmail.test(email)) {
    error.style.display = 'block'
    error.textContent = 'Veuillez inscrire une adresse e-mail valide';
    document.getElementById('email').focus();
    return false;
  } else {
    error.style.display = 'none'
    return true;
  }
}

function checkDate() {
  const date = document.getElementById('birthdate').value;
  const error = document.getElementById('errorDate');

  const inputDate = new Date(date);

  const inputYear = inputDate.getFullYear();

  if (inputYear > 2010) {
    error.style.display = 'block'
    error.textContent = 'Vous devez avoir plus de 13 ans';
    document.getElementById('date').focus();
    return false;
  } else {
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

  if(checkFirstname() && checkLastName() && checkEmail() && checkDate()){
        //Afficher les champs dans la console.log
        console.log("Tout est ok")
        return true;
    }else{
      console.log("Erreur")
        return false;
    }

}


