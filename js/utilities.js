function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const value = inputField.value;
  inputField.value = "";
  return value;
}

function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const valueString = element.innerText;
  const value = parseFloat(valueString);
  return value;
}

function setElementValue(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
