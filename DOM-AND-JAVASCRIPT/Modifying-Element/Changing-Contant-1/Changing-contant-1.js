// textContent: Sets or gets the text content of an element, treating the content as plain text.
// innerHTML: Sets or gets the HTML content of an element, allowing HTML markup.

const myDivs = document.getElementsByTagName("div");

// Loop through the HTMLCollection and set textContent for each div
for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].textContent = "New Text Content";
}

const x = document.getElementById("final")

// Using textContent
x.textContent = "New Text Content";

// Using innerHTML
x.innerHTML = "<h2>Emphasized</h2> Text";

const toggleImageButton = document.getElementById("toggleImageButton");
const img = document.getElementById("myImage");

toggleImageButton.addEventListener("click", function () {
    if (img.style.display === "none") {
        img.style.display = "block"
        toggleImageButton.innerHTML = " Hide Image ";

    } else {
        img.style.display = "none";
        toggleImageButton.innerHTML = " Show Image ";

    }
});


const myImage = document.getElementById("myImage");

const changeImageButton = document.getElementById("changeImageButton");

changeImageButton.addEventListener("click", function () {
    myImage.setAttribute("src", "image2.jpg");
    myImage.setAttribute("alt", "Updated Image");
});
