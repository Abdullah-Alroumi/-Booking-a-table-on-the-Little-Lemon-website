document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('booking-form');
    const dateInput = document.getElementById('book-date');
    const timeSelect = document.getElementById('book-time');
    const guestsInput = document.getElementById('book-guests');
    const occasionSelect = document.getElementById('book-occasion');
    const confirmationMessage = document.getElementById('confirmation-message');

    const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"]; 
    availableTimes.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });

});
