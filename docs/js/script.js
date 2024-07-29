// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".to-section");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Creating the intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Get all elements with the class ".hidden"
const hiddenELemnets = document.querySelectorAll(".hidden");
hiddenELemnets.forEach((el) => observer.observe(el));

//
// Eventlistener to handle displaying projects based on category
document.addEventListener("DOMContentLoaded", function () {
  const allButton = document.getElementById("all");
  const webAppsButton = document.getElementById("web-apps");
  const logoBrandingButton = document.getElementById("logo-branding");
  const projectContainer = document.getElementById("project-container");
  const projects = document.querySelectorAll(".project");

  allButton.addEventListener("click", () => {
    projects.forEach((project) => {
      project.classList.remove("hide-projects");
    });
  });

  webAppsButton.addEventListener("click", () => {
    projects.forEach((project) => {
      if (project.dataset.type === "web-app") {
        project.classList.remove("hide-projects");
      } else {
        project.classList.add("hide-projects");
      }
    });
  });

  logoBrandingButton.addEventListener("click", () => {
    projects.forEach((project) => {
      if (project.dataset.type === "logo-branding") {
        project.classList.remove("hide-projects");
      } else {
        project.classList.add("hide-projects");
      }
    });
  });
});