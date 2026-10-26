const sections = document.querySelectorAll(".menu-section");
const buttons = document.querySelectorAll(".filter-btn");

function updateActiveButton() {
  let current = "pasteis";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 150) {
      current = section.id;
    }
  });

  buttons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", updateActiveButton);
updateActiveButton();
