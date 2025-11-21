function showSection(active) {
    document.querySelectorAll('.active').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(active).classList.add('active');
}

var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var vid = document.getElementById("video");
var wall = document.getElementById("wallpaper");
var screen = document.getElementById("screenshot")



opt1.addEventListener("click", function () {
    opt1.style.fontWeight = "900";
    opt2.style.fontWeight = "100";
    opt3.style.fontWeight = "100";
    vid.style.visibility = "visible";
    wall.style.visibility = "hidden";
    screen.style.visibility = "hidden";
})
opt2.addEventListener("click", function () {
    opt1.style.fontWeight = "100";
    opt2.style.fontWeight = "900";
    opt3.style.fontWeight = "100";
    vid.style.visibility = "hidden";
    wall.style.visibility = "visible";
    screen.style.visibility = "hidden";
})
opt3.addEventListener("click", function () {
    opt1.style.fontWeight = "100";
    opt2.style.fontWeight = "100";
    opt3.style.fontWeight = "900";
    vid.style.visibility = "hidden";
    wall.style.visibility = "hidden";
    screen.style.visibility = "visible";
})