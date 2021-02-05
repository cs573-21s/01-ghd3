// An indexed element
class IndexedElement {
    constructor(index) {
        this.index = index;
    }

    // Copy method for all superclasses to use
    copy = i => new IndexedElement(i);
}

// A colorable element with stroke and fill
class Colorable extends IndexedElement {
    constructor(index, stroke, fill) {
        super(index);
        this.stroke = stroke;
        this.fill = fill;
    }
    
    copy = i => new Colorable(i, this.stroke, this.fill);
}

/**
 * Shapes
 * - Uses geometry properties as fields
 */

// A circle, exported for use
export class Circle extends Colorable {
    constructor(index, cx, cy, r, stroke, fill) {
        super(index, stroke, fill);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    copy = i => new Circle(i, this.cx, this.cy, this.r, this.stroke, this.fill);
}

// An ellipse, exported for use
export class Ellipse extends Circle {
    constructor(index, cx, cy, rx, ry, stroke, fill) {
        super(index, cx, cy, rx, stroke, fill);
        this.ry = ry;
    }

    copy = i => new Ellipse(i, this.cx, this.cy, this.r, this.ry, this.stroke, this.fill);
}

// A rectangle, exported for use
export class Rectangle extends Colorable {
    constructor(index, x, y, width, height, rx, ry, stroke, fill) {
        super(index, stroke, fill);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rx = rx;
        this.ry = ry;
    }

    copy = i => new Rectangle(i, this.x, this.y, this.width, this.height, this.rx, this.ry, this.stroke, this.fill);
}

// Converts degrees to radians
let degreesToRadians = a => a * Math.PI / 180.0;

// Creates a polygon based on the specified data using matrix math
let createPolygonPoints = (cx, cy, r, sides, angle) => {
    var points = [];
    var ix = cx + r, iy = cy;
    for(var i = 0; i < sides; i++) {
        var a = degreesToRadians(i * 360 / sides + angle),
            s = Math.sin(a),
            c = Math.cos(a),
            x = ix - cx,
            y = iy - cy;
        
        
        points.push([x * c - y * s + cx, x * s + y * c + cy]);
    }
    return points;
}

// A line, exported for use
export class Polyline extends Colorable {
    constructor(index, points, stroke, fill) {
        super(index, stroke, fill);
        this.points = points;
    }

    // Gets the points as inputted
    getNormalizedPoints() {
        var string = "";
        for(var i = 0; i < this.points.length; i++) {
            string += this.points[i][0] + "," + this.points[i][1];
            if(i != this.points.length - 1) string += " ";
        }
        return string;
    }

    // Gets the points scaled to the screen
    getPoints(xScale, yScale) {
        var string = "";
        for(var i = 0; i < this.points.length; i++) {
            string += xScale(this.points[i][0]) + "," + yScale(this.points[i][1]);
            if(i != this.points.length - 1) string += " ";
        }
        return string;
    }

    copy = i => new Polyline(i, this.points, this.stroke, this.fill);
}

// A polygon, exported for use
export class Polygon extends Polyline {
    constructor(index, cx, cy, r, sides, angle, stroke, fill) {
        super(index, createPolygonPoints(cx, cy, r, sides, angle), stroke, fill);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.sides = sides;
        this.angle = angle;
    }

    copy = i => new Polygon(i, this.cx, this.cy, this.r, this.sides, this.angle, this.stroke, this.fill);
}