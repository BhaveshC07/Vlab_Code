namespace Chemistry {
    export class Point {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    export class Geometry {
        name: string;
        color: string;
        private _stpt: Point;
        private _dragable: boolean = true;
        value: number;
        move_x: boolean = false;
        revolve: boolean = false;
        constructor() { }
        set stpt(pt: Point) {
            if (this._dragable) {
                this._stpt = pt;
            }
        }
        get stpt() {
            return (this._stpt);
        }
        get draggable(): boolean {
            return (this._dragable);
        }
        draw() { }
        protected calculate() { }
        get area(): number {
            return (0);
        }
        isinside(Point: Point): boolean {
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
        protected triangle_area(pt1: Point, pt2: Point, pt3: Point): number {
            return (0);
        }
        change_value() { }
        set_connection(geo: Geometry) { }
        // protected random(max: number, min: number): number {
        //     return (Math.random() * (max - min) + min);
        // }
    }
    export class Magnet1 extends Geometry {
        img1: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        // vx: number;
        stang: number = 0;

        constructor(image1: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img1 = image1;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 830) {
                this.move_x = false;
            }
        }
    }

    export class Magnet2 extends Geometry {
        img2: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        //vx: number;
        stang: number = 0;

        constructor(image: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img2 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            //  this.vx = this.random(5, 1);

        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 1089) {
                this.move_x = false;
            }
        }

    }
    export class Magnet3 extends Geometry {
        img3: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        //vx: number;
        stang: number = 0;

        constructor(image: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img3 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);

        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 1089) {
                this.move_x = false;
            }
        }

    }
    export class Magnet4 extends Geometry {
        img4: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        //vx: number;
        stang: number = 0;

        constructor(image: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img4 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);

        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 830) {
                this.move_x = false;
            }
        }

    }
    export class Magnet5 extends Geometry {
        img5: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        //vx: number;
        stang: number = 0;

        constructor(image: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img5 = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);

        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x++;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x > 1780) {
                this.move_x = false;
            }
        }

    }
    export class Magnet6 extends Geometry {
        img6: CanvasImageSource;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        dx = 264;
        dy = 61;
        //vx: number;
        stang: number = 0;

        constructor(image1: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
            super();
            this.img6 = image1;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
            // this.vx = this.random(5, 1);
        }
        draw(): void {
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
        protected rotate() {
            this.stang--;
            this.context.rotate(this.stang * Math.PI / 180);
        }
        protected rotate_check() {
            if (this.stang <= -360) {
                this.stang = 0;
            }

        }
        isinside(Point: Point): boolean {
            Point.x = Point.x * lscale;
            Point.y = Point.y * lscale;
            if (Point.x > this.stpt.x * lscale - this.dx / 2 * lscale && Point.x < this.stpt.x * lscale + this.dx / 2 * lscale) {
                if (Point.y > this.stpt.y * lscale - this.dy / 2 * lscale && Point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
                    return (true);

                }
            }
            return (false);
        }
        protected motion_x() {
            this.stpt.x--;
            this.motion_x_check();
        }
        motion_x_check() {
            if (this.stpt.x < 135) {
                this.move_x = false;
            }
        }
    }
}