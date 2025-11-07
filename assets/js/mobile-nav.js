// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !mobileNavToggle.contains(e.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when pressing escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
});