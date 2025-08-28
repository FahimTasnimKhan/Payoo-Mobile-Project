const validPin = 1234;
document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const add_money_input = document.getElementById("add-money-input");
    const add_money = parseInt(add_money_input.value);
    const balance = parseInt(
      document.getElementById("current-Balance").innerText
    );
    const banknumber = document.getElementById("bank-number").value;
    const pin_number = parseInt(document.getElementById("pin-number").value);
    console.log(banknumber);
    if (banknumber.length < 11) {
      alert("Please give valid bank number");
      return;
    }
    if (pin_number != validPin) {
      alert("Invalid  Pin number");
      return;
    }

    const new_balance = balance + add_money;
    document.getElementById("current-Balance").innerText = new_balance;
  });

// Toogling
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document
  .getElementById("Withdraw-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });

// Withdraw Feature
document
  .getElementById("Withdraw-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const Withdraw_money_input = document.getElementById(
      "Withdraw-money-input"
    );
    const Withdraw_money = parseInt(Withdraw_money_input.value);
    const balance = parseInt(
      document.getElementById("current-Balance").innerText
    );
    const agent_number = document.getElementById("agent_number").value;
    const pin_number = parseInt(document.getElementById("pin-number").value);

    // Validate agent number
    if (agent_number.length < 11) {
      alert("Please give valid agent number");
      return;
    }

    // Validate PIN
    // if (pin_number !== validPin) {
    //   alert("Invalid Pin number");
    //   return;
    // }

    // Validate amount
    if (isNaN(Withdraw_money) || Withdraw_money <= 0) {
      alert("Please enter a valid withdraw amount");
      return;
    }

    // Check balance
    if (Withdraw_money > balance) {
      alert("Insufficient balance");
      return;
    }

    // Update balance
    const new_balance = balance - Withdraw_money;
    document.getElementById("current-Balance").innerText = new_balance;

    // Clear input
    Withdraw_money_input.value = "";
  });
