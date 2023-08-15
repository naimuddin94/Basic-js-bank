document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositAmountString = getInputValue("deposit-field");
  const depositAmount = parseFloat(depositAmountString);
  if (isNaN(depositAmount)) {
    return alert("Please enter valid deposit amount");
  }
  const previewsDepositAmount = getElementValue("deposit-total");
  const depositTotalAmount = depositAmount + previewsDepositAmount;
  setElementValue("deposit-total", depositTotalAmount);

  const totalBalance = getElementValue("balance-total");
  const newTotalBalance = totalBalance + depositAmount;
  setElementValue("balance-total", newTotalBalance);
});
