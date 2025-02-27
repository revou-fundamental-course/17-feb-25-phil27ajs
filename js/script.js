
function validateForm() {
    let nameInput = document.getElementById("name").innerHTML;
    
    if (nameInput == "") {
        alert("Name cannot be empty");
    }
}

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