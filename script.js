  const toggleBtn = document.getElementById('toggle-theme');
  toggleBtn.addEventListener('click', () => {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggleBtn.innerHTML = isDark ? '<i class="bi bi-moon-fill"></i>' : '<i class="bi bi-brightness-high-fill"></i>';
  });

