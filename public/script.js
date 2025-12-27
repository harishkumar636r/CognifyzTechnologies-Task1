// Dark/Light toggle
const btn = document.getElementById("toggleTheme");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Loader animation
const form = document.getElementById("userForm");
const loader = document.getElementById("loader");
form?.addEventListener("submit", () => {
  loader.style.display = "block";
});

// Floating particles
for (let i = 0; i < 100; i++) {
  const dot = document.createElement("div");
  dot.classList.add("particle");
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.animationDuration = (Math.random() * 10 + 5) + "s";
  document.body.appendChild(dot);
}
