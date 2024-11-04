// Select all buttons with the class "toggleButton"
var buttons = document.querySelectorAll(".toggleButton");
// Add a click event listener to each button
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Get the parent div of the clicked button
        var parentDiv = button.parentElement;
        // Toggle visibility of the parent div's content (excluding the button itself)
        Array.from(parentDiv.children).forEach(function (child) {
            if (child !== button) {
                if (child instanceof HTMLElement) {
                    child.style.display = child.style.display === "none" ? "block" : "none";
                }
            }
        });
    });
});
