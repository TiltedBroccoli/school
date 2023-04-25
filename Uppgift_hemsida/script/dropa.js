const selects = document.querySelectorAll('.product select');

selects.forEach((select) => {
  const product = select.parentNode;

  const button = product.querySelector('button');

  button.disabled = true;

  select.addEventListener('change', () => {
    if (select.value !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

let shoppingCart = [];

function addToCart(productId) {
  const productEl = document.querySelector(`#${productId}`);
  const productName = productEl.querySelector('h3').textContent;
  const productImg = productEl.querySelector('img').getAttribute('src');
  const productSize = productEl.querySelector('select').value;
  const productCost = productEl.querySelector('p').textContent;
  
  const cartItem = {
    name: productName,
    img: productImg,
    size: productSize,
    cost: productCost
  };
  
  shoppingCart.push(cartItem);

  const cartJson = JSON.stringify(shoppingCart);

  localStorage.setItem('shoppingCart', cartJson);
}









