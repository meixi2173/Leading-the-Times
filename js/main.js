// Blackout Protocol - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blackout Protocol website loaded');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    const links = document.querySelectorAll('.doc-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            this.innerHTML = '⏳ Loading...';
            setTimeout(() => {
                this.innerHTML = this.getAttribute('data-original') || this.textContent;
            }, 2000);
        });
        
        // Store original text
        link.setAttribute('data-original', link.innerHTML);
    });
});