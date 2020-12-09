// navbar menu

let butt = document.querySelector(".check-i"),

mynavlink = document.querySelector(".nav-bar ul"),

icon = document.querySelector(".check-i i");



butt.onclick = function() {

    mynavlink.classList.toggle("open");
    
    if (mynavlink.classList.contains("open")) {
        icon.classList.remove("fa-list")
        icon.classList.add("fa-times")
    } else {
        icon.classList.add("fa-list")
        icon.classList.remove("fa-times")
    }
};

let likesButt = document.querySelector('aside .btt-1'),
likesIcon = document.querySelector("aside .btt-1 i"),
likesSpan = document.querySelector("aside .btt-1 span");

likesButt.onclick = function() {
    if (likesIcon.classList.contains("fas")){

        likesIcon.classList.remove("fas")
        likesIcon.classList.add("far")
        likesSpan.textContent = "485 likes"

    } else {
        likesIcon.classList.add("fas")
        likesIcon.classList.remove("far")
        likesSpan.textContent = "486 likes"
    }
};