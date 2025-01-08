document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.bx.bx-show');
    const passwordInput = document.getElementById('password');

    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text'; // Show password
                toggleIcon.classList.replace('bx-show', 'bx-hide'); // Change icon to hide
            }
            else {
                passwordInput.type = 'password'; // Hide password
                toggleIcon.classList.replace('bx-hide', 'bx-show'); // Change icon to show
            }
        });
    }
}); //<i class='bx bxs-hide bx-flip-horizontal' ></i>