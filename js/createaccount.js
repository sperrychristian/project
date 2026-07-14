// using a class that will capture the information when someone signs up to create an account

class SignUpData {
  constructor() {
    this.full_name = document.querySelector("#name").value;
    this.email = document.querySelector("#email").value;
    this.password = document.querySelector("#password").value;
    this.account_type = document.querySelector("#account-type").value;
  }
}

// function that handles the construction of the class
function createAccount(event) {
  event.preventDefault(); // stop the page from reloading

  // check to see if fields aren't empty before creating an instance of SignUpData
  if (
    document.querySelector("#name").value.length >= 1 &&
    document.querySelector("#email").value.length >= 1 &&
    document.querySelector("#password").value.length >= 10
  ) {
    let user_credential = new SignUpData();

    // console.log check to confirm this is working as required
    console.log("full name: ", user_credential.full_name);
    console.log("email: ", user_credential.email);
    console.log("password: ", user_credential.password);

    // change the html in the wrapper of the page that will give a welcome message after someone creates an account
    document.querySelector(".auth-wrapper").innerHTML = `
    <h1>Welcome, ${user_credential.full_name}!</h1>
      <p>Your account has been created. Start browsing flies and lures.</p>
      <a href="browse.html" class="btn-primary">Browse now</a>
    `;
  } else {
    alert(
      "Please fill out all fields and type in a password of at least 10 characters",
    );
  }
}

// event listener for sign up form
document
  .querySelector("#signup-form")
  .addEventListener("submit", createAccount);
