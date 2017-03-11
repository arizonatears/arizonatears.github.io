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

var titleText = [ "| Lolzy |", "| olzy |", "| lzy |", "| zy |", "| y |", "| |", "| y |", "| zy |", "| lzy |", "| olzy |", "| Lolzy |", "| Lolzy |", "| Lolz |", "| Lol |", "| Lo |", "| L |", "| |", "| L |", "| Lo |", "| Lol |", "| Lolz |", "| Lolzy |"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

