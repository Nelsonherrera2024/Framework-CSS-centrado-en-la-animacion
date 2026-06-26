document.addEventListener('DOMContentLoaded', function() { initCharts(); initAnimations(); initInteractiveElements(); });

function initCharts() {
    Chart.defaults.color = '#94a3b8'; Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.08)'; Chart.defaults.font.family = "'Inter', sans-serif";
    const colors = { primary: 'rgba(50, 108, 229, 1)', primaryLight: 'rgba(50, 108, 229, 0.2)', secondary: 'rgba(139, 92, 246, 1)', success: '#10b981', k8sBlue: '#326ce5' };
    
    if (document.getElementById('cpuChart')) {
        new Chart(document.getElementById('cpuChart'), { type: 'doughnut', data: { labels: ['Used', 'Available'], datasets: [{ data: [67, 33], backgroundColor: [colors.primary, colors.primaryLight], borderWidth: 0, cutout: '70%' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
    }
    if (document.getElementById('memoryChart')) {
        new Chart(document.getElementById('memoryChart'), { type: 'doughnut', data: { labels: ['Used', 'Available'], datasets: [{ data: [82, 18], backgroundColor: [colors.secondary, 'rgba(139, 92, 246, 0.2)'], borderWidth: 0, cutout: '70%' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
    }
    if (document.getElementById('nodeHealthChart')) {
        new Chart(document.getElementById('nodeHealthChart'), { type: 'bar', data: { labels: ['node-01', 'node-02', 'node-03', 'node-04', 'node-05'], datasets: [{ label: 'Health %', data: [98, 95, 97, 99, 92], backgroundColor: [colors.success, colors.success, colors.success, colors.success, '#f59e0b'], borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 80, max: 100 } } } });
    }
    if (document.getElementById('workloadTrendChart')) {
        new Chart(document.getElementById('workloadTrendChart'), { type: 'line', data: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], datasets: [{ label: 'Pods', data: [1650, 1720, 1780, 1800, 1820, 1847, 1847], borderColor: colors.primary, backgroundColor: colors.primaryLight, fill: true, tension: 0.4 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
    }
    if (document.getElementById('performanceChart')) {
        new Chart(document.getElementById('performanceChart'), { type: 'line', data: { labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'], datasets: [{ label: 'Requests/sec', data: [1200, 800, 2100, 3500, 4200, 3800, 2400], borderColor: colors.primary, backgroundColor: 'transparent', tension: 0.4 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
    }
}

function initAnimations() {
    const observerOptions = { threshold: 0.5 };
    const progressObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.querySelectorAll('.progress-fill, .namespace-bar .fill').forEach(bar => { const width = bar.style.width; bar.style.width = '0%'; setTimeout(() => bar.style.width = width, 100); }); progressObserver.unobserve(entry.target); } }); }, observerOptions);
    document.querySelectorAll('.dashboard-card').forEach(card => progressObserver.observe(card));
}

function initInteractiveElements() {
    document.querySelectorAll('.nav-item').forEach(item => { item.addEventListener('click', function(e) { e.preventDefault(); document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active')); this.classList.add('active'); }); });
    document.querySelectorAll('.action-btn, .btn-primary').forEach(btn => { btn.addEventListener('click', function() { showNotification('Action triggered', 'info'); }); });
    window.showNotification = function(message, type) { const notification = document.createElement('div'); notification.innerHTML = '<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'info-circle') + '"></i><span>' + message + '</span>'; notification.style.cssText = 'position:fixed;bottom:20px;right:20px;background:rgba(17,24,39,0.95);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;display:flex;align-items:center;gap:12px;font-size:0.9rem;z-index:1000;animation:slideIn 0.3s ease'; document.body.appendChild(notification); setTimeout(() => { notification.style.animation = 'slideOut 0.3s ease'; setTimeout(() => notification.remove(), 300); }, 3000); };
}
