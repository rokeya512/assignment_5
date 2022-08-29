document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerCost = getInputValueById('per-player-budgt');
    const playerNumber = playerBestListLengthByIdName();
    const playerExpenses = perPlayerCost * playerNumber;

    anotherSetValueById('TotalPlayer-expense', playerExpenses);


});


document.getElementById('calculate-btn-total').addEventListener('click', function () {

    const managerCost = getInputValueById('managerPrice');
    const coachCost = getInputValueById('coachPrice');

    const totalPlayerCost = getTextValueById('TotalPlayer-expense');
    const totalCost = parseFloat(totalPlayerCost) + coachCost + managerCost;
    anotherSetValueById('total', totalCost);


});