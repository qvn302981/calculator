
const inputBox = document.querySelector('.inputBox');
let currentInput = ''; 

const buttons = document.querySelectorAll('.button__calc');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                currentInput = eval(currentInput);
                inputBox.value = currentInput;
            } catch (error) {
                inputBox.value = 'Error';
                currentInput = '';
            }
        } else if (value === 'del') {
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput;
        } else if (value === 'Reset') {
            currentInput = '';
            inputBox.value = '';
        } else {
            currentInput += value;
            inputBox.value = currentInput;
        }
    });
});




