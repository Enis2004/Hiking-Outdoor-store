let products = [
    { name: "Jacket", price: 85 },
    { name: "Waistcoat", price: 40 },
    { name: "Warm", price: 61 }
];

function renderTable() {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = ''; 

    products.forEach((product, index) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        const priceCell = document.createElement("td");
        priceCell.textContent = `$${product.price}`;
        const actionsCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editProduct(index);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteProduct(index);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    });
}

function editProduct(index) {
    const newName = prompt("Enter new name for the product:", products[index].name);
    const newPrice = prompt("Enter new price for the product:", products[index].price);

    if (newName && newPrice && !isNaN(newPrice)) {
        products[index].name = newName;
        products[index].price = parseFloat(newPrice);
        renderTable(); 
    } else {
        alert("Invalid input. Please enter valid name and price.");
    }
}

function deleteProduct(index) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (confirmation) {
        products.splice(index, 1);
        renderTable(); 
    }
}

renderTable();
