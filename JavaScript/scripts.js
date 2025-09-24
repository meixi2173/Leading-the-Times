let isLightOn = true;

// 切换灯光模式
function toggleLight() {
  if (isLightOn) {
    document.body.style.backgroundColor = '#000'; // 灯光关闭，背景变黑
    document.querySelector('.lightning').style.opacity = '0'; // 隐藏闪电
    document.querySelector('.galaxy-background').style.opacity = '0'; // 隐藏星空背景
    document.querySelector('.light-toggle-btn').textContent = "Switch Lights On";
  } else {
    document.body.style.backgroundColor = '#111'; // 灯光打开，背景恢复
    document.querySelector('.lightning').style.opacity = '1'; // 显示闪电
    document.querySelector('.galaxy-background').style.opacity = '1'; // 显示星空背景
    document.querySelector('.light-toggle-btn').textContent = "Switch Lights Off";
  }
  isLightOn = !isLightOn;
}

// 闪电效果控制
function addLightningEffect() {
  // 给闪电添加类名，使它活跃
  setInterval(function () {
    document.querySelector('.lightning').classList.add('active');
    setTimeout(() => {
      document.querySelector('.lightning').classList.remove('active');
    }, 500); // 闪电显示0.5秒
  }, 2000); // 每2秒生成一次闪电
}

// 页面加载完成后启动闪电效果
window.onload = function() {
  addLightningEffect();
};
