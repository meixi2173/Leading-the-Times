document.getElementById('blackoutBtn').addEventListener('click', () => {
  const overlay = document.getElementById('blackoutOverlay');
  overlay.style.display = 'flex';
  setTimeout(() => {
    document.getElementById('hiddenMessage').style.display = 'block';
    document.getElementById('lightOnBtn').style.display = 'block';
  }, 1500);
});
document.getElementById('lightOnBtn').addEventListener('click', () => {
  document.getElementById('blackoutOverlay').style.display = 'none';
});
