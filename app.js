const userInput = document.querySelector('.screen');
let expression = '';

function onPress(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;

};