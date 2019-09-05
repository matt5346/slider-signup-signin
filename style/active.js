const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const container = document.getElementById('container');

signIn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signUp.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

