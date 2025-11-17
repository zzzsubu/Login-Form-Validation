  const form = document.querySelector("form");
  const email = document.querySelector("input[type='email']");
  const password = document.querySelector("input[type='password']");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    if (email.value.trim() === "") {
      alert("Email cannot be empty");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      alert("Please enter a valid email address");
      isValid = false;
    }

    if (password.value.trim() === "") {
      alert("Password cannot be empty");
      isValid = false;
    } else if (password.value.length < 7) {
      alert("Password must be at least 7 characters");
      isValid = false;
    }

    if (isValid) {
      alert("Login Successful!");
      form.submit();
    }
  });
