Rectangle.prototype.area = function () {
    return this.w * this.h;
}
class Square extends Rectangle {
    constructor(obj) {
        super();
        this.h = obj;
        this.w = obj;
    }
}