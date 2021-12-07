function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColBtn = document.querySelector('.change-color');
const showColSpan = document.querySelector('.color');

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
}

const showColor = () => {
  showColSpan.textContent = getRandomHexColor();
}

changeColBtn.addEventListener('click', changeColor)
changeColBtn.addEventListener('click', showColor)