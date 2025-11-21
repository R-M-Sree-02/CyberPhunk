var img = document.getElementById("image-1");
var but1 = document.getElementById("button-1");
var but2 = document.getElementById("button-2");
var but3 = document.getElementById("button-3");
var mes1 = document.getElementById("message1");
var mes2 = document.getElementById("message2");
var mes3 = document.getElementById("message3");

var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var vid = document.getElementById("video");
var wall = document.getElementById("wallpaper");
var screen = document.getElementById("screenshot")

but1.addEventListener("click", function () {
    img.src = "Images/objective-1.jpg";
    but1.style.color = "yellow"
    but1.style.borderBottom = "3px solid yellow";
    but3.style.color = "white"
    but3.style.borderBottom = "3px solid white";
    but2.style.color = "white"
    but2.style.borderBottom = "3px solid white";
    mes1.style.visibility = "visible";
    mes2.style.visibility = "hidden";
    mes3.style.visibility = "hidden";
})
but2.addEventListener("click", function () {
    img.src = "Images/location-1.jpg";
    but2.style.color = "yellow"
    but2.style.borderBottom = "3px solid yellow";
    but1.style.color = "white"
    but1.style.borderBottom = "3px solid white";
    but3.style.color = "white"
    but3.style.borderBottom = "3px solid white";
    mes1.style.visibility = "hidden";
    mes2.style.visibility = "visible";
    mes3.style.visibility = "hidden";
})
but3.addEventListener("click", function () {
    img.src = "Images/abilities-1.jpg";
    but3.style.color = "yellow"
    but3.style.borderBottom = "3px solid yellow";
    but1.style.color = "white"
    but1.style.borderBottom = "3px solid white";
    but2.style.color = "white"
    but2.style.borderBottom = "3px solid white";
    mes1.style.visibility = "hidden";
    mes2.style.visibility = "hidden";
    mes3.style.visibility = "visible";
})

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



function showSection(active) {
    document.querySelectorAll('.active').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(active).classList.add('active');
}