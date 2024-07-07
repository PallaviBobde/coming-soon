// Calculate the time remaining until launch (in milliseconds)
const launchDate = new Date('2024-07-10T00:00:00Z').getTime();
const now = new Date().getTime();
const timeRemaining = launchDate - now;

// Update the countdown every second
const countdownElement = document.getElementById('countdown');
const interval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = launchDate - now;

  if (timeRemaining < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = 'Website Launched!';
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
