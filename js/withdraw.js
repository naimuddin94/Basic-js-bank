document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawAmountString = getInputValue("withdraw-field");
  const withdrawAmount = parseFloat(withdrawAmountString);
  const totalBalance = getElementValue("balance-total");
  if (isNaN(withdrawAmount)) {
    return alert("Please enter a valid amount");
  } else if (withdrawAmount > totalBalance) {
    return alert("You have not enough balance");
  }
  const previewsWithdrawAmount = getElementValue("withdraw-total");
  const withdrawTotalAmount = withdrawAmount + previewsWithdrawAmount;
  setElementValue("withdraw-total", withdrawTotalAmount);

  const newTotalBalance = totalBalance - withdrawAmount;
  setElementValue("balance-total", newTotalBalance);
});
