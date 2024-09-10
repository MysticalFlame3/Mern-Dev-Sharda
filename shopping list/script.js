const itemNameInput = document.getElementById("itemName");
const itemQuantityInput = document.getElementById("itemQuantity");
const addItemBtn = document.getElementById("addItemBtn");
const shoppingList = document.getElementById("shoppingList");

addItemBtn.addEventListener("click", addItem);

function addItem() {
    const itemName = itemNameInput.value;
    const itemQuantity = itemQuantityInput.value;

    if (itemName && itemQuantity) {
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} (Quantity: ${itemQuantity})`;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editItem(listItem));

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeItem(listItem));

        listItem.appendChild(editBtn);
        listItem.appendChild(removeBtn);
        shoppingList.appendChild(listItem);

        itemNameInput.value = "";
        itemQuantityInput.value = "";
    } else {
        alert("Please enter both item name and quantity.");
    }
}

function editItem(listItem) {
    const itemText = listItem.textContent.split(" (")[0];
    const itemQuantity = listItem.textContent.match(/\d+/)[0];

    const newItemName = prompt("Enter the new item name:", itemText);
    const newQuantity = prompt("Enter the new quantity:", itemQuantity);

    if (newItemName && newQuantity) {
        listItem.textContent = `${newItemName} (Quantity: ${newQuantity})`;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editItem(listItem));

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeItem(listItem));

        listItem.appendChild(editBtn);
        listItem.appendChild(removeBtn);
    } else {
        alert("Please enter valid values for the item name and quantity.");
    }
}

function removeItem(listItem) {
    listItem.remove();
}
