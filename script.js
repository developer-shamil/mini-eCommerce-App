alert("This Is Shamil's Assignment work For Upcode Bootcamp");

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    let ProductListData = '';

    for(let p of products) {
        const ProductContainer = ProductCard(p)
        ProductListData = ProductListData + ProductContainer;
    }
    const ProductContainer = document.getElementById('ProductListContainer');
    ProductContainer.innerHTML = ProductListData;
}
getProducts();

function ProductCard (p) {
    return `<div class="card mx-2 my-2" style="width: 18rem;">
  <img height="250px" style="object-fit: contain;" src="${p.image}" class="card-img-top my-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">₹${p.price}</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>`
}