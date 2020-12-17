function animateIn() {
    const e = document.getElementById("white-intro-tab");
    const w1 = document.getElementById("wipe1");
    const w2 = document.getElementById("wipe2");
    const w3 = document.getElementById("wipe3");
    const w4 = document.getElementById("wipe4");
    const w5 = document.getElementById("wipe5");
    const w6 = document.getElementById("wipe6");
    const transform = "translateX(-100%)";
    
    setTimeout(function() {
        w1.style.transform = transform;
    }, 400);
    setTimeout(function() {
        w2.style.transform = transform;
    }, 100);
    setTimeout(function() {
        w3.style.transform = transform;
    }, 500);
    setTimeout(function() {
        w4.style.transform = transform;
    }, 300);
    setTimeout(function() {
        w5.style.transform = transform;
    }, 200);
    setTimeout(function() {
        w6.style.transform = transform;
    }, 0);

    setTimeout(function() {
        if (window.innerWidth >= 1100) {
            e.style.transform = "translateY(-808px)";
        } else if (window.innerWidth >= 950 && window.innerWidth < 1100) {
            e.style.transform = "translateY(-708px)";
        } else {
            e.style.transform = "unset";
        }
    }, 750);
}

function animateInMobile() {
    const e = document.getElementById("hello");
    const t = document.getElementById("top-box");
    setTimeout(function() {
        if (window.innerWidth < 950) {
            e.style.transform = "translateY(0px)";
            t.style.transform = "translateY(0px)";
        }
    }, 500);
}