// === CONFIGURATION ===
const countdownTarget = "2025-04-23T00:00:00";

// === SHARED HTML ===
const headerHTML = `
  <header>
    <div class="left-header">
      <img src="ill/logo-500x500.png" alt="Breach Place Logo" class="logo" onclick="location.href='index.html'">
      <div class="countdown"></div>
    </div>
    <nav>
      <ul>
        <li><a href="music.html">Music</a></li>
        <li><a href="show.html">Show</a></li>
        <li><a href="404.html">FanClub</a></li>
        <li><a href="wiki.html">Wiki</a></li>
        <li><a href="404.html">Store</a></li>
        <li><a href="other.html">Other</a></li>
      </ul>
    </nav>
  </header>
    <!-- Unique content -->
<div class="hero2">
  <div class="hero-content">
  </div>
</div>
`;

const footerHTML = `
  <footer>
    &copy; 2025 Sunswip | Isaac Cheurfi. All rights reserved.
  </footer>
`;

// === PAGE INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
  insertHeaderAndFooter();
  initCountdown();
});

// === INSERT SHARED ELEMENTS ===
function insertHeaderAndFooter() {
  const headerContainer = document.getElementById('header');
  const footerContainer = document.getElementById('footer');
  if (headerContainer) headerContainer.innerHTML = headerHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;
}

// === LOADER EFFECT ===
window.addEventListener('load', function () {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
  }, 1500);
});

// === COUNTDOWN LOGIC ===
function initCountdown() {
  const countdownEl = document.querySelector('.countdown');
  if (!countdownEl) return;

  const targetDate = new Date(countdownTarget);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "";  ///New single out now!
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Logic to display different countdown formats
    if (days > 1) {
      countdownEl.textContent = `Next single in : ${days} days !`;
    } else if (days === 1) {
      countdownEl.textContent = `Next single in : ${days} days, ${hours}hours, ${minutes}minutes !`;
    } else if (hours > 0) {
      countdownEl.textContent = `Next single in : ${hours}hours, ${minutes}minutes !!!`;
    } else if (minutes > 5) {
      countdownEl.textContent = `Next single in : ${minutes}minutes, ${seconds}seconds !!!`;
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
