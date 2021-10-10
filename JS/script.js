let firstScreen = document.querySelector('.first-screen')
let secondScreen = document.querySelector('.second-screen')

const americano = document.getElementById('americano')
const latte = document.getElementById('latte')
const cappuccino = document.getElementById('cappuccino')
const hotChocolate = document.getElementById('hot-chocolate')

let money = document.getElementById('money-input')
let moneyButton = document.querySelector('.input-btn')

const audio = new Audio()
audio.preload = 'auto'
audio.src = './audio/jg-032316-sfx-coffee-pouring.mp3'

function moneyInput() {
  if (money.value >= 1 && money.value <= 10) {
    firstScreen.textContent = `Your ${money.value}$ contributed`
    secondScreen.textContent = `Choose a drink`
    return money.value
  } else {
    firstScreen.textContent = `Enter a corect value`
    secondScreen.textContent = `${money.value} is unacceptable`
    money.value = ''
  }
}

moneyButton.onclick = moneyInput

americano.onclick = () => {
  if (money.value < americano.value) {
    firstScreen.textContent = 'Not enough money!'
    secondScreen.textContent = `Price is ${americano.value}$, you need to put ${americano.value - money.value}$ more`
    document.querySelector('.screen').style.background = '#FF6161'
    document.querySelector('.screen').style.color = 'white'
  } else if (money.value == americano.value) {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your americano will be ready soon!'
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  } else {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your americano will be ready soon!'
    document.querySelector('.withdrawalimg').style.visibility = 'visible'
    document.querySelector('.withdrawal-text').textContent = `Take your ${money.value - americano.value}$`
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  }
}

latte.onclick = () => {
  if (money.value < latte.value) {
    firstScreen.textContent = 'Not enough money!'
    secondScreen.textContent = `Price is ${latte.value}$, you need to put ${latte.value - money.value}$ more`
    document.querySelector('.screen').style.background = '#FF6161'
    document.querySelector('.screen').style.color = 'white'
  } else if (money.value == latte.value) {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your latte will be ready soon!'
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  } else {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your latte will be ready soon!'
    document.querySelector('.withdrawalimg').style.visibility = 'visible'
    document.querySelector('.withdrawal-text').textContent = `Take your ${money.value - latte.value}$`
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  }
}

cappuccino.onclick = () => {
  if (money.value < cappuccino.value) {
    firstScreen.textContent = 'Not enough money!'
    secondScreen.textContent = `Price is ${cappuccino.value}$, you need to put ${cappuccino.value - money.value}$ more`
    document.querySelector('.screen').style.background = '#FF6161'
    document.querySelector('.screen').style.color = 'white'
  } else if (money.value == cappuccino.value) {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your cappuccino will be ready soon!'
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  } else {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your cappuccino will be ready soon!'
    document.querySelector('.withdrawalimg').style.visibility = 'visible'
    document.querySelector('.withdrawal-text').textContent = `Take your ${money.value - cappuccino.value}$`
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  }
}

hotChocolate.onclick = () => {
  if (money.value < hotChocolate.value) {
    firstScreen.textContent = 'Not enough money!'
    secondScreen.textContent = `Price is ${hotChocolate.value}$, you need to put ${hotChocolate.value - money.value}$ more`
    document.querySelector('.screen').style.background = '#FF6161'
    document.querySelector('.screen').style.color = 'white'
  } else if (money.value == hotChocolate.value) {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your Hot Chocolate will be ready soon!'
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  } else {
    firstScreen.textContent = 'Thanks!'
    secondScreen.textContent = 'Your Hot Chocolate will be ready soon!'
    document.querySelector('.withdrawalimg').style.visibility = 'visible'
    document.querySelector('.withdrawal-text').textContent = `Take your ${money.value - hotChocolate.value}$`
    money.value = ''
    document.querySelector('.screen').style.background = '#007654'
    document.querySelector('.screen').style.color = 'white'
    setTimeout('audio.play()', 2000)
  }
}