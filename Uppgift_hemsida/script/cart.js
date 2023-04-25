function DisplayCart() {  
  const cartJson = localStorage.getItem('shoppingCart');

  const shoppingCart = JSON.parse(cartJson);

  const cartItemsContainer = document.getElementById('cart-items');

  let totalCost = 0;


  shoppingCart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const productImg = document.createElement('img');
    productImg.src = item.img;
    productImg.alt = item.name;
    cartItem.appendChild(productImg);

    const productName = document.createElement('span');
    productName.textContent = item.name;
    cartItem.appendChild(productName);

    const productSize = document.createElement('span');
    productSize.textContent = ` | Size: ${item.size}`;
    cartItem.appendChild(productSize);

    const productCost = document.createElement('span');
    productCost.textContent = ` | Cost: ${item.cost}$ | `;
    cartItem.appendChild(productCost);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      const itemIndex = shoppingCart.indexOf(item);
      shoppingCart.splice(itemIndex, 1);
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
      cartItem.remove();
      totalCost -= parseFloat(item.cost);
      cartTotal.textContent = `Total: $${totalCost}`;
    });
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);

    totalCost += parseFloat(item.cost);
  });

  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `Total: $${totalCost}`;
}

DisplayCart();

