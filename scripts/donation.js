// Donation functionality
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const donationButtons = document.querySelectorAll('.donation-button');
    const customAmountDiv = document.querySelector('.custom-amount');
    const customAmountInput = document.querySelector('.custom-amount input');
    let selectedAmount = 0;

    // Progress bar animation
    setTimeout(() => {
        progressBar.style.width = '50%';
        if (progressBar.style.width === '50%') {
            progressBar.classList.add('celebrating');
            setTimeout(() => {
                progressBar.classList.remove('celebrating');
            }, 2000);
        }
    }, 500);

    // Handle donation button clicks
    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            donationButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.dataset.amount === 'custom') {
                customAmountDiv.classList.add('visible');
                selectedAmount = 0;
            } else {
                customAmountDiv.classList.remove('visible');
                selectedAmount = parseInt(button.dataset.amount);
            }
        });
    });

    // Handle custom amount input
    customAmountInput.addEventListener('input', (e) => {
        selectedAmount = parseInt(e.target.value) || 0;
    });

    // Handle donation submission
    document.querySelector('.submit-donation').addEventListener('click', () => {
        if (selectedAmount > 0) {
            alert(`Thank you for your donation of ₦${selectedAmount.toLocaleString()}!`);
        } else {
            alert('Please select or enter a donation amount.');
        }
    });
});