const display = document.getElementById('display')
let digits = document.querySelectorAll('.digit')
let symbols = document.querySelectorAll('.operation')
const equal = document.getElementById('equal')
const ac = document.getElementById('ac')
const negative = document.getElementById('negative')
const percentage = document.getElementById('percentage')
const comma = document.getElementById('comma')

// Getting digits
digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    display.value += digit.value
  })
})

// Getting symbols (+,-,/,*,%)
symbols.forEach((symbol) => {
  symbol.addEventListener('click', () => {
    // Percentage
    if (symbol.value === '%') {
      let amount = display.value
      let amountAsNumber = eval(amount)
      let percentageValue = amountAsNumber / 100
      display.value = percentageValue
    }
    // Rest of operators
    else {
      display.value += symbol.value
    }
  })
})

// Evaluating the operation on display
equal.addEventListener('click', () => {
  let result = eval(display.value)
  display.value = result
})

// Extra buttons
// AC
ac.addEventListener('click', () => {
  display.value = ''
})

// Negative
negative.addEventListener('click', () => {
  display.value = -display.value
})

// Comma
comma.addEventListener('click', () => {
  if (display.value == '') {
    display.value += '0.'
  } else {
    display.value += '.'
  }
})
