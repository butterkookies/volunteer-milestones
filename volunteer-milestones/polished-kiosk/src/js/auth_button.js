/**
 * PDM Kiosk Portal - Interactive Auth Button (Student D: The Activator)
 * Task: Activate the interactive 3D Log In button in auth_button.js
 *       to validate student credentials and trigger entry.
 */

// Connect Interactive Log In Button Action
const loginBtn = document.getElementById('login-btn');

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const idInput = document.getElementById('student-id');
    const passInput = document.getElementById('password');

    const id = idInput ? idInput.value.trim() : '';
    const pass = passInput ? passInput.value.trim() : '';

    authenticateUser(id, pass);
  });
}
