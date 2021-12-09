const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mailEl = formElements.email.value;
    const passwordEl = formElements.password.value;

    const formData = { 
        mailEl, 
        passwordEl
    };

    if (mailEl === '' || passwordEl === '') {
        return alert('All fields must be completed!');
    }

    console.log(formData)
    form.reset()
});
