// public/js/index.js
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add any initialization logic for the index page
    console.log('Book Management System - Home Page Loaded');

    // Example: Track page visits
    const pageVisits = localStorage.getItem('pageVisits') || 0;
    localStorage.setItem('pageVisits', Number(pageVisits) + 1);

    // Optional: Add event listeners to buttons
    const manageButtons = document.querySelectorAll('.btn');
    manageButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Navigating to: ${event.target.textContent}`);
        });
    });
});