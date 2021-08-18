// gets 4 digit pin for generate pin 
function getPin() {
    const pin = Math.ceil(Math.random() * 10000);
    // check whether it's of length 4 or not
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
// generates pin on clicking generate pin button
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    // checks whether it's a number or not
    if (!isNaN(number)) {
        document.getElementById('typed-numbers').value += number;
    }
    else {
        if (number == 'C') {
            document.getElementById('typed-numbers').value = '';
        }
    }
});

function verifyPin() {
    let actionCount = parseInt(document.getElementById('action-count').innerText);
    actionCount--;
    document.getElementById('action-count').innerText = actionCount;
    const pin = document.getElementById('display-pin').value;
    const userInput = document.getElementById('typed-numbers').value;
    if (pin != '' && pin == userInput) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
    }
    else {
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
}