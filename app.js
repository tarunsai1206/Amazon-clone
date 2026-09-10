```javascript
// Get elements from the HTML page
const heading = document.getElementById("heading");
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Change the heading
heading.textContent = "Welcome to My Website!";

// Add a click event to the button
button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
    message.style.color = "green";
});
```
