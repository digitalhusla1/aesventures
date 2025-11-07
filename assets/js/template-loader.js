document.addEventListener('DOMContentLoaded', async function() {
    // Load social icons
    const socialIconsTemplate = await fetch('assets/templates/social-icons.html').then(r => r.text());
    document.querySelectorAll('.social-links').forEach(el => {
        el.innerHTML = socialIconsTemplate;
    });

    // Insert footer template
    const footerTemplate = await fetch('assets/templates/footer.html').then(r => r.text());
    document.querySelector('footer.site-footer').outerHTML = footerTemplate;

    // Social icons need to be reloaded in footer after footer template is loaded
    document.querySelector('footer .social-links').innerHTML = socialIconsTemplate;
});