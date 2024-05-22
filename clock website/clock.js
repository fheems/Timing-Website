document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (city) {
        showTime(city);
    }
});

function showTime(city) {
    const cityNameElement = document.getElementById('city-name');
    const dateTimeElement = document.getElementById('date-time');

    cityNameElement.textContent = `Current time in ${city}:`;

    function updateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: cityTimeZone(city),
            timeZoneName: 'short'
        };
        dateTimeElement.textContent = now.toLocaleString('en-US', options);
    }

    updateTime();
    setInterval(updateTime, 1000);
}

function cityTimeZone(city) {
    const cityTimeZones = {
        'New York': 'America/New_York',
        'London': 'Europe/London',
        'Paris': 'Europe/Paris',
        'Tokyo': 'Asia/Tokyo',
        'Sydney': 'Australia/Sydney',
        // Add more cities and their time zones here
    };
    return cityTimeZones[city] || 'UTC';
}
