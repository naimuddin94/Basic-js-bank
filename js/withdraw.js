document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawAmountString = getInputValue("withdraw-field");
  const withdrawAmount = parseFloat(withdrawAmountString);
  const previewsWithdrawAmount = getElementValue("withdraw-total");
  const withdrawTotalAmount = withdrawAmount + previewsWithdrawAmount;
  setElementValue("withdraw-total", withdrawTotalAmount);

  const totalBalance = getElementValue("balance-total");
  const newTotalBalance = totalBalance - withdrawAmount;
  setElementValue("balance-total", newTotalBalance);
});
