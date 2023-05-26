// Toggle left navigation bar
// const burgerMenu = document.querySelector('.burger-menu');
// const navLinks = document.querySelector('.nav-links');

// burgerMenu.addEventListener('click', () => {
//   navLinks.classList.toggle('open');
// });

// Burger menu functionality
const burgerButton = document.getElementById('burger-button');
const sideNav = document.getElementById('side-nav');

burgerButton.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});


// Form validation
const ticketForm = document.getElementById('ticket-form');

ticketForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Perform form validation here
  // Form validation
const ticketForm = document.getElementById('ticket-form');
const flightNumberInput = document.getElementById('flight-number');
const flightCostInput = document.getElementById('flight-cost');
const departureDateInput = document.getElementById('departure-date');
const returnDateInput = document.getElementById('return-date');

ticketForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  //form validation
  const flightNumber = flightNumberInput.value.trim();
  const flightCost = flightCostInput.value.trim();
  const departureDate = departureDateInput.value.trim();
  const returnDate = returnDateInput.value.trim();

  // Check if flight number is empty
  if (flightNumber === '') {
    showError(flightNumberInput, 'Flight number is required');
  } else {
    showSuccess(flightNumberInput);
  }

  // Check if flight cost is a valid number
  if (isNaN(flightCost) || flightCost <= 0) {
    showError(flightCostInput, 'Flight cost must be a valid number');
  } else {
    showSuccess(flightCostInput);
  }

  // Check if departure date is empty
  if (departureDate === '') {
    showError(departureDateInput, 'Departure date is required');
  } else {
    showSuccess(departureDateInput);
  }

  // Check if return date is empty (only for round trip)
  const tripType = document.querySelector('input[name="trip-type"]:checked').value;
  if (tripType === 'round-trip' && returnDate === '') {
    showError(returnDateInput, 'Return date is required for round trip');
  } else {
    showSuccess(returnDateInput);
  }
});

// Function to show error message
function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = message;
  formControl.classList.add('error');
}

// Function to show success state
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = '';
}

});
