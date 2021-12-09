let counterValue = 0;

const reference = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value')
} 

reference.decrBtn.addEventListener('click', function decrement () {
  reference.valueEl.textContent = counterValue -=1;
});
reference.incrBtn.addEventListener('click', function increment () {
  reference.valueEl.textContent = counterValue += 1
});