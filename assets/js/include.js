async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  element.innerHTML = await response.text();
}

loadComponent("site-head", "/includes/head.html");
loadComponent("site-header", "/includes/header.html");
loadComponent("site-footer", "/includes/footer.html");
