document.addEventListener('DOMContentLoaded', function () {
    const snowfallContainer = document.querySelector('.snowfall');

    // Create snowflakes dynamically
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`; // Vary animation duration
        snowfallContainer.appendChild(snowflake);
    }
});