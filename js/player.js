
// for select 1 Player 

document.getElementById('player1-btn').addEventListener('click', function () {

    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player1');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player1-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }

})


// for select 2 Player 

document.getElementById('player2-btn').addEventListener('click', function () {

    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player2');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player2-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }

})
// for select 3 Player 

document.getElementById('player3-btn').addEventListener('click', function () {
    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player3');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player3-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }

})
// for select 4 Player 

document.getElementById('player4-btn').addEventListener('click', function () {
    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player4');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player4-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }

})
// for select 5 Player 

document.getElementById('player5-btn').addEventListener('click', function () {
    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player5');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player5-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }
})
// for select 4 Player 

document.getElementById('player6-btn').addEventListener('click', function () {
    const palyersNumbers = playerBestListLengthByIdName()

    if (palyersNumbers
        < 5) {

        const playerName = getTextFieldValueById('player6');
        setTextElementValueById('selectedPLayerList', playerName);

        document.getElementById("player6-btn").disabled = true;
    }
    else {
        alert('Maximum Players Already Selected')
    }

})

