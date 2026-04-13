/* =====================================
   爱旅畅达统一组件库 v1.0 JS 工具函数
   所有系统通用：组件生成、页面切换、工具方法
   ===================================== */

window.AilvComponents = {
    // 1. 按钮组件生成
    Button: function(text, type = 'primary', icon = '') {
        return `<button class="btn btn-${type}">
                    ${icon ? `<i class="fa fa-${icon} mr-2"></i>` : ''}${text}
                </button>`;
    },

    // 2. 产品卡片生成
    ProductCard: function(title, desc, price, img = 'https://picsum.photos/id/1045/600/300') {
        return `<div class="product-card">
                    <img src="${img}" class="product-card-img" alt="${title}">
                    <div class="product-card-body">
                        <h3 class="product-card-title">${title}</h3>
                        <p class="product-card-desc">${desc}</p>
                        <div class="product-card-price">¥${price}</div>
                        <button class="btn btn-secondary btn-sm">立即预订</button>
                    </div>
                </div>`;
    },

    // 3. 统计卡片生成
    StatCard: function(label, value, trend = '↑ 12% 较昨日') {
        return `<div class="stat-card">
                    <div class="stat-card-label">${label}</div>
                    <div class="stat-card-value">${value}</div>
                    <div class="stat-card-trend ${trend.startsWith('↑') ? 'up' : 'down'}">${trend}</div>
                </div>`;
    },

    // 4. 状态标签生成
    Tag: function(text, type = 'success') {
        return `<span class="tag tag-${type}">${text}</span>`;
    },

    // 5. 通用表格生成
    Table: function(headers, data) {
        let thead = headers.map(h => `<th>${h}</th>`).join('');
        let tbody = data.map(row => 
            `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
        ).join('');
        return `<table class="table w-full">
                    <thead><tr>${thead}</tr></thead>
                    <tbody>${tbody}</tbody>
                </table>`;
    },

    // 6. 页面切换核心逻辑（修复所有点击问题）
    switchSystem: function(system) {
        // 更新系统标题
        const titles = {
            'components': '统一组件库',
            'c-end': '中英文C端',
            'admin': '运营后台',
            'zhongtai': '业务中台',
            'erp': 'ERP系统'
        };
        document.getElementById('system-title').textContent = titles[system];

        // 更新顶部标签样式
        document.querySelectorAll('.system-tab').forEach(tab => {
            tab.classList.remove('bg-primary', 'text-white');
            tab.classList.add('bg-gray-200', 'text-gray-700');
        });
        event.target.classList.remove('bg-gray-200', 'text-gray-700');
        event.target.classList.add('bg-primary', 'text-white');

        // 显示对应页面列表
        document.querySelectorAll('#page-list > div').forEach(list => {
            list.classList.add('hidden');
        });
        document.getElementById(system + '-list').classList.remove('hidden');

        // 显示默认页面
        if (system === 'components') {
            this.showComponent('buttons');
        } else if (system === 'c-end') {
            this.showPage('c-home');
        } else if (system === 'admin') {
            this.showPage('admin-dashboard');
        } else if (system === 'zhongtai') {
            this.showPage('zt-dashboard');
        } else if (system === 'erp') {
            this.showPage('erp-dashboard');
        }
    },

    // 7. 显示组件
    showComponent: function(id) {
        document.querySelectorAll('.component-page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('comp-' + id).classList.add('active');
    },

    // 8. 显示页面
    showPage: function(id) {
        document.querySelectorAll('.system-page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById('page-' + id).classList.add('active');
    },

    // 9. 复制当前代码
    copyCurrentCode: function() {
        const code = document.getElementById('code-content').textContent;
        navigator.clipboard.writeText(code).then(() => {
            alert('代码已复制到剪贴板！');
        });
    }
};

// 全局挂载，方便调用
window.Ailv = AilvComponents;
