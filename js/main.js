// 範例：點擊時加上動態 class，可搭配更複雜動畫
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', e => {
        e.currentTarget.classList.add('active');
        // 若需要在點擊後移除效果
        setTimeout(() => {
            e.currentTarget.classList.remove('active');
        }, 500);
    });
});
