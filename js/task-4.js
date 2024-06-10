const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerGetComment);

function handlerGetComment(evt) {
  evt.preventDefault();

  const formElements = evt.target.elements;
  const emailValue = formElements.email.value.trim();
  const passwordValue = formElements.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);
    evt.target.reset();
  }
}
