// --- Element Selectors ---
const output = document.querySelector(".output");
const buttons = document.querySelectorAll(".container span"); // Get all buttons

// --- Main Logic ---

function Clicked(element) {
    const lastChar = output.innerText.slice(-1);
    const operators = ['+', '-', '×', '÷', '%'];

    // --- Clear Button (AC) ---
    if (element.classList.contains('AC')) {
        output.innerText = '0';
        return;
    }

    // --- Backspace Button ---
    if (element.classList.contains('back')) {
        if (output.innerText.length > 1) {
            output.innerText = output.innerText.slice(0, -1);
        } else {
            output.innerText = '0';
        }
        return;
    }

    // --- Equals Button (=) ---
    if (element.classList.contains('equal')) {
        try {
            // Replace visual operators with evaluatable operators
            let expression = output.innerText.replace(/×/g, '*').replace(/÷/g, '/');

            // Handle percentage calculation
            if (expression.includes('%')) {
                 expression = expression.replace(/%/g, '/100');
            }

            // Prevent division by zero
            if (expression.includes('/0')) {
                 output.innerText = 'Error';
                 return;
            }

            // Use eval to calculate the result
            const result = eval(expression);
            
            // Round the result to avoid long decimal numbers
            output.innerText = parseFloat(result.toFixed(10));

        } catch (error) {
            output.innerText = 'Error';
        }
        return;
    }

    // --- Operator Buttons (+, -, ×, ÷, %) ---
    const operatorMap = {
        'add': '+',
        'sub': '-',
        'mul': '×',
        'division': '÷',
        'percentage': '%'
    };

    let operatorValue = null;
    for (const className in operatorMap) {
        if (element.classList.contains(className)) {
            operatorValue = operatorMap[className];
            break;
        }
    }

    if (operatorValue) {
        // If the last character is already an operator, replace it
        if (operators.includes(lastChar)) {
            output.innerText = output.innerText.slice(0, -1) + operatorValue;
        } else {
            output.innerText += operatorValue;
        }
        return;
    }

    // --- Number and Decimal Buttons ---
    const numberValue = element.innerText;

    // Prevent multiple decimal points in one number segment
    if (numberValue === '.') {
        const segments = output.innerText.split(/[+\-×÷%]/);
        if (segments.pop().includes('.')) {
            return; // Do nothing if the last number already has a dot
        }
    }

    if (output.innerText === '0' && numberValue !== '.') {
        output.innerText = numberValue;
    } else {
        // Prevent overflowing the display
        if (output.innerText.length < 15) {
            output.innerText += numberValue;
        }
    }
}

// --- Event Listeners ---

// Add click listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => Clicked(button));
});

// Add keyboard listener
document.addEventListener('keydown', (event) => {
    const keyMap = {
        '0': document.querySelector('.zero'),
        '1': document.querySelector('.one'),
        '2': document.querySelector('.two'),
        '3': document.querySelector('.three'),
        '4': document.querySelector('.four'),
        '5': document.querySelector('.five'),
        '6': document.querySelector('.six'),
        '7': document.querySelector('.seven'),
        '8': document.querySelector('.eight'),
        '9': document.querySelector('.nine'),
        '00': document.querySelector('.zero2'),
        '.': document.querySelector('.dot'),
        '+': document.querySelector('.add'),
        '-': document.querySelector('.sub'),
        '*': document.querySelector('.mul'),
        '/': document.querySelector('.division'),
        '%': document.querySelector('.percentage'),
        'Enter': document.querySelector('.equal'),
        '=': document.querySelector('.equal'),
        'Backspace': document.querySelector('.back'),
        'c': document.querySelector('.AC'),
        'C': document.querySelector('.AC')
    };

    const button = keyMap[event.key];

    if (button) {
        event.preventDefault(); // Prevent default browser action (e.g., typing in another input)
        Clicked(button);
        // Add a visual feedback class
        button.classList.add('active-key');
        setTimeout(() => {
            button.classList.remove('active-key');
        }, 150);
    }
});