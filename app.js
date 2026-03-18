// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Typing effect
const typingText = document.getElementById("typing-text");
const phrases = [
  "Frontend Developer 💻",
  "Creative Thinker 🎨",
  "Tech Explorer 🚀"
];
let i = 0, j = 0, currentPhrase = "", isDeleting = false;

function type() {
  if (i < phrases.length) {
    currentPhrase = phrases[i];
    typingText.textContent = isDeleting
      ? currentPhrase.substring(0, j--)
      : currentPhrase.substring(0, j++);

    if (!isDeleting && j === currentPhrase.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(type, 400);
    } else {
      setTimeout(type, isDeleting ? 80 : 100);
    }
  }
}
type();

// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
