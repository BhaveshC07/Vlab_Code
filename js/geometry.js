var Chemistry;
(function (Chemistry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Chemistry.Point = Point;
    class Geometry {
        constructor() {
            this._dragable = true;
            this.move_x = false;
            this.revolve = false;
        }
        set stpt(pt) {
            if (this._dragable) {
                this._stpt = pt;
            }
        }
        get stpt() {
            return (this._stpt);
        }
        get draggable() {
            return (this._dragable);
        }
        draw() { }
        calculate() { }
        get area() {
            return (0);
        }
        isinside(Point) {
            let dx = (this._stpt.x - Point.x) * lscale;
            let dy = (this._stpt.y - Point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r < 50) {
                return (true);
            }
            else {
                return (false);
            }
        }
        lock() {
            this._dragable = false;
        }
        triangle_area(pt1, pt2, pt3) {
            return (0);
        }
        change_value() { }
        set_connection(geo) { }
    }
    Chemistry.Geometry = Geometry;
    class Magnet1 extends Geometry {
        constructor(image1, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            // vx: number;
            this.stang = 0;
            this.img1 = image1;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img1, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 830) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet1 = Magnet1;
    class Magnet2 extends Geometry {
        constructor(image, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            //vx: number;
            this.stang = 0;
            this.img2 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            //  this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img2, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 1089) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet2 = Magnet2;
    class Magnet3 extends Geometry {
        constructor(image, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            //vx: number;
            this.stang = 0;
            this.img3 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img3, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 1089) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet3 = Magnet3;
    class Magnet4 extends Geometry {
        constructor(image, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            //vx: number;
            this.stang = 0;
            this.img4 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img4, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 830) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet4 = Magnet4;
    class Magnet5 extends Geometry {
        constructor(image, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            //vx: number;
            this.stang = 0;
            this.img5 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img5, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 1780) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet5 = Magnet5;
    class Magnet6 extends Geometry {
        constructor(image1, stpt, canvas) {
            super();
            this.dx = 264;
            this.dy = 61;
            //vx: number;
            this.stang = 0;
            this.img6 = image1;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw() {
            if (this.move_x) {
                this.motion_x();
            }
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.scale(1, -1);
            if (this.revolve) {
                this.rotate();
            }
            this.context.drawImage(this.img6, -this.dx / 2 * lscale, -this.dy / 2 * lscale, this.dx * lscale, this.dy * lscale);
            this.context.restore();
        }
        rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }
        }
        isinside(Point) {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);
                }
            }
            return (false);
        }
        motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 135) {
                this.move_x = false;
            }
        }
    }
    Chemistry.Magnet6 = Magnet6;
})(Chemistry || (Chemistry = {}));
//# sourceMappingURL=geometry.js.map