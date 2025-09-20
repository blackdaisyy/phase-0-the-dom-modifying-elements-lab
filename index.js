// 1. Remove the existing main element
const main = document.getElementById("main");
main.remove();

// 2. Create a new h1 element
const newHeader = document.createElement("h1");

// 3. Set id
newHeader.id = "victory";

// 4. Set text content
newHeader.textContent = "Ada Lovelace is the champion"; // Replace with your name

// 5. Append to the DOM
document.body.append(newHeader);
// Write your code here!
