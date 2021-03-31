let upSlideAnimation = "upSlide 0.5s ease-in";
let leftSlideAnimation = "leftSlide 0.5s ease-in";
let rightSlideAnimation = "rightSlide 0.5s ease-in";

let uparrow = document.getElementById("uparrowId");
window.onscroll = function () {
    if (document.body.scrollTop >= 207 || document.documentElement.scrollTop >= 207) {
        let about_meText = document.getElementById("about_meText");
        for (let about = 0; about <= 2; about++) {
            about_meText.children[about].style.animation = upSlideAnimation;
            about_meText.children[about].style.animationDelay = about / 10 + "s";
        }
    }
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        uparrow.className = "uparrowOpen";
        uparrow.style.visibility = "visible";
        uparrow.style.opacity = "1";
    } else {
        uparrow.className = "uparrowClose";
        uparrow.style.opacity = "0";
    }
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        let divCardContainer = document.getElementById("divCardContainer");
        for (let card = 0; card <= 3; card++) {
            divCardContainer.children[card].style.animation = upSlideAnimation;
            divCardContainer.children[card].style.animationDelay = card / 10 + "s";
        }
    }
    if (document.body.scrollTop > 1550 || document.documentElement.scrollTop > 1550) {
        let skill_div = document.getElementsByClassName("skill_div");
        for (let skill = 0; skill <= 6; skill++) {
            skill_div[skill].style.animation = upSlideAnimation;
            skill_div[skill].style.animationDelay = skill / 10 + "s";
        }
    }
    if (document.body.scrollTop >= 2400 || document.documentElement.scrollTop >= 2400) {
        let social_linkId = document.getElementById("social_linkId")
        for (let i = 0; i <= 3; i++) {
            social_linkId.children[i].style.animation = leftSlideAnimation;
            social_linkId.children[i].style.animationDelay = i / 10 + "s";
        }
        document.getElementsByClassName("mailBtn")[0].style.animation = leftSlideAnimation;
        document.getElementsByClassName("mailBtn")[1].style.animation = rightSlideAnimation;
    }
};
uparrow.onclick = () => window.scrollTo(0, 0)

let abc = document.getElementById("skillSection");
if (document.location.href == "skillSection") {
}

window.onload = function () {
    let intro_text = document.getElementsByClassName("centre_positioning")[0];
    for (let a = 0; a <= 2; a++) {
        intro_text.children[a].className = "intro_text";
        intro_text.children[a].style.animationDelay = a / 10 + "s";
    }
}
let night_mode = document.getElementById("night_mode");
let bodyBgColor = "rgb(255, 255, 255)";
night_mode.addEventListener("click", function () {
    night_mode.style.border = "none";
    if (bodyBgColor == "rgb(255, 255, 255)") {
        bodyBgColor = " rgba(18, 19, 18, 0.452)";
        document.body.style.backgroundColor = bodyBgColor;
    } else {
        bodyBgColor = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = bodyBgColor;
    }
})