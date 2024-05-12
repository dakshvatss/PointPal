document.addEventListener("DOMContentLoaded", function() {
  const signInBtn = document.querySelector("#sign-in-btn");
  const signUpBtn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Function to handle login button click
  const loginForm = document.querySelector('.sign-in-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Redirect to business cards page
    window.location.href = 'business_cards.html';
  });

  // Function to handle switching between sign-in and sign-up forms
  signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Select the login button under "Register as Business"
  const businessLoginBtn = document.getElementById("business-login-btn");

  // Add event listener to the login button
  businessLoginBtn.addEventListener("click", function() {
    // Redirect to transactions.html
    window.location.href = "transactions.html";
  });
});
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Function to handle login button click
const loginForm = document.querySelector('.sign-in-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Redirect to business cards page
  window.location.href = 'business_cards.html';
});
// Create a new card section
var cardSection = CardService.newCardSection()
  .setHeader("Section Header")
  .addWidget(CardService.newTextParagraph().setText("Some text content"))
  .addWidget(CardService.newKeyValue().setContent("Key", "Value"));

// Build the card
var card = CardService.newCardBuilder()
  .setName("Card Name")
  .setHeader(CardService.newCardHeader().setTitle("Card Title"))
  .addSection(cardSection)
  .build();

// app.js


// Function to handle switching between sign-in and sign-up forms
signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Redirect to consumer.html
  window.location.href = 'consumer.html';
});
document.getElementById("sign-up-btn").addEventListener("click", function() {
  // Redirect the user to the transactions page
  window.location.href = "transactions.html"; // Replace "transactions.html" with the actual URL of your transactions page
});
