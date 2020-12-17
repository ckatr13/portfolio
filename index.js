function animateIn() {
    const e = document.getElementById("white-intro-tab");
    const h = document.getElementById("hello");
    const t = document.getElementById("top-box");
    const a = ["wipe1", "wipe2", "wipe3", "wipe4", "wipe5", "wipe6"];
    const time = [400, 100, 500, 300, 200, 0];

    function getElement(el) {
      return  el = document.getElementById(el);
    }

    function transform(el) {
        el.style.transform = "translateX(-100%)";
    }

    for (let i = 0; i < a.length; i++) {
        a[i] = getElement(a[i]);
        setTimeout(function() {transform(a[i])}, time[i])
    }

    if(e) {
        setTimeout(function() {
            if (window.innerWidth >= 1100) {
                e.style.transform = "translateY(-808px)";
            } else if (window.innerWidth >= 950 && window.innerWidth < 1100) {
                e.style.transform = "translateY(-708px)";
            } else {
                e.style.transform = "unset";
            }
        }, 750);
        
        setTimeout(function() {
            if (window.innerWidth < 950) {
                h.style.transform = "translateY(0px)";
                t.style.transform = "translateY(0px)";
            }
        }, 500);
    } 
}

function isElementInViewport(el) {
      var rect = el.getBoundingClientRect()
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    };

var scroll = window.requestAnimationFrame ||
    // IE Fallback
function(callback){ window.setTimeout(callback, 1000/60)};
    
function popIn() {
    const e = document.getElementsByClassName("pop-in");
    for (let i = 0; i < e.length; i++) {
        if (isElementInViewport(e[i])) {
            e[i].classList.add("show-pop-in");
            e[i].classList.remove("hide-pop-in");
        } else {
            e[i].classList.add("hide-pop-in");
            e[i].classList.remove("show-pop-in")
        };
    }
    scroll(popIn);
};

