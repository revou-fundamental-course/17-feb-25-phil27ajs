// Validation Form

document.getElementById("send-button").addEventListener("click", function(event) {
    event.preventDefault();

    let valid = true;

    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let interestInput = document.getElementById("interest").value.trim();

    if (nameInput == "") {
        document.getElementById("error-name").innerText = "Name cannot be empty!";
        valid = false;
    }
    else {
        document.getElementById("error-name").innerText = "";
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput == "") {
        document.getElementById("error-email").innerText = "E-mail cannot be empty!";
        valid = false;
    }
    else if (!emailInput.match(emailPattern)) {
        document.getElementById("error-email").innerText = "E-mail format is not valid!";
        valid = false;
    }
    else {
        document.getElementById("error-email").innerText = "";
    }

    if (interestInput == "") {
        document.getElementById("error-interest").innerText = "Choose an interest!";
        valid = false;
    }
    else {
        document.getElementById("error-interest").innerText = "";
    }
    
    if (valid) {
        alert("Form is sent successfully!");
    }
})

// Banner Autoslide

let indexBanner = 0;

function nextBanner() {
    indexBanner += 2;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName("main-banner");

    if (indexBanner > (banner.length - 1)) {
        indexBanner = 0;
    }

    for (let i = 0; i < banner.length; i += 2) {
        banner[i].style.display = 'none';
        banner[i + 1].style.display = 'none';
    }
    banner[indexBanner].style.display = 'block';
    banner[indexBanner + 1].style.display = 'block';
}
setInterval(nextBanner, 3000)