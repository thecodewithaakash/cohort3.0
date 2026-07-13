export function initClock() {
  const clockElement = document.getElementById("live-clock");
  const updateClock = () => {
    const now = new Date();
    if (clockElement) {
      clockElement.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}
