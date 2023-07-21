const canvas = document.getElementById("canvas_activity1");
const context = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
var lscale;
var scene = new Scene();
var scene1 = new Scene();
window.onload = function () {
    //canvas size
    canvas_size();
    //canvas mapping
    canvas_mapping();
    //draw border or rectangle
    scene.draw();
    //activity1();
    //canvas_border();
    //draw all scene ->canvas and drawing the canvas
    dashboard();
    dashboard_button();
    //fixed_container();
    //dear all the input elements 
};
window.onresize = function () {
    //canvas size
    canvas_size();
    //canvas mapping
    canvas_mapping();
    //draw border or rectangle
    scene.draw();
    //canvas_border();
    //draw all scene ->canvas and drawing the canvas
    dashboard();
    dashboard_button();
    //dear all the input elements 
};
function canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.65;
    lscale = canvas.width / 1920.0;
}
function canvas_border() {
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 4;
    context.stroke();
}
function canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
const m1 = document.getElementById("m1");
m1.style.left = `${rect.x + 10}px`;
m1.style.top = `${rect.y + 10}px`;
canvas.addEventListener("mousemove", mousemove);
canvas.addEventListener('click', mouseclick);
canvas.addEventListener("mousedown", mousedown);
canvas.addEventListener("mouseup", mouseup);
canvas.addEventListener("touchmove", touchmove);
var drag = false;
function mousemove(e) {
    if (drag && geo == "Drag") {
        let x = Math.round((e.clientX - rect.x) / lscale);
        let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
        m1.value = `${x},${y}`;
        //drag_geo(x, y);
    }
}
function mouseclick(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    m1.value = `${x},${y}`;
    if (geo == "Magnet2") {
        draw_magnet2(x, y);
    }
    else if (geo == "Magnet1") {
        draw_magnet1(x, y);
    }
    else if (geo == "Magnet3") {
        draw_magnet3(x, y);
    }
    else if (geo == "Magnet4") {
        draw_magnet4(x, y);
    }
    else if (geo == "Magnet5") {
        draw_magnet5(x, y);
    }
    else if (geo == "Magnet6") {
        draw_magnet6(x, y);
    }
    else if (geo == "Move") {
        move_geo(x, y);
    }
}
function mousedown(e) {
    // let x=Math.round((e.clientX-rect.x)/lscale);
    // let y=Math.round((canvas.height-(e.clientY-rect.y))/lscale);
    // m1.value=`${x},${y}`;
    drag = true;
}
function mouseup(e) {
    //   let x=Math.round((e.clientX-rect.x)/lscale);
    //   let y=Math.round((canvas.height-(e.clientY-rect.y))/lscale);
    //   m1.value=`${x},${y}`;
    drag = false;
}
function touchmove(e) {
    if (drag && geo == "Drag") {
        let x = Math.round((e.touches[0].clientX - rect.x) / lscale);
        let y = Math.round((canvas.height - (e.touches[0].clientY - rect.y)) / lscale);
        m1.value = `${x},${y}`;
        // drag_geo(x, y);
    }
}
//# sourceMappingURL=canvas_size.js.map