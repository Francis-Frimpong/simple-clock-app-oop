class DigitalClock {
  constructor(clockElement) {
    this.clockElement = clockElement;
  }

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  updateClock() {
    this.clockElement.textContent = this.getCurrentTime();
  }

  start() {
    setInterval(() => this.updateClock(), 1000);
  }
}

const clock = document.getElementById("clock");
const digitalClock = new DigitalClock(clock);
digitalClock.updateClock();
digitalClock.start();
