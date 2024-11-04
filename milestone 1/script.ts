// Select all buttons with the class "toggleButton"
const buttons = document.querySelectorAll<HTMLButtonElement>(".toggleButton");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the parent div of the clicked button
    const parentDiv = button.parentElement as HTMLElement;

    // Toggle visibility of the parent div's content (excluding the button itself)
    Array.from(parentDiv.children).forEach((child) => {
      if (child !== button) {
        if (child instanceof HTMLElement) {
          child.style.display = child.style.display === "none" ? "block" : "none";
        }
      }
    });
  });
});
