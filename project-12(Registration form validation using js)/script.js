function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");

  if (
    name.trim() == "" ||
    email.trim() == "" ||
    password.trim() == "" ||
    confirmPassword.trim() == ""
  ) {
    errorMessage.innerHTML = "All fields are required";
    errorMessage.style.display = "block";
    return false;
  }
  if (password != confirmPassword) {
    errorMessage.innerHTML = "Passwords do not match";
    errorMessage.style.display = "block";
    return false;
  } else {
    if (!validLength(password)) {
      errorMessage.innerHTML = "Password must be between 8 and 12 characters";
      errorMessage.style.display = "block";

      return false;
    }
    if (
      !(
        containAlpha(password) &&
        containsDigit(password) &&
        containsSpecial(password)
      )
    ) {
      errorMessage.innerHTML =
        "Password must contain at least one letter, one digit, and one special character";
      errorMessage.style.display = "block";

      return false;
    }
  }

  console.log(event);
  return true;
}

function containAlpha(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if (
      (pwd.charAt(i) > "a" && pwd.charAt(i) <= "z") ||
      (pwd.charAt(i) > "A" && pwd.charAt(i) <= "Z")
    ) {
      return true;
    }
  }
  return false;
}

function containsDigit(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if (pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9") {
      return true;
    }
  }
  return false;
}

function containsSpecial(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if (
      !(
        (pwd.charAt(i) > "a" && pwd.charAt(i) <= "z") ||
        (pwd.charAt(i) > "A" && pwd.charAt(i) <= "Z") ||
        (pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9")
      )
    ) {
      return true;
    }
  }
  return false;
}

function validLength(pwd) {
  if (pwd.length >= 8 && pwd.length <= 12) {
    return true;
  } else {
    return false;
  }
}
