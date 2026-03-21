// Show info when marker is clicked
function showInfo(text) {
  const box = document.getElementById("infoBox");
  if (box) {
    box.innerText = text;
  }
}

// Search functionality
function searchLocation() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const value = input.value.toLowerCase();

  if (value.includes("cs")) {
    showInfo("Computer Science Department – Floor 1");
  } else if (value.includes("admin")) {
    showInfo("Administration Block – Ground Floor");
  } else if (value.includes("library")) {
    showInfo("Central Library");
  } else {
    showInfo("Department not found");
  }
}

// Allow Enter key to trigger search
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchLocation();
    }
  });
}