// DARK MODE

const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});


// PROJECT FILTER

const filterButtons =
document.querySelectorAll(".filter-btn");

const projectCards =
document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter =
    button.getAttribute("data-filter");

    projectCards.forEach(card => {

      if (
        filter === "all" ||
        card.classList.contains(filter)
      ) {
        card.style.display = "block";
      }

      else {
        card.style.display = "none";
      }

    });

  });

});