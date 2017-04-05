if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 500);

}

var x = 0;

var titleText = [ "arizona", "tears", "$$$$", "1 tapp laff", "$$$$", "arizona", "", "tears", "1 tap laff", "$$$$", "arizona", "tears", "1 tapp laff", "$$$$"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

