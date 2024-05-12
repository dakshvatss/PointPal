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
function processRupeesTransaction() {
  // Get the amount entered in Rupees
  var rupeesAmount = parseFloat(document.getElementById("rupeesInput").value);
  if (isNaN(rupeesAmount) || rupeesAmount <= 0) {
      alert("Please enter a valid Rupees amount.");
  } else {
      // Get the current date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;

      // Get the store ID where the payment was made
      var storeId = document.querySelector('.transaction-section.active').id.replace('Section', '');

      // Get the transaction table body of the corresponding store
      var tableBody = document.querySelector('#' + storeId + ' table tbody');

      // Increment transaction ID by 1
      var lastTransactionId = parseInt(tableBody.lastElementChild.firstElementChild.textContent);
      var newTransactionId = lastTransactionId + 1;

      // Create a new row
      var newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${newTransactionId}</td>
          <td>$${rupeesAmount}</td>
          <td>${today}</td>
          <td>0</td>
      `;

      // Append the new row to the table body
      tableBody.appendChild(newRow);

      // Recalculate total loyalty points for the store
      calculateTotalLoyaltyPoints(storeId);

      // Alert for successful transaction (you can remove this if not needed)
      alert("Transaction successful!\nTransaction ID: " + newTransactionId + "\nAmount: $" + rupeesAmount + "\nDate: " + today);
  }
}

