function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

refs.btnEl.addEventListener('click', function () {
  let colorEl = getRandomHexColor();
  document.body.style.backgroundColor = colorEl;
  refs.spanEl.textContent = colorEl;
});