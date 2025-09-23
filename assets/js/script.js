function openWhitepaper() {
  const win = window.open('../whitepaper/blackout.pdf', '_blank');
  if (!win) alert('请允许弹出窗口以查看白皮书');
}