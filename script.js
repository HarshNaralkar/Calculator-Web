let history = [];
let isDarkTheme = true;

function clearDisplay() {
    document.getElementById('result').value = '';
    history = [];
    updateHistory();
}

function deleteLast() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let display = document.getElementById('result').value;
    try {
        let result = eval(display);
        document.getElementById('result').value = result;
        history.push(display + " = " + result);
        if (history.length > 2) {
            history.shift();
        }
        updateHistory();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function updateHistory() {
    document.getElementById('history').innerHTML = history.join('<br>');
}

function toggleTheme() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('result');
    const historyDisplay = document.getElementById('history');
    
    if (isDarkTheme) {
        body.classList.add('light');
        calculator.classList.add('light');
        display.classList.add('light');
        historyDisplay.classList.add('light');
        buttons.forEach(button => button.classList.add('light'));
    } else {
        body.classList.remove('light');
        calculator.classList.remove('light');
        display.classList.remove('light');
        historyDisplay.classList.remove('light');
        buttons.forEach(button => button.classList.remove('light'));
    }

    isDarkTheme = !isDarkTheme;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if ('0123456789+-*/.'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    }
});

document.addEventListener('mousemove', function(event) {
    const background = document.querySelector('.animated-background');
    const x = event.clientX / window.innerWidth * 100;
    const y = event.clientY / window.innerHeight * 100;
    
    background.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 0, 0, 0.3), transparent)`;
});
