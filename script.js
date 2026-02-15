function donate() {
  alert("Donation demo: Supporting humanitarian aid in Palestine.");
}

function join() {
  alert("You have joined the movement.");
}

function login() {
  alert("Login successful!");
  return false;
}

document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for joining! 🇵🇸");
});

document.getElementById("donateForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your donation! ❤️");
});

function donate() {
  let amount = document.getElementById("donationAmount").value;
  let message = document.getElementById("donationMessage");

  if (amount === "" || amount <= 0) {
    message.style.color = "red";
    message.innerHTML = "Please enter a valid donation amount.";
  } else {
    message.style.color = "green";
    message.innerHTML = "Thank you ❤️ You have donated RM " + amount;
    document.getElementById("donationAmount").value = "";
  }
}

