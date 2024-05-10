// Homework

// Part 3: Styling with JavaScript
    // You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML elements that change 
    // their appearance in response to user actions or events triggered by JavaScript functions.

// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.
    // <div id="box" onclick="changeColor()">Click me to change color</div>
// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

function changeColor() {
    var box = document.getElementById("box");
    box.style.backgroundColor = "#aaa5ba";
}

function handleClick() {
    alert("Congrats, you won!")
}

function handleMouseOver() {
    alert("Hello!")
}

