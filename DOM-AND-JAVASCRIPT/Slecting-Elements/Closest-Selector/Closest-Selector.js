const findButton = document.getElementById("findButton");

findButton.addEventListener("click", function() {
    const innerDiv = this.closest(".outer");
    if (innerDiv) {
        innerDiv.style.backgroundColor = "lightblue";
    }
});
