/**
 * PDM Kiosk Portal - Mock API & Authentication Service
 */

function authenticateUser(studentId, password) {
  const alertEl = document.getElementById('login-alert');

  if (!studentId || !password) {
    if (alertEl) {
      alertEl.className = 'alert-box error';
      alertEl.textContent = 'Please enter both your Student ID and Password.';
    }
    return false;
  }

  // Simulate authentication validation
  if (alertEl) {
    alertEl.className = 'alert-box success';
    alertEl.textContent = 'Authentication successful! Redirecting to portal...';
  }

  setTimeout(() => {
    if (typeof navigateTo === 'function') {
      navigateTo('portal', { studentId });
    } else {
      alert(`Welcome, Scholar ${studentId}! Login Successful.`);
    }
  }, 900);

  return true;
}
