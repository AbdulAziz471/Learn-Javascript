const listItems = document.querySelectorAll(".menu li");

listItems.forEach(function(item) {
    item.style.color = "red";
});

const infoElements = document.querySelector(".container").getElementsByClassName("info");

for (let i = 0; i < infoElements.length; i++) {
    infoElements[i].style.backgroundColor = "lightgray";
}

