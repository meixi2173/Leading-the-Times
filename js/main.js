isBlackout = !isBlackout;
overlay.style.opacity = isBlackout ? '0.95' : '0';
console.log(isBlackout ? '💡 熄灯' : '💡 亮灯');

// 添加关键动画定义
const style = document.createElement('style');
style.textContent = `
    @keyframes lightningFlash {
        0% { opacity: 0; transform: scale(1); }
        20% { opacity: 0.9; transform: scale(1.1); }
        100% { opacity: 0; transform: scale(1); }
    }

    @keyframes twinkle {
        0% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.2; transform: scale(1); }
    }

    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
    }

    .visual-controls {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .visual-controls button {
        background: rgba(0, 0, 0, 0.8);
        color: #ffd700;
        border: 2px solid #ffd700;
        padding: 12px 18px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.3rem;
        transition: all 0.3s;
    }

    .visual-controls button:hover {
        background: #ffd700;
        color: black;
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

// 页面加载时自动创建星空
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(enhanceStars, 1000);
});
