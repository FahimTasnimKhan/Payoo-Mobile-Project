// Login button
document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobilenumber = 8801323157281;
    const pin = 1234;
    const mobile_number_input = document.getElementById("mobile-number");
    const mobile_number = parseInt(mobile_number_input.value);

    const pin_number_input = document.getElementById("pin-number");
    const pin_number = parseInt(pin_number_input.value);
    if (mobile_number === mobilenumber && pin_number === pin) {
      window.location.href = "./main.html";
    } else {
      alert("Please give valid input");
    }
  });
