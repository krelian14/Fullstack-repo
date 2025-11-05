//Loading Wrapper Section//

 window.addEventListener("load", () => {
      const loader = document.getElementById("loading-wrapper");
      loader.classList.add("hidden");
    });

//=====//

// Smooth Scroll With proper Sectioning //
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 300); 
    }
  }
});

//=====//

// Navbar toggler for mobile view //
document.addEventListener("DOMContentLoaded", function() {
  const toggler = document.querySelector("#navbar-toggler");
  const navMenu = document.querySelector("#navbarColor01");

  // Toggler for mobile collapse
  if (toggler && navMenu) {
    toggler.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // ===== Dropdown behavior =====
  const dropdownToggles = document.querySelectorAll(".nav-item.dropdown > .nav-link.dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    const dropdownMenu = toggle.nextElementSibling;

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns first
      document.querySelectorAll(".dropdown-menu.show").forEach(openMenu => {
        if (openMenu !== dropdownMenu) openMenu.classList.remove("show");
      });

      dropdownMenu.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
      if (!menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });
});

//======//