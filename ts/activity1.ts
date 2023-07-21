const div_dashboard: HTMLDivElement = <HTMLDivElement>document.getElementById("dashboard");
const div_panel: HTMLDivElement = <HTMLDivElement>document.getElementById("panel");
function activity1() {
}

function dashboard() {
    div_dashboard.style.left = `${canvas.width - 185}px`
    div_dashboard.style.top = `${rect.y + 10}px`
    // div_panel.style.left = `${canvas.width - 185}px`
    // div_panel.style.top = `${rect.y + 35}px`
    // div_panel.style.width = "180px";
}

function dashboard_button() {
    div_dashboard.innerHTML = `<input type"button" value="⚫𝐀𝐓𝐓𝐑𝐀𝐂𝐓𝐈𝐎𝐍" onclick="magnet1_click54();" style="width:170px">`;
    div_dashboard.innerHTML += `<input type"button" value="S-N" onclick="magnet1_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value="S-N-1" onclick="magnet3_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value="N-S" onclick="magnet2_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value="N-S-1" onclick="magnet4_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value=" 𝑨𝑻𝑻𝑹𝑨𝑪𝑻-->" onclick="move_magnet1_x();" style="width:85px">`;
    div_dashboard.innerHTML += `<input type"button" value="⚫𝐑𝐄𝐏𝐔𝐋𝐒𝐈𝐎𝐍" onclick="magnet1_click54();" style="width:170px">`;
    div_dashboard.innerHTML += `<input type"button" value="S-N" onclick="magnet5_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value="N-S" onclick="magnet6_click();" style="width:80px">`;
    div_dashboard.innerHTML += `<input type"button" value=" 𝑹𝑬𝑷𝑬𝑳-->" onclick="move_magnet2_x();" style="width:70px">`;
    div_dashboard.innerHTML += `<input type"button" value="::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::" onclick="magnet1_click54();" style="width:170px">`;
}

function draw_polygon() {
    var stptx = <HTMLInputElement>document.getElementById("stptx");
    var stpty = <HTMLInputElement>document.getElementById("stpty");
    var l = <HTMLInputElement>document.getElementById("l");
    var n = <HTMLInputElement>document.getElementById("n");
    var name = <HTMLInputElement>document.getElementById("name");
    var stang = <HTMLInputElement>document.getElementById("stang");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
}

function area_geometry() {
    var name = <HTMLInputElement>document.getElementById("name");
    var area = <HTMLInputElement>document.getElementById("area");
    area.value = `${scene.area(name.value)}`;

}
var img1 = new Image();
img1.src = "./images/S-N.png";

var img2 = new Image();
img2.src = "./images/N-S.png";



var img3 = new Image();
img3.src = "./images/S-N.png";

var img4 = new Image();
img4.src = "./images/N-S.png";

var img5 = new Image();
img5.src = "./images/S-N.png";

var img6 = new Image();
img6.src = "./images/N-S.png";

function test_mapping() {
    context.fillStyle = "green";
    context.fillRect(50, 50, 100, 50);
    context.save();
    context.translate(200, 200);
    context.rotate(45 * Math.PI / 180);
    context.fillRect(50, 50, 100, 50);
    context.restore();

}

function test_transformation() {
    context.fillStyle = "green";
    context.fillRect(200, 200, 100, 50);
    context.save();
    context.translate(200, 200);
    context.rotate(45 * Math.PI / 180);
    context.translate(-200, -200);
    context.fillRect(200, 200, 100, 50);
    context.restore();

}
function draw_magnet1(x: number, y: number) {
    let magnet1 = new Chemistry.Magnet1(img1, new Chemistry.Point(135, 360), canvas);
    magnet1.name = "magnet1";
    scene.add(magnet1);
}
function draw_magnet2(x: number, y: number) {
    let magnet2 = new Chemistry.Magnet2(img2, new Chemistry.Point(1770, 440), canvas);
    magnet2.name = "magnet1";
    scene.add(magnet2);
}

function draw_magnet3(x: number, y: number) {
    let magnet3 = new Chemistry.Magnet3(img3, new Chemistry.Point(1770, 360), canvas);
    magnet3.name = "magnet1";
    scene.add(magnet3);
}
function draw_magnet4(x: number, y: number) {
    let magnet4 = new Chemistry.Magnet4(img4, new Chemistry.Point(130, 440), canvas);
    magnet4.name = "magnet1";
    scene.add(magnet4);
}
function draw_magnet5(x: number, y: number) {
    let magnet5 = new Chemistry.Magnet5(img5, new Chemistry.Point(1089, 200), canvas);
    magnet5.name = "magnet2";
    scene.add(magnet5);
}
function draw_magnet6(x: number, y: number) {
    let magnet6 = new Chemistry.Magnet6(img6, new Chemistry.Point(825, 200), canvas);
    magnet6.name = "magnet2";
    scene.add(magnet6);
}

var anim: boolean = false;
var timer1;
function move_magnet2_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == 'magnet2') {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deffered_frame, 100);
}
function deffered_frame() {
    anim = true;
    redraw_scene();
    clearInterval(timer1);
}
function move_magnet1_x() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == 'magnet1') {
            scene.container[i].geo.move_x = true;
        }
    }
    anim = false;
    timer1 = setInterval(deffered_frame2, 100);
}
function deffered_frame2() {
    anim = true;
    redraw_scene();
    clearInterval(timer1);
}
function move_geo(x: number, y: number) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            scene.container[i].geo.move_x = true;
            break;
        }
    }
    redraw_scene();
}

function assemble(obj: Chemistry.Geometry) {
    for (let i = 0; i < scene1.container.length; i++) {
        if (scene1.container[i].geo.isinside(new Chemistry.Point(obj.stpt.x, obj.stpt.y)) && scene1.container[i].geo.name == obj.name) {
            obj.stpt = scene1.container[i].geo.stpt;
            obj.lock();
            break;
        }
    }
}
var geo: string;

function magnet2_click() {
    geo = "Magnet2";
}
function magnet1_click() {
    geo = "Magnet1";
}
function magnet3_click() {
    geo = "Magnet3";
}
function magnet4_click() {
    geo = "Magnet4";
}
function magnet5_click() {
    geo = "Magnet5";
}
function magnet6_click() {
    geo = "Magnet6";
}

function redraw_scene() {
    scene.draw();
    window.requestAnimationFrame(redraw_scene);
}
