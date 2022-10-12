
let userInput = document.querySelectorAll('.user_input');

userInput.forEach(input => {
    input.addEventListener('blur', validate);
})

function validate() {
    if (this.checkValidity()) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }

    if (this.type === 'password') {
        let pass = document.querySelector('#pass');
        let confirmPass = document.querySelector('#confirm_pass');

        if (pass.value && confirmPass.value) {
            if (pass.value === confirmPass.value) {
                pass.classList.remove('invalid');
                pass.classList.add('valid');
                confirmPass.classList.remove('invalid');
                confirmPass.classList.add('valid');
            } else {
                pass.classList.remove('valid');
                pass.classList.add('invalid');
                confirmPass.classList.remove('valid');
                confirmPass.classList.add('invalid');
            }
        }
    }
}