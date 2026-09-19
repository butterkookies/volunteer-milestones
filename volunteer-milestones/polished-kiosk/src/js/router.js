/**
 * PDM Kiosk Portal - View Router
 */

function navigateTo(viewName, params = {}) {
  const loginView = document.getElementById('view-login');
  const portalView = document.getElementById('view-portal');
  const displayId = document.getElementById('display-student-id');

  if (viewName === 'portal') {
    if (loginView) loginView.style.display = 'none';
    if (portalView) portalView.style.display = 'block';
    if (displayId && params.studentId) {
      displayId.textContent = params.studentId;
    }
  } else {
    if (loginView) loginView.style.display = 'block';
    if (portalView) portalView.style.display = 'none';
    const alertEl = document.getElementById('login-alert');
    if (alertEl) alertEl.className = 'alert-box';
  }
}

// Initialize logout button listener
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      navigateTo('login');
    });
  }
});
