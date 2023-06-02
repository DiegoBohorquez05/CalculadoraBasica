const display = document.querySelector('.display')


var numero1 = 0
var numero2
var operador
display.value=0

const buttonOne = document.querySelector('.buttonOne').addEventListener('click',()=>{
    display.innerHTML+='1'
    display.value+='1'
})
const buttonTwo = document.querySelector('.buttonTwo').addEventListener('click',()=>{
    display.innerHTML+='2'
    display.value+='2'
})
const buttonThree = document.querySelector('.buttonThree').addEventListener('click',()=>{
    display.innerHTML+='3'
    display.value+='3'
})
const buttonFour = document.querySelector('.buttonFour').addEventListener('click',()=>{
    display.innerHTML+='4'
    display.value+='4'
})
const buttonFive = document.querySelector('.buttonFive').addEventListener('click',()=>{
    display.innerHTML+='5'
    display.value+='5'
})
const buttonSix = document.querySelector('.buttonSix').addEventListener('click',()=>{
    display.innerHTML+='6'
    display.value+='6'
})
const buttonSeven = document.querySelector('.buttonSeven').addEventListener('click',()=>{
    display.innerHTML+='7'
    display.value+='7'
})
const buttonEight = document.querySelector('.buttonEight').addEventListener('click',()=>{
    display.innerHTML+='8'
    display.value+='8'
})
const buttonNine = document.querySelector('.buttonNine').addEventListener('click',()=>{
    display.innerHTML+='9'
    display.value+='9'
})
const buttonCero = document.querySelector('.buttonCero').addEventListener('click',()=>{
    display.innerHTML+='0'
    display.value+='0'
})

const buttonPoint = document.querySelector('.buttonFor').addEventListener('click',()=>{
    display.innerHTML+='x'
    numero1=display.value
    console.log(numero1);
    display.value=0
    operador=1
})
const buttonPlas = document.querySelector('.buttonPlas').addEventListener('click',()=>{
    display.innerHTML+='+'
    numero1=display.value
    display.value=0
    operador=2

})
const buttonLess = document.querySelector('.buttonLess').addEventListener('click',()=>{
    display.innerHTML+='-'
    numero1=display.value
    display.value=0
    operador=3

})
const buttonDivi = document.querySelector('.buttonDivided').addEventListener('click',()=>{
    display.innerHTML+='/'
    numero1=display.value
    display.value=0
    operador=4
})

const buttonEqual = document.querySelector('.buttonEqual').addEventListener('click',()=>{
    if(operador === 1){
        resultado = numero1 * display.value
        display.innerHTML+=(' = ' + resultado)
    }
    if(operador === 2){
        resultado = parseInt(numero1) + parseInt(display.value)
        display.innerHTML+=(' = ' + resultado)
    }
    if(operador === 3){
        resultado = numero1 - display.value
        display.innerHTML+=(' = ' + resultado)
    }
    if(operador === 4){
        resultado = numero1 / display.value
        display.innerHTML+=(' = ' + resultado)
    }
})
const buttonClear = document.querySelector('.buttonReset').addEventListener('click',()=>{
    display.innerHTML=''
    display.value=0
    console.log(display.value);
})