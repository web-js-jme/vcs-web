let firstNumber = 0;
let second_number = 0;
let action = '+';
let answer = 0;


let input = document.getElementById ('calc-input');
let calculationSpan = document.getElementById('calculation');

let histiry = [];

function onNumberClick (number) {
    input.value += number;
}


function onActionClick (clickedAction) {
    input.value += '' + clickedAction + '';
    action = clickedAction;
}

function onActionClick(clickedAction) {
    input.value += '' + clickedAction + '';
    action = clickedAction;
}

function onCountClick() {
    input.value += '' + clickedAction + '';
    firstNumber = parseInt(splitted[0])
    action = splitted[1];
    second_number = parseInt(splitted[2]);

    calculateAnswer();
    input.value = answer;
}

function calculateAnswer() {
    switch (action) {
        case '+': answer = firstNumber + second_number; break;
        case '-': answer = firstNumber - second_number; break;
        case 'x': answer = firstNumber * second_number; break;
        case '/': answer = firstNumber / second_number; break;
    }

    function onCleanClick() {
        firstNumber = 0;
        second_number = 0;
        action = '+';
        answer = 0;
        input.value = '';
        calculationSpan.innerHTML = '';
    }
}


function addToHistory() {
    let histotyItem = {
        firstNumber,
        action,
        secondaryNumber,
        answer
    };
    histiry.push(histotyItem);
}


document.getElementById('show-history').onclick = function() {
    let formatted = history.map(x => `<p> ${x.firstNumber} ${x.second_number} = ${x.answer} </p>`);
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.innerHTML = formatted.join('');
}