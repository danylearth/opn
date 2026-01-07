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

    // Initialize Sidebar Toggle
    initializeSidebarToggle();

    // Initialize Chart with Chart.js
    initializeChart();
});

// Sidebar Toggle Functionality
function initializeSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    
    if (!sidebar || !toggleButton) return;
    
    // Check if sidebar should be collapsed by default on smaller screens
    const shouldCollapseByDefault = window.innerWidth <= 1440;
    if (shouldCollapseByDefault) {
        sidebar.classList.add('collapsed');
    }
    
    // Toggle sidebar on button click
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('collapsed');
        
        // Save state to localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // Restore state from localStorage (if available)
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // On smaller screens, allow manual toggle but don't force collapse
        // The media query will handle the responsive behavior
    });
}

// Chart Initialization using Chart.js
function initializeChart() {
    const canvas = document.getElementById('statisticsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Chart data based on Figma design
    const dates = [
        '10 Jan', '12 Jan', '14 Jan', '16 Jan', '18 Jan', '20 Jan', '22 Jan',
        '24 Jan', '26 Jan', '28 Jan', '30 Jan', '1 Feb', '3 Feb', '5 Feb',
        '7 Feb', '9 Feb', '11 Feb', '13 Feb', '15 Feb', '17 Feb', '19 Feb'
    ];
    
    // Sample data points - Success line (teal)
    const successData = [
        2.5, 3.0, 2.8, 3.2, 2.9, 3.1, 2.7, 3.3, 3.0, 2.8, 3.1, 2.9, 3.2, 2.6, 3.0, 2.8, 3.1, 2.9, 3.0, 2.7, 3.1
    ];
    
    // Error line data (red)
    const errorData = [
        1.5, 1.8, 1.6, 1.9, 1.7, 1.8, 1.5, 2.0, 1.7, 1.6, 1.8, 1.7, 1.9, 1.4, 1.7, 1.6, 1.8, 1.7, 1.7, 1.5, 1.8
    ];

    // Create Chart.js instance
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Success',
                    data: successData,
                    borderColor: '#84E5D3',
                    backgroundColor: 'rgba(132, 229, 211, 0.1)',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#84E5D3',
                    pointBorderColor: '#84E5D3',
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#84E5D3',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Error',
                    data: errorData,
                    borderColor: '#E58485',
                    backgroundColor: 'rgba(229, 132, 133, 0.1)',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#E58485',
                    pointBorderColor: '#E58485',
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#E58485',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        title: function(context) {
                            return context[0].label;
                        },
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(1);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: true,
                        color: '#E5E7EB',
                        lineWidth: 1,
                        drawBorder: false,
                        drawOnChartArea: true,
                        drawTicks: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'SUSE',
                            size: 12
                        },
                        padding: 4
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 7,
                    ticks: {
                        stepSize: 1,
                        color: '#6B7280',
                        font: {
                            family: 'SUSE',
                            size: 12
                        },
                        padding: 12,
                        callback: function(value) {
                            return value;
                        }
                    },
                    grid: {
                        display: true,
                        color: '#E5E7EB',
                        lineWidth: 1,
                        drawBorder: false,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [3, 3]
                    },
                    border: {
                        display: true,
                        color: '#9CA3AF',
                        width: 1
                    }
                }
            },
            elements: {
                point: {
                    hoverRadius: 6,
                    hoverBorderWidth: 2
                }
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
}
