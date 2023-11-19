const url = 'https://dummyjson.com/products';

displayData();

async function displayData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
