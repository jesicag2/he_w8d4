// Homework

// Part 2: Form Manipulation with JavaScript
    // You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to 
    // dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.

// Task 1: Create an HTML form with input fields for the user's name, email, and message.
// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
// Task 3: Implement form validation to ensure that all required fields are filled before submission.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        console.log(formData);
    });
});

