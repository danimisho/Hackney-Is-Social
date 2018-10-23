$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

});

// Get modal element
var modal = document.getElementById('simpleModal-one');
// Get open modal button
var modalBtn = document.getElementById('modalBtn-one');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn-one')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
};

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
};

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  };
};
