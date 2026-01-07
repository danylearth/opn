// Navigation Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle menu items with subitems
    const menuItemsWithSubitems = document.querySelectorAll('.menu-item.has-subitems');
    menuItemsWithSubitems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            // Toggle submenu (if implemented)
            console.log('Menu item clicked:', this.querySelector('span').textContent);
        });
    });

    // Initialize Chart
    initializeChart();
});

// Chart Initialization
function initializeChart() {
    const canvas = document.getElementById('statisticsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Chart configuration
    const padding = { top: 20, right: 20, bottom: 50, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Sample data (you can replace this with real data)
    const dates = [
        '10 Jan', '12 Jan', '14 Jan', '16 Jan', '18 Jan', '20 Jan', '22 Jan',
        '24 Jan', '26 Jan', '28 Jan', '30 Jan', '1 Feb', '3 Feb', '5 Feb',
        '7 Feb', '9 Feb', '11 Feb', '13 Feb', '15 Feb', '17 Feb', '19 Feb'
    ];
    
    // Sample data points (you can replace with real data)
    const dataPoints = [
        { x: 0, y: 2.5, color: '#84E5D3' },
        { x: 1, y: 3.0, color: '#84E5D3' },
        { x: 2, y: 2.8, color: '#84E5D3' },
        { x: 3, y: 3.2, color: '#84E5D3' },
        { x: 4, y: 2.9, color: '#84E5D3' },
        { x: 5, y: 3.1, color: '#84E5D3' },
        { x: 6, y: 2.7, color: '#84E5D3' },
        { x: 7, y: 3.3, color: '#84E5D3' },
        { x: 8, y: 3.0, color: '#84E5D3' },
        { x: 9, y: 2.8, color: '#84E5D3' },
        { x: 10, y: 3.1, color: '#84E5D3' },
        { x: 11, y: 2.9, color: '#84E5D3' },
        { x: 12, y: 3.2, color: '#84E5D3' },
        { x: 13, y: 2.6, color: '#84E5D3' },
        { x: 14, y: 3.0, color: '#84E5D3' },
        { x: 15, y: 2.8, color: '#84E5D3' },
        { x: 16, y: 3.1, color: '#84E5D3' },
        { x: 17, y: 2.9, color: '#84E5D3' },
        { x: 18, y: 3.0, color: '#84E5D3' },
        { x: 19, y: 2.7, color: '#84E5D3' },
        { x: 20, y: 3.1, color: '#84E5D3' }
    ];

    // Error line data
    const errorData = [
        { x: 0, y: 1.5, color: '#E58485' },
        { x: 1, y: 1.8, color: '#E58485' },
        { x: 2, y: 1.6, color: '#E58485' },
        { x: 3, y: 1.9, color: '#E58485' },
        { x: 4, y: 1.7, color: '#E58485' },
        { x: 5, y: 1.8, color: '#E58485' },
        { x: 6, y: 1.5, color: '#E58485' },
        { x: 7, y: 2.0, color: '#E58485' },
        { x: 8, y: 1.7, color: '#E58485' },
        { x: 9, y: 1.6, color: '#E58485' },
        { x: 10, y: 1.8, color: '#E58485' },
        { x: 11, y: 1.7, color: '#E58485' },
        { x: 12, y: 1.9, color: '#E58485' },
        { x: 13, y: 1.4, color: '#E58485' },
        { x: 14, y: 1.7, color: '#E58485' },
        { x: 15, y: 1.6, color: '#E58485' },
        { x: 16, y: 1.8, color: '#E58485' },
        { x: 17, y: 1.7, color: '#E58485' },
        { x: 18, y: 1.7, color: '#E58485' },
        { x: 19, y: 1.5, color: '#E58485' },
        { x: 20, y: 1.8, color: '#E58485' }
    ];

    // Draw chart
    drawChart(ctx, chartWidth, chartHeight, padding, dates, dataPoints, errorData);
}

function drawChart(ctx, width, height, padding, dates, dataPoints, errorData) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Calculate scales
    const maxY = 7;
    const minY = 0;
    const yRange = maxY - minY;
    const xStep = width / (dates.length - 1);

    // Draw grid lines
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    
    for (let i = 0; i <= 7; i++) {
        const y = padding.top + (height / 7) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + width, y);
        ctx.stroke();
    }

    // Draw vertical grid lines
    for (let i = 0; i < dates.length; i++) {
        const x = padding.left + xStep * i;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, padding.top + height);
        ctx.stroke();
    }

    ctx.setLineDash([]);

    // Draw axes
    ctx.strokeStyle = '#9CA3AF';
    ctx.lineWidth = 1;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + height);
    ctx.lineTo(padding.left + width, padding.top + height);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + height);
    ctx.stroke();

    // Draw date labels
    ctx.fillStyle = '#6B7280';
    ctx.font = '12px SUSE';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    dates.forEach((date, i) => {
        const x = padding.left + xStep * i;
        ctx.fillText(date, x, padding.top + height + 4);
    });

    // Draw Y-axis labels
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i <= 7; i++) {
        const y = padding.top + (height / 7) * (7 - i);
        const value = i;
        ctx.fillText(value.toString(), padding.left - 12, y);
    }

    // Draw error line (red)
    drawLine(ctx, errorData, width, height, padding, xStep, '#E58485', 2);
    
    // Draw success line (teal)
    drawLine(ctx, dataPoints, width, height, padding, xStep, '#84E5D3', 2);

    // Draw data points
    dataPoints.forEach(point => {
        const x = padding.left + xStep * point.x;
        const y = padding.top + height - (point.y / yRange) * height;
        
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    errorData.forEach(point => {
        const x = padding.left + xStep * point.x;
        const y = padding.top + height - (point.y / yRange) * height;
        
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawLine(ctx, dataPoints, width, height, padding, xStep, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    
    const maxY = 7;
    const minY = 0;
    const yRange = maxY - minY;
    
    dataPoints.forEach((point, index) => {
        const x = padding.left + xStep * point.x;
        const y = padding.top + height - (point.y / yRange) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
}

// Handle window resize
window.addEventListener('resize', function() {
    initializeChart();
});
