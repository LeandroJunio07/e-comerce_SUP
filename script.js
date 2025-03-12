let cart = [];
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const checkoutButton = document.getElementById('checkoutButton');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('R$ ', '').replace(',', '.'));

        const product = { id: productId, name: productName, price: productPrice };

        cart.push(product);
        updateCart();
    });
});

cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
    cartButton.textContent = `Carrinho (${cart.length})`;
}