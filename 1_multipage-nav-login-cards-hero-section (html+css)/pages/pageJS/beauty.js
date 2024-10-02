const beautyProducts = [
    { src: 'images/beauty1.jpg', title: 'Beauty Product 1', description: 'Lorem ipsum dolor sit amet.' },
    { src: 'images/beauty2.jpg', title: 'Beauty Product 2', description: 'Lorem ipsum dolor sit amet.' },
    { src: 'images/beauty3.jpg', title: 'Beauty Product 3', description: 'Lorem ipsum dolor sit amet.' },
    { src: 'images/beauty4.jpg', title: 'Beauty Product 4', description: 'Lorem ipsum dolor sit amet.' }
];

// Loop through the array and create HTML for each product using jQuery
$(document).ready(function() {


   // Could be GET or POST/PUT/PATCH/DELETE
fetch('//dummyjson.com/products')
.then(res => res.json())
.then(data=>data.products)
.then(value=>console.log(value)


);

/* { status: 'ok', method: 'GET' } */

    const $beautyWrapper = $('#beautyWrapper');

    beautyProducts.forEach(function(product) {
        const productHTML = `
            <div>
                <img src="${product.src}" alt="${product.title}" />
                <div>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                </div>
            </div>
        `;
        $beautyWrapper.append(productHTML);
    });
});