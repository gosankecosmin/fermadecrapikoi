// Buton demo
document.getElementById('buton').addEventListener('click', () => {
  document.getElementById('status').textContent = 'Butonul funcționează.';
});
// Formular demo (doar mesaj local)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Mesaj înregistrat local. Pentru trimitere reală vom adăuga un serviciu.';
});
