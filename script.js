document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
  
    let currentInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value) {
          currentInput += value;
          updateDisplay();
        }
      });
    });
  
    clearButton.addEventListener('click', () => {
      currentInput = '';
      updateDisplay();
    });
  
    equalButton.addEventListener('click', () => {
      try {
        // Avalia a expressão matemática com segurança
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
      } catch (error) {
        currentInput = '';
        display.value = 'Erro';
      }
    });
  
    function updateDisplay() {
      display.value = currentInput;
    }
  });
  