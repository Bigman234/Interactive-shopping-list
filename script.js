document.addEventListener('DOMContentLoaded', function() {
    // Initialize shopping list array
    let shoppingList = [];

    // Select elements
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const shoppingListContainer = document.getElementById('shoppingList');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');

    // Function to render shopping list
    function renderShoppingList() {
        shoppingListContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.completed) {
                li.classList.add('completed');
            }
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.completed;
            checkbox.addEventListener('change', function() {
                item.completed = this.checked;
                renderShoppingList();
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                shoppingList.splice(index, 1);
                renderShoppingList();
            });
            li.appendChild(checkbox);
            li.appendChild(deleteBtn);
            shoppingListContainer.appendChild(li);
        });
    }

    // Event listener for Add button
    addItemBtn.addEventListener('click', function() {
        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            shoppingList.push({ name: itemName, completed: false });
            renderShoppingList();
            itemInput.value = '';
        }
    });

    // Event listener for Mark Purchased button
    markPurchasedBtn.addEventListener('click', function() {
        shoppingList.forEach(item => {
            item.completed = true;
        });
        renderShoppingList();
    });

    // Event listener for Clear List button
    clearListBtn.addEventListener('click', function() {
        shoppingList = [];
        renderShoppingList();
    });

});