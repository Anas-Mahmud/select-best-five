function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementvalueString = textElement.innerText;
    const textElementValue = parseInt(textElementvalueString);
    return textElementValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    const selectedPlayer = selectedPlayerList.length;

    const perPlayerCost = getInputFieldValueById('player-cost')

    const totalExpences = selectedPlayer * perPlayerCost;

    document.getElementById('total-expenses').innerText = totalExpences;
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const playersCost = getTextElementValueById("total-expenses");
    const managerCost = getInputFieldValueById("manager-cost");
    const coachCost = getInputFieldValueById("coach-cost");

    const allTotalCost = playersCost + managerCost + coachCost;

    document.getElementById('allTotalCost').innerText = allTotalCost;
})