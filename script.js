// Countdown target date (adjust as needed)
const targetDate = new Date("2025-08-01T00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "We're live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = 
    `Launching in <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong>`;
};

setInterval(updateCountdown, 1000);
