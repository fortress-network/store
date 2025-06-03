document.addEventListener('DOMContentLoaded', () => {
  const loginBtn  = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const avatar    = document.getElementById('avatar');
  const usernameInput = document.getElementById('username');

  // 1) Always show Steve on load
  avatar.src = 'https://crafatar.com/avatars/8667ba71b85a4004af54457a9734eed7?size=32';

  // 2) Check login state
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  toggleButtons(isLoggedIn);

  // 3) Login click → set logged in, swap buttons
  loginBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'true');
    toggleButtons(true);
  });

  // 4) Logout click → clear login, swap back
  logoutBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false');
    toggleButtons(false);
  });

  usernameInput.addEventListener('input', () => {
    const username = usernameInput.value.trim();
    if (username) {
      avatar.src = `https://mc-heads.net/avatar/${username}`;
    } else {
      avatar.src = 'https://crafatar.com/avatars/8667ba71b85a4004af54457a9734eed7?size=32';
    }
  });

  function toggleButtons(loggedIn) {
    if (loggedIn) {
      loginBtn.style.display  = 'none';
      logoutBtn.style.display = 'block';
    } else {
      loginBtn.style.display  = 'block';
      logoutBtn.style.display = 'none';
    }
  }

  // (optional) preserve gradient mouse animation here...
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100 + "%";
    const y = (e.clientY / window.innerHeight) * 100 + "%";
    document.body.style.setProperty("--x", x);
    document.body.style.setProperty("--y", y);
  });

  document.getElementById('sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('sidebar-toggle');
    sidebar.classList.toggle('sidebar-hidden');
    button.classList.toggle('moved');
  });
});
