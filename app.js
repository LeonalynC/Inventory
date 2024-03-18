// Gettting the checkbox element
const checkbox = document.getElementById('checkbox');

// Getting the tables section
const tablesSection = document.querySelector('.tablesSection');

// Array for storing inventory items
const inventoryItems = [];

// Function for checking if an item exists already
function checkIfExists(item, inventoryItems) {
    for (var i = 0; i < inventoryItems.length; i++) {
        if (item == inventoryItems[i]) {
            return true;
        }
    }
}

// Function for adding new item in the inventory
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting the item from the input field
    const item = document.getElementById('item').value;

    // Getting the quantity from the input field
    const quantity = document.getElementById('quantity').value;

    // We can't let an input field be empty
    if (item.length == 0 || quantity.length == 0) {
        alert("Fill out the form first");
    } else {
        // Check if item already exists
        if (checkIfExists(item, inventoryItems)) {
            alert('Item already taken');
        } else {
            // push to the inventoryItems list
            inventoryItems.push(item);
            console.log(inventoryItems)

            // create the table row element for storing items
            const trElement = document.createElement('tr');

            // create table data for storing item name
            const tdElementForItemName = document.createElement('td');

            // create table data for storing quantity 
            const tdElementForQty = document.createElement('td');
            tdElementForQty.className = 'quantity'; // Add class for quantity cells

            // setting the text content of the item name and quantity
            tdElementForItemName.textContent = item;
            tdElementForQty.textContent = quantity;

            // adding to the table data element to the table row
            trElement.appendChild(tdElementForItemName);
            trElement.appendChild(tdElementForQty);

            // adding table row element to the table
            document.querySelector('table').appendChild(trElement);
        }
    }
})

checkbox.addEventListener('change', function (e) {
    e.preventDefault();
    if (checkbox.checked == true) {
        tablesSection.style.display = "block";
    } else {
        tablesSection.style.display = "none";
    }
})

// Add event listener for quantity modification
document.querySelector('table').addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('quantity')) {
        const newQuantity = prompt('Enter new quantity:');
        if (newQuantity !== null) {
            const tdQuantity = target;
            tdQuantity.textContent = newQuantity;
        }
    }
});
