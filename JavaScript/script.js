alert("This Is Shamil's Assignment work For Upcode Bootcamp");

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    console.log(products)
}
getProducts();