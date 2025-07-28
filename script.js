function openLink(url) {
  window.open(url, "_blank");
}

function filterSubjects(level) {
  const input = document.getElementById("search" + level).value.toLowerCase();
  const cards = document.getElementsByClassName("level-" + level);
  const semesterContents = document.querySelectorAll(
    `.semester-content[data-level="${level}"]`
  );

  // Show both first and second semester sections during search
  semesterContents.forEach(section => {
    section.style.display = "block";
  });

  // Filter subject cards
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Handle collapsible level sections
const collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Handle semester toggle buttons
const semesterToggles = document.getElementsByClassName("semester-toggle");
for (let i = 0; i < semesterToggles.length; i++) {
  semesterToggles[i].addEventListener("click", function () {
    const semesterContent = this.nextElementSibling;
    if (semesterContent.style.display === "block") {
      semesterContent.style.display = "none";
    } else {
      semesterContent.style.display = "block";
    }
  });
}
