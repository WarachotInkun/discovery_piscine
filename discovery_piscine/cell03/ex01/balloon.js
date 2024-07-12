let x = 0;
function balloon() {
    let box = document.querySelector(".box");
    let colors = ["red", "green", "blue"];
    let randomColor = colors[x];
    box.style.backgroundColor = randomColor;

    let computedStyle = window.getComputedStyle(box);
    let currentWidth = parseInt(computedStyle.getPropertyValue('width'));
    let currentHeight = parseInt(computedStyle.getPropertyValue('height'));

    let new_width = currentWidth + 10 + 'px';
    let new_height = currentHeight + 10 + 'px';
    if (currentWidth >= 420) { 
        box.style.width = '100px';
        box.style.height = '100px';
    } else {
        box.style.width = new_width;
        box.style.height = new_height;
    }
    x++;
    if(x>2){
        x=0;
    }
}