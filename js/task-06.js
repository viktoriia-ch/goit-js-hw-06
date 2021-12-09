const inputEl = document.getElementById('validation-input');


inputEl.addEventListener('blur', () => {
    const inputValue = inputEl.value.length;
    const data = Number(inputEl.dataset.length);
   
    if (inputValue === data) {

  inputEl.classList.remove('invalid');
  inputEl.classList.add('valid');
        
    }
    else {

        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});