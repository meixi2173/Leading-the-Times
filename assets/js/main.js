// 星空动效脚本
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");
let stars = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2,
      d: Math.random() * 1
    });
  }
}
function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  update();
}
function update() {
  stars.forEach(s => {
    s.y += s.d;
    if (s.y > h) s.y = 0;
  });
}
function animate() {
  draw();
  requestAnimationFrame(animate);
}
window.addEventListener("resize", resize);
resize();
animate();
