class Calculator {
    constructor(currentOperationText, previousOperationText){
        this.currentOperationText = currentOperationText;
        this.previousOperationText = previousOperationText;
        this.allClear();
    }
    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0, -1)
    }
    addCommasToNumber(number) {
        let stringNumber = number.toString();
        let integers = parseFloat(stringNumber.split('.')[0]);
        let decimals = stringNumber.split('.')[1];
        let displayInteger;
        if(isNaN(integers)){
            displayInteger = "";
        } else displayInteger = integers.toLocaleString('en', {
            maximumFractionDigits:0 })
        if(decimals != null){
            return `${displayInteger}.${decimals}`
        }else {
            return `${displayInteger}`
        }
    }
    updateDisplay() {
        this.currentOperationText.innerText = this.addCommasToNumber(this.currentOperation);
        if(this.operand != undefined){
            this.previousOperationText.innerText = `${this.addCommasToNumber(this.previousOperation)} ${this.operand}`;
        }else this.previousOperationText.innerText = this.addCommasToNumber(this.previousOperation);
 
    }
    allClear(){
        this.currentOperation = "";
        this.previousOperation = "";
        this.operand = undefined;
    }
    equals() {
        if(this.previousOperation === "" || this.currentOperation === "") return
        const previous = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);
        let total;
        switch (this.operand) {
            case '+':
              total =  previous + current;
                break;
            case '-':
              total =  previous - current;
                break;  
            case '*':
                total = previous * current;
                break;
            case '/':
                total = previous / current;
                break;    
            default:
                break;
        }
        this.currentOperation = total;
        this.previousOperation = '';
        this.operand = undefined;
    }
    operandPressed(operand){
        if(this.currentOperation === '') return
        if(this.previousOperation != ''){
            this.equals();
        }
        this.operand = operand;
        this.previousOperation = this.currentOperation;
        this.currentOperation = "";
    }
    numberPressed(number){
        if(this.currentOperationText.innerText.includes('.') && number === '.') return
        this.currentOperation = this.currentOperation.toString() + number.toString();
    }
}

const numbers = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operand]');
const deleteButton = document.querySelector('[data-delete-button]');
const equalButton = document.querySelector('[data-equal-button]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperationText = document.querySelector('[data-input]');
const previousOperationText = document.querySelector('[data-output]');

const calculator = new Calculator(currentOperationText, previousOperationText);
numbers.forEach(number =>{
    number.addEventListener('click', ()=>{
        calculator.numberPressed(number.innerText);
        calculator.updateDisplay();
    });
})
allClearButton.addEventListener('click', ()=>{
    calculator.allClear()
    calculator.updateDisplay();
});
deleteButton.addEventListener('click', ()=>{
    calculator.delete();
    calculator.updateDisplay();
});
operands.forEach(operand => {
    operand.addEventListener('click',()=> {
        calculator.operandPressed(operand.innerText);
        calculator.updateDisplay();
    })
});
equalButton.addEventListener('click', ()=> {
    calculator.equals();
    calculator.updateDisplay();
})
