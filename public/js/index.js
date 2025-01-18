
document.addEventListener('DOMContentLoaded', () => {

    console.log('Book Management System - Home Page Loaded');

    const pageVisits = localStorage.getItem('pageVisits') || 0;
    localStorage.setItem('pageVisits', Number(pageVisits) + 1);

    const manageButtons = document.querySelectorAll('.btn');
    manageButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Navigating to: ${event.target.textContent}`);
        });
    });
});
