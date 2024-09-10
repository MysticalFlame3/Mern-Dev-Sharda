const productForm = document.getElementById('productForm');
const priceGraph = document.getElementById('priceGraph');
const ratingGraph = document.getElementById('ratingGraph');

const products = [];

productForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productRating = document.getElementById('productRating').value;

  products.push({ productName, productPrice, productRating });

  updateGraphs();
});

function updateGraphs() {
  priceGraph.innerHTML = '';
  ratingGraph.innerHTML = '';

  products.forEach((product) => {
    const priceBar = document.createElement('div');
    priceBar.classList.add('bar');
    priceBar.style.width = `${product.productPrice * 20}px`;
    priceGraph.appendChild(priceBar);

    const ratingBar = document.createElement('div');
    ratingBar.classList.add('bar');
    ratingBar.style.width = `${product.productRating * 40}px`;
    ratingBar.style.backgroundColor = `hsl(${product.productRating * 50}, 100%, 50%)`;
    ratingGraph.appendChild(ratingBar);
  });
}