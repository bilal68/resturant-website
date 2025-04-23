function loadComponent(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "components/header/header.html");
    // loadComponent("footer", "components/footer/footer.html");
  });
  