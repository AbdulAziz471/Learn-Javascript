const toggleButton = document.getElementById("toggleButton");
const myCheckbox = document.getElementById("myCheckbox");

toggleButton.addEventListener("click", function() {
    if (myCheckbox.hasAttribute("disabled")) {
        myCheckbox.removeAttribute("disabled");
    } else {
        myCheckbox.setAttribute("disabled", "");
    }
});
