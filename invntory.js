class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  const inventory = [];
  
  function addItem(inventory, item) {
    inventory.push(item);
  }
  
  function updateItem(inventory, id, newDetails) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      inventory[itemIndex] = { ...inventory[itemIndex], ...newDetails };
    }
  }
  
  function deleteItem(inventory, id) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      inventory.splice(itemIndex, 1);
    }
  }
  
  function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
  }
  
  function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
  }
  
  const item1 = new Item(1, "Apple", 10, 6.5);
  const item2 = new Item(2, "Banana", 20, 0.2);
  
  addItem(inventory, item1);
  addItem(inventory, item2);
  
  printInventory(inventory);
  
  updateItem(inventory, 1, { quantity: 15 });
  printInventory(inventory);
  
  deleteItem(inventory, 2);
  printInventory(inventory);