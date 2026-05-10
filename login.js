// SELECT FORM

const loginForm =
document.querySelector(".login-form");


// FORM SUBMIT

loginForm.addEventListener(
  "submit",
  function(event){

    // STOP PAGE REFRESH

    event.preventDefault();

    // GET INPUT VALUES

    const name =
    document.querySelector("#name").value;

    const email =
    document.querySelector("#email").value;

    // CREATE USER OBJECT

    const user = {

      name: name,
      email: email

    };

    // SAVE USER

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    // REDIRECT

    window.location.href =
    "index.html";

  }
);