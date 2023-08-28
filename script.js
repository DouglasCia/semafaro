const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopInterval();
  turnOn[event.target.id]();
}

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++
  } else {
    colorIndex = 0
  }
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

const stopInterval = () => {
  clearInterval ( intervalId );
}

const turnOn = {
  'red':  () => img.src = './img/vermelho.png',
  'yellow':  () => img.src = './img/amarelo.png',
  'green':  () => img.src = './img/verde.png',
  'auto': () => intervalId = setInterval (changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);
