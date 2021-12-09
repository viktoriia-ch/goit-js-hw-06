const reference = {
  inputEl: document.querySelector('#name-input'),
  nameOutputEl: document.querySelector('#name-output')
}

reference.inputEl.addEventListener ('click', onInputChange);

function onInputChange(event) {
  if (reference.inputEl.value === '') {
    reference.nameOutputEl.textContent = 'Anonymous';
  } else {
    reference.nameOutputEl.textContent = event.currentTarget.value;
  }
}