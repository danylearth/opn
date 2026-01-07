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

// Function to adjust player image size based on sidebar state
function adjustPlayerImageSize() {
    const sidebar = document.querySelector('.sidebar');
    const playerImage = document.querySelector('.player-image');
    
    if (!sidebar || !playerImage) return;
    
    // Check if sidebar is expanded (doesn't have 'collapsed' class)
    const isExpanded = !sidebar.classList.contains('collapsed');
    
    if (isExpanded) {
        // Sidebar is expanded: set image to 140px x 140px
        playerImage.style.width = '140px';
        playerImage.style.height = '140px';
    } else {
        // Sidebar is collapsed: reset to original size or remove inline styles to use CSS default
        playerImage.style.width = '';
        playerImage.style.height = '';
    }
}

// Sidebar Toggle Functionality
function initializeSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    
    if (!sidebar || !toggleButton) return;
    
    // Check if sidebar should be collapsed by default on smaller screens
    const shouldCollapseByDefault = window.innerWidth <= 1200;
    if (shouldCollapseByDefault) {
        sidebar.classList.add('collapsed');
    }
    
    // Initial adjustment of player image size
    adjustPlayerImageSize();
    
    // Toggle sidebar on button click
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Se a tela for menor que 1200px, não permitir expandir
        if (window.innerWidth <= 1200) {
            // Força sidebar a ficar colapsada
            sidebar.classList.add('collapsed');
            return;
        }
        
        sidebar.classList.toggle('collapsed');
        
        // Save state to localStorage (apenas se tela > 1200px)
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        
        // Adjust player image size when sidebar state changes
        adjustPlayerImageSize();
    });
    
    // Restore state from localStorage (if available) - apenas se tela > 1200px
    if (window.innerWidth > 1200) {
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState !== null) {
            if (savedState === 'true') {
                sidebar.classList.add('collapsed');
            } else {
                sidebar.classList.remove('collapsed');
            }
            // Adjust player image size after restoring state
            adjustPlayerImageSize();
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // On screens smaller than 1200px, force sidebar to be collapsed
        if (window.innerWidth <= 1200) {
            sidebar.classList.add('collapsed');
        }
        // Adjust player image size on resize
        adjustPlayerImageSize();
    });
    
    // Use MutationObserver to watch for sidebar class changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                adjustPlayerImageSize();
            }
        });
    });
    
    // Start observing the sidebar for class changes
    observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ['class']
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
    
    // Sample data points - Success line (green/teal)
    const successData = [
        2.5, 3.0, 2.8, 3.2, 2.9, 3.1, 2.7, 3.3, 3.0, 2.8, 3.1, 2.9, 3.2, 2.6, 3.0, 2.8, 3.1, 2.9, 3.0, 2.7, 3.1
    ];
    
    // Error line data (red)
    const errorData = [
        1.5, 1.8, 1.6, 1.9, 1.7, 1.8, 1.5, 2.0, 1.7, 1.6, 1.8, 1.7, 1.9, 1.4, 1.7, 1.6, 1.8, 1.7, 1.7, 1.5, 1.8
    ];
    
    // Purple line data (third line)
    const purpleData = [
        3.0, 3.2, 3.1, 3.3, 3.0, 3.2, 2.9, 3.4, 3.1, 3.0, 3.2, 3.1, 3.3, 2.8, 3.1, 3.0, 3.2, 3.1, 3.0, 2.9, 3.2
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
                    borderColor: '#84E5D3', // Green/Teal from Figma
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 0, // No points
                    pointHoverRadius: 0,
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Error',
                    data: errorData,
                    borderColor: '#E58485', // Red from Figma
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 0, // No points
                    pointHoverRadius: 0,
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Purple',
                    data: purpleData,
                    borderColor: '#9684E5', // Purple from Figma (System Color/Purple/1300)
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 0, // No points
                    pointHoverRadius: 0,
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
                    titleFont: {
                        family: "'SUSE', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", // Force SUSE font
                        size: 12,
                        weight: 400
                    },
                    bodyFont: {
                        family: "'SUSE', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", // Force SUSE font
                        size: 12,
                        weight: 400
                    },
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
                        color: 'rgba(229, 231, 235, 0.3)', // More transparent grid
                        lineWidth: 1,
                        drawBorder: false,
                        drawOnChartArea: true,
                        drawTicks: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: "'SUSE', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", // Force SUSE font
                            size: 12,
                            weight: 400
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
                            family: "'SUSE', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", // Force SUSE font
                            size: 12,
                            weight: 400
                        },
                        padding: 12,
                        callback: function(value) {
                            return value;
                        }
                    },
                    grid: {
                        display: true,
                        color: 'rgba(229, 231, 235, 0.3)', // More transparent grid
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
