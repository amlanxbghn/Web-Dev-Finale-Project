document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.querySelector(".balance h2");
    const earningsButton = document.getElementById("earnBtn");
    const expenseButton = document.getElementById("expBtn");
    const transactionList = document.querySelector(".transactions");
  
    let balance = 0;
  
    function updateBalance(amount) {
      balance += amount;
      balanceElement.textContent = `₹${balance}`;
    }
  
    function addTransaction(text, amount, type) {
      const transaction = document.createElement("div");
      transaction.classList.add("transaction");
      const transactionContent = `
        <div class="left">
          <p>${text}</p>
          <p>${type === "earn" ? "+" : "-"} ₹${Math.abs(amount)}</p>
        </div>
      `;
      transaction.innerHTML = transactionContent;
      transactionList.appendChild(transaction);
    }
  
    earningsButton.addEventListener("click", function (event) {
      event.preventDefault();
      const text = document.getElementById("text").value.trim();
      const amount = parseFloat(document.getElementById("amount").value.trim());
      if (text !== "" && !isNaN(amount) && amount > 0) {
        updateBalance(amount);
        addTransaction(text, amount, "earn");
      }
      document.getElementById("text").value = "";
      document.getElementById("amount").value = "";
    });
  
    expenseButton.addEventListener("click", function (event) {
      event.preventDefault();
      const text = document.getElementById("text").value.trim();
      const amount = parseFloat(document.getElementById("amount").value.trim());
      if (text !== "" && !isNaN(amount) && amount > 0) {
        updateBalance(-amount);
        addTransaction(text, amount, "expense");
      }
      document.getElementById("text").value = "";
      document.getElementById("amount").value = "";
    });
  });
  