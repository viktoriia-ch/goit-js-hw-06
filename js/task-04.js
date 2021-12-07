const referens = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

referens.decrBtn.addEventListener('click', decrement);
referens.incrBtn.addEventListener('click', increment);

let countValue = 0;

function decrement() {
  referens.valueEl.textContent = countValue -= 1;
}

function increment() {
  referens.valueEl.textContent = countValue += 1;
}