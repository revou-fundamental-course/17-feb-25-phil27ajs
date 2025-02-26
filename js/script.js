let indexBanner = 0;

function increase() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName("main-banner");

    if (indexBanner > (banner.length - 1)) {
        indexBanner = 0;
    }
    
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }
    banner[indexBanner].style.display = 'block';
}

setInterval(increase, 3000)