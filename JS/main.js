document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const add_money_input = document.getElementById("add-money-input");
    const add_money = parseInt(add_money_input.value);
    const balance = parseInt(
      document.getElementById("current-Balance").innerText
    );
    const new_balance = balance + add_money;
    document.getElementById("current-Balance").innerText = new_balance;
  });
