const screen = document.querySelector('.screen')
const allButtons = document.querySelectorAll('.btn')

allButtons.forEach(button => {
    button.addEventListener('click', (e) =>{
        const value = e.target.dataset.value

        if (value === '=') {
            if (screen.innerText.includes('/')) {
                const splitOperation = screen.innerText.split('/')
                operate('/', splitOperation[0], splitOperation[1])
            }
            if (screen.innerText.includes('-')) {
                const splitOperation = screen.innerText.split('-')
                operate('-', splitOperation[0], splitOperation[1])
            }
            if (screen.innerText.includes('+')) {
                const splitOperation = screen.innerText.split('+')
                operate('+', splitOperation[0], splitOperation[1])
            }
            if (screen.innerText.includes('*')) {
                const splitOperation = screen.innerText.split('*')
                operate('*', splitOperation[0], splitOperation[1])
            }
        }
        
        sum = value.replace('=', '')
        screen.innerText += sum;

        if (value === 'clear') {
            screen.innerText = ''
        }
        if (value === '') {
            screen.innerText = screen.innerText.slice(0, - 1);
        }
    })
})

const operate = (operator, value1, value2) => {
    const number1 = Number(value1)
    const number2 = Number(value2)
    if (operator === '/') {
        screen.innerText = number1 / number2
    }
    if (operator === '-') {
        screen.innerText = number1 - number2
   }
   if (operator === '+') {
        screen.innerText = number1 + number2
   }
   if (operator === '*') {
        screen.innerText = number1 * number2
        
   }
}