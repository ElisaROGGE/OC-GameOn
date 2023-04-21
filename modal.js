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

function validate(){
  const regFirstName = /^[a-zA-Z]+$/;
  const firstname = document.getElementById('first').value;
  if(!regFirstName.test(firstname)){
      alert('Please enter a valid name');
      document.getElementById('first').focus();
      return false;
  }else{
      return true;
  }
}


