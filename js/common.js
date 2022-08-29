//....................
// function for Get element by id 

function getTextFieldValueById(elementId) {
    const playerNameField = document.getElementById(elementId);
    const playerName = playerNameField.innerText;
    return playerName;
}

// function for set element by id 

function setTextElementValueById(idName, value) {
    const selectPlayerField = document.getElementById(idName)
    const newli = document.createElement('li')
    newli.innerHTML = `
     <span>${value}</span>
    
    `
    selectPlayerField.appendChild(newli);
}

function playerBestListLengthByIdName() {
    const selectPlayerNumbers = document.getElementById('selectedPLayerList').getElementsByTagName("li").length;
    return selectPlayerNumbers;
}
// function for budget section

function getInputValueById(idName) {
    const inputField = document.getElementById(idName);
    const inputValuestr = inputField.value;
    const inputValue = parseFloat(inputValuestr);
    return inputValue;
}

function anotherSetValueById(idName, value) {
    const field = document.getElementById(idName);
    field.innerText = value;
}

function getTextValueById(idName) {
    const textField = document.getElementById(idName);
    const textValue = textField.innerText;
    return textValue;
}


