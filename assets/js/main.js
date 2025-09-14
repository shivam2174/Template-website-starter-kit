async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(`reusable/${file}`);
    el.innerHTML = await res.text();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header.html");
  loadComponent("navbar", "navbar.html");
  loadComponent("footer", "footer.html");
});