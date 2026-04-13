// 爱旅畅达统一组件库 v1.0 JS工具
window.AilvComponents = {
    // 生成按钮HTML
    Button: function(text, type = 'primary', size = 'md') {
        return `<button class="btn btn-${type} btn-${size}">${text}</button>`;
    },
    
    // 生成产品卡片HTML
    ProductCard: function(title, desc, price, img) {
        return `
            <div class="product-card">
                <img src="${img}" class="product-card-img" alt="${title}">
                <div class="product-card-body">
                    <h3 class="product-card-title">${title}</h3>
                    <p class="product-card-desc">${desc}</p>
                    <div class="product-card-price">¥${price}</div>
                    <button class="btn btn-secondary btn-sm">立即预订</button>
                </div>
            </div>
        `;
    },
    
    // 生成统计卡片HTML
    StatCard: function(label, value, trend, isUp = true) {
        return `
            <div class="stat-card">
                <div class="stat-card-label">${label}</div>
                <div class="stat-card-value">${value}</div>
                <div class="stat-card-trend ${isUp ? 'up' : 'down'}">${trend}</div>
            </div>
        `;
    }
};
