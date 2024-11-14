// Get references to the elements
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const message = document.getElementById("message");

// Event handler functions
function changeColor(event) {
    event.target.style.backgroundColor = "lightblue";
}

function showMessage() {
    message.style.display = "block";
}

function hideMessage() {
    message.style.display = "none";
}

function hideButton(event) {
    event.target.style.display = "none";
}

// Add event listeners to buttons
btn1.addEventListener("click", changeColor);
btn1.addEventListener("mouseover", showMessage);
btn1.addEventListener("mouseout", hideMessage);
btn1.addEventListener("dblclick", hideButton);

btn2.addEventListener("click", changeColor);
btn2.addEventListener("mouseover", showMessage);
btn2.addEventListener("mouseout", hideMessage);
btn2.addEventListener("dblclick", hideButton);

btn3.addEventListener("click", changeColor);
btn3.addEventListener("mouseover", showMessage);
btn3.addEventListener("mouseout", hideMessage);
btn3.addEventListener("dblclick", hideButton);
