document.addEventListener('DOMContentLoaded', () => {
    const revealMessageBtn = document.getElementById('revealMessageBtn');
    const personalMessage = document.getElementById('personalMessage');
    const readTheseText = document.getElementById('read-these-text');

    if (revealMessageBtn && personalMessage && readTheseText) {
        revealMessageBtn.addEventListener('click', () => {
            // Hide the "TRY TO READ THESE" text
            readTheseText.style.display = 'none';
            
            // Hide the button
            revealMessageBtn.style.display = 'none';
            
            // Show the message
            personalMessage.classList.add('visible');
        });
    }
});