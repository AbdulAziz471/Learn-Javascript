
const addItemButton = document.getElementById("addItemButton");
const myList = document.getElementById("myList");
let countItem = 1;

addItemButton.addEventListener("click", function() {
    // Create a new list item element
    const newItem = document.createElement("li");
    
    // Set the text content of the new item
    newItem.textContent = "New Item " + countItem;
    

    countItem++;
    
    // Append the new item to the list
    myList.appendChild(newItem);
});


