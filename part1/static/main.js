// Homework

// Part 1: Document Manipulation with JavaScript
    // You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize JavaScript 
    // to manipulate the document structure and content using arrays and objects.

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.
// Task 2: Write a function to display the product information on the webpage dynamically.
// Task 3: Implement an event listener to trigger the display of products when the page loads.


let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;

        productList.appendChild(productElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});



