// Main JavaScript Functionality for Neno Evangelism Website

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Prayer Request WhatsApp Redirection
    const prayerForm = document.getElementById('prayer-form');

    if (prayerForm) {
        prayerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('prayer-name').value;
            const phone = document.getElementById('prayer-phone').value;
            const message = document.getElementById('prayer-message').value;

            // Church WhatsApp Contact Number (Nairobi HQ line)
            const churchWhatsAppNumber = "254700000000"; 

            const encodedMessage = encodeURIComponent(
                `*NEW PRAYER REQUEST - Neno Evangelism Web Portal*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n\n` +
                `*Prayer Details:*\n${message}`
            );

            // Redirect directly to WhatsApp
            window.open(`https://wa.me/${churchWhatsAppNumber}?text=${encodedMessage}`, '_blank');
        });
    }
});