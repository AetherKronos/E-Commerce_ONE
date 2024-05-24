// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//Script for upload products
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;

    // Validate image URL
    if (isValidImageUrl(productImage)) {
        addProduct(productName, productPrice, productImage);
        document.getElementById('product-form').reset();
    } else {
        alert('Por favor, ingresa una URL válida para la imagen.');
    }
});

function addProduct(name, price, imageUrl) {
    const productList = document.getElementById('product-list');
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
        <div class="pro">
            <img src="${imageUrl}" alt="${name}">
            <div class="des">
                <span>Fan de Star Wars</span>
                <h5>${name}</h5>
                <h4>$${price}</h4>
            </div>
            <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        </div>
    `;
    
    productList.appendChild(productCard);
    
    productCard.querySelector('.delete-btn').addEventListener('click', function() {
        productCard.remove();
    });
}

function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif)$/i.test(url);
}
