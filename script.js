// Modal 打开与关闭
document.getElementById("openWhitepaper").onclick = function() {
  document.getElementById("whitepaperModal").style.display = "flex";
};
document.getElementById("openCeremony").onclick = function() {
  document.getElementById("ceremonyModal").style.display = "flex";
};

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = function() {
    const target = this.getAttribute("data-target");
    document.getElementById(target).style.display = "none";
  };
});

// 点击外部区域关闭 Modal
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// 星空 + 流星效果
const stars = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.width = star.style.height = Math.random() * 2 + "px";
  star.style.background = "white";
  star.style.position = "absolute";
  stars.appendChild(star);
}

const shootingStars = document.getElementById("shooting-stars");
setInterval(() => {
  let star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * 50 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.width = "2px";
  star.style.height = "100px";
  star.style.background = "linear-gradient(-45deg, white, transparent)";
  star.style.position = "absolute";
  star.style.transform = "rotate(45deg)";
  shootingStars.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}, 3000);