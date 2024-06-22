alert("This Is Shamil's Assignment work For Upcode Bootcamp");

async function getAllProducts() {
    var productResponse = await fetch('https://fakestoreapi.com/products',{
        method:'GET'
    });
    var data = await productResponse.json();
    console.log(data);
}
getAllProducts();