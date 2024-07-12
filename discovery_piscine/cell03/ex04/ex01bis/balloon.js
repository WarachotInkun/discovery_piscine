let x = 0;
let colors = ["red", "green", "blue"];
let reverseColors = ["blue", "green", "red"];

function balloon() {
    let $box = $(".box");
    let randomColor = colors[x];
    $box.css("background-color", randomColor);
    let currentWidth = $box.width();
    let currentHeight = $box.height();
    let newWidth = currentWidth + 10;
    let newHeight = currentHeight + 10;

    if (currentWidth >= 420) {
        $box.width(200);
        $box.height(200);
    } else {
        $box.width(newWidth);
        $box.height(newHeight);
    }
    
    x++;
    if (x > 2) {
        x = 0;
    }
}

function shrinkBalloon() {
    let $box = $(".box");
    let currentWidth = $box.width();
    let currentHeight = $box.height();
    let newWidth = Math.max(200, currentWidth - 5);
    let newHeight = Math.max(200, currentHeight - 5);

    if (newWidth === 200 && newHeight === 200) {
        $box.width(200);
        $box.height(200);
        $box.css("background-color", "red");
    } else {
        $box.width(newWidth);
        $box.height(newHeight);
    }

    x--;
    if (x < 0) {
        x = 2;
    }
    let randomColor = reverseColors[x];
    $box.css("background-color", randomColor);
}

$(document).ready(function() {
    $(".box").on("click", balloon);
    $(".box").on("mouseleave", shrinkBalloon);
});
