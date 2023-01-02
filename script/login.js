const login_input = document.querySelector('.Login_input');
const login_button = document.querySelector('.Login_button');
const login_form = document.querySelector('.Login_form');

const validateInput = (event) => {
   if (event.target.value.length >= 3){
    login_button.removeAttribute('disabled');
   }
   else{
    login_button.setAttribute('disabled', '');
   }
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('Nome', login_input.value );
    window.location = '../pages/game.html';
}

login_input.addEventListener('input', validateInput);
login_form.addEventListener('submit', handleSubmit);