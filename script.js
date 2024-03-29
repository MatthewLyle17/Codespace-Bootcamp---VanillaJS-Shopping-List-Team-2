let counter = 0; // Initialises global counter variable to keep track of last item

function addItem(){
    counter += 1; // Increases counter by 1
    let text = ""; // Variable to store item name
    let input = document.querySelectorAll("input[type=text]"); // This stores the input from the text box 
    for (let i = 0; i < input.length; i++) 
    { // For each character in the user's input
        text += input[i].value; // Store that character in the text array
    }
    let quantity = '';
    let qinput = document.querySelectorAll("input[type=number]"); // qinput = quantity input
    for (let i = 0; i < qinput.length; i++) 
    { // For each character in the quantity input
        quantity += qinput[i].value; // Store that character in the quantity array
    }
    if (!text) // If there is no text
    {
        return false; // Return out the function
    }
    let ul = document.getElementById("list");
    let li = document.createElement("li"); // Creates list element
    let checkbox = document.createElement("input"); // Creates checkbox
    let remove = document.createElement("input");
    let name = document.createElement("label"); // Creates label for checkbox using item's name
    //
    // This stores html attributes for the checkbox
    checkbox.type = "checkbox"; 
    checkbox.name = "checkbox";
    checkbox.className = "checkbox"
    checkbox.id = counter+"a"; // Sets ID to counter + "a" to distinguish it from parent ID

    // This stores html attributes and on-click function for the delete button
    remove.type = "button";
    remove.value = "Remove item";
    remove.className = "remove";
    remove.addEventListener("click", function(){
        li.remove();
    })
    // This stores html attribute for the name label
    name.htmlFor = counter+"a";
    //
    name.appendChild(document.createTextNode(quantity+"x "+text)); // Appends text plus quantity to label
    li.appendChild(checkbox); // Appends checkbox to list item
    li.appendChild(name); // Appends label to list item
    li.appendChild(remove); // Appends remove button to list item
    li.setAttribute("id",counter); // Appends item counter to list item
    ul.appendChild(li); // Appends list item to unordered list
    document.getElementById("input").value = (""); // Updates text box
    document.getElementById("quantity").value = ("1"); // Updates quantity box
}

function removeItem(){
    let ul = document.getElementById("list");
    let li = document.getElementById(counter); // Gets (counter)th list element
    let bin = ul.removeChild(li); // Removes last item
    counter -= 1; // Decrements counter by 1
}