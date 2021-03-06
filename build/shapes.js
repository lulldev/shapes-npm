function CCircle(shapeColorParams, shapeParams) {
    CShape.apply(this, arguments);

    if (shapeParams === undefined)
    {
        shapeParams = {
            radius: 50,
            centerX: 200,
            centerY: 200
        };
    }

    this.validateParams(shapeParams);

    this.radius = shapeParams.radius;
    this.centerX = shapeParams.centerX;
    this.centerY = shapeParams.centerY;
}

CCircle.prototype = Object.create(CShape.prototype);
CCircle.prototype.constructor = CCircle;

CCircle.prototype.validateParams = function(shapeParams) {
    if (!shapeParams.hasOwnProperty('radius') || !shapeParams.hasOwnProperty('centerX') ||
            !shapeParams.hasOwnProperty('centerY'))
    {
        throw ReferenceError("Circle params required");
    }

    if (shapeParams.radius < 0 || shapeParams.centerX < 0 || shapeParams.centerY < 0)
    {
        throw RangeError("Invalid circle params");
    }
};

CCircle.prototype.calculateArea = function() {
    return parseFloat(Math.pow(Math.PI * this.radius, 2).toFixed(2));
};

CCircle.prototype.calculatePerimeter = function() {
    return parseFloat((2 * Math.PI * this.radius).toFixed(2));
};

CCircle.prototype.draw = function(canvasAreaId) {
    this.canvasAreaId = canvasAreaId;

    var canvas = document.getElementById(this.canvasAreaId);
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};
function CRectangle(shapeColorParams, shapeParams) {
    CShape.apply(this, arguments);

    if (shapeParams === undefined)
    {
        shapeParams = {
            x1: 10,
            y1: 20,
            x2: 40,
            y2: 20
        };
    }

    this.validateParams(shapeParams);

    this.x1 = shapeParams.x1;
    this.y1 = shapeParams.y1;
    this.x2 = shapeParams.x2;
    this.y2 = shapeParams.y2;
}

CRectangle.prototype = Object.create(CShape.prototype);
CRectangle.prototype.constructor = CRectangle;


CRectangle.prototype.validateParams = function(shapeParams) {
    if (!shapeParams.hasOwnProperty('x1') || !shapeParams.hasOwnProperty('y1') ||
        !shapeParams.hasOwnProperty('x2') || !shapeParams.hasOwnProperty('y2'))
    {
        throw ReferenceError("Rectangle params required");
    }

    if (shapeParams.x1 < 0 || shapeParams.y1 < 0 ||
            shapeParams.x2 < 0 || shapeParams.y2 < 0)
    {
        throw RangeError("Invalid rectangle params");
    }
};

CRectangle.prototype.calculateSides = function() {
    return [Math.abs(this.x2 - this.x1), Math.abs(this.y2 - this.y1)];
};

CRectangle.prototype.calculateArea = function() {
    var sides = this.calculateSides();
    return parseFloat((sides[0] * sides[1]).toFixed(2));
};

CRectangle.prototype.calculatePerimeter = function() {
    var sides = this.calculateSides();
    return parseFloat((2 * (sides[0] + sides[1])).toFixed(2));
};

CRectangle.prototype.draw = function(canvasAreaId) {

    this.canvasAreaId = canvasAreaId;

    var canvas = document.getElementById(this.canvasAreaId);
    var context = canvas.getContext('2d');

    var sides = this.calculateSides();
    var a = sides[0],
        b = sides[1];

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.fillStyle = this.getFillColor();
    context.lineWidth = 0.5;
    context.strokeStyle = this.getBorderColor();

    context.fillRect(this.x1, this.y1, a, b);
    context.strokeRect(this.x1, this.y1, a, b);
};
function CShape(shapeColorParams) {
    if (shapeColorParams === undefined)
    {
        shapeColorParams = {
            fillColorValue: "#fff",
            borderColorValue: "#000"
        };
    }

    this.validateColorParams(shapeColorParams);
    this.setFillColor(shapeColorParams.fillColorValue);
    this.setBorderColor(shapeColorParams.borderColorValue);
}

CShape.prototype.validateColorParams = function(shapeColorParams) {
    if (!shapeColorParams.hasOwnProperty('fillColorValue') || !shapeColorParams.hasOwnProperty('borderColorValue'))
    {
        throw ReferenceError("Shape colors params required");
    }

    if (!this.validateColor(shapeColorParams.fillColorValue) || !this.validateColor(shapeColorParams.borderColorValue))
    {
        throw RangeError("Invalid shape colors");
    }
};

CShape.prototype.validateColor = function(expectedHexColor) {
    var regex = new RegExp('^(#)((?:[A-Fa-f0-9]{3}){1,2})$');
    return regex.test(expectedHexColor);
};

CShape.prototype.setFillColor = function(fillColorValue) {
    fillColorValue != undefined ?
        this.fillColor = fillColorValue : this.fillColor = '#fff';
};

CShape.prototype.getFillColor = function() {
    return this.fillColor;
};

CShape.prototype.setBorderColor = function(borderColorValue) {
    borderColorValue != undefined ?
        this.borderColor = borderColorValue : this.borderColor = '#000';
};

CShape.prototype.getBorderColor = function() {
    return this.borderColor;
};


function CTriangle(shapeColorParams, shapeParams) {
    CShape.apply(this, arguments);

    if (shapeParams === undefined)
    {
        shapeParams = {
            x1: 10,
            y1: 20,
            x2: 40,
            y2: 20,
            x3: 50,
            y3: 60
        };
    }

    this.validateParams(shapeParams);

    this.x1 = shapeParams.x1;
    this.y1 = shapeParams.y1;
    this.x2 = shapeParams.x2;
    this.y2 = shapeParams.y2;
    this.x3 = shapeParams.x3;
    this.y3 = shapeParams.y3;
}

CTriangle.prototype = Object.create(CShape.prototype);
CTriangle.prototype.constructor = CTriangle;


CTriangle.prototype.validateParams = function(shapeParams) {
    if (!shapeParams.hasOwnProperty('x1') || !shapeParams.hasOwnProperty('y1') ||
        !shapeParams.hasOwnProperty('x2') || !shapeParams.hasOwnProperty('y2') ||
        !shapeParams.hasOwnProperty('x3') || !shapeParams.hasOwnProperty('y3'))
    {
        throw ReferenceError("Triangle params required");
    }

    if (shapeParams.x1 < 0 || shapeParams.y1 < 0 ||
        shapeParams.x2 < 0 || shapeParams.y2 < 0 ||
        shapeParams.x3 < 0 || shapeParams.y3 < 0)
    {
        throw RangeError("Invalid triangle params");
    }
};

CTriangle.prototype.calculateSides = function() {
    return [
        Math.sqrt(Math.sqrt(Math.abs(this.x1 - this.x2)) + Math.sqrt(Math.abs(this.y1 - this.y2))),
        Math.sqrt(Math.sqrt(Math.abs(this.x2 - this.x3)) + Math.sqrt(Math.abs(this.y2 - this.y3))),
        Math.sqrt(Math.sqrt(Math.abs(this.x3 - this.x1)) + Math.sqrt(Math.abs(this.y3 - this.y1)))
    ];
};

CTriangle.prototype.calculateArea = function() {
    var sides = this.calculateSides(),
        a = sides[0],
        b = sides[1],
        c = sides[2];
    var perimeter = this.calculatePerimeter();
    return parseFloat((Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c))).toFixed(2));
};

CTriangle.prototype.calculatePerimeter = function() {
    var sides = this.calculateSides(),
        a = sides[0],
        b = sides[1],
        c = sides[2];
    return parseFloat((2 * (a + b + c)).toFixed(2));
};

CTriangle.prototype.draw = function(canvasAreaId) {

    this.canvasAreaId = canvasAreaId;

    var canvas = document.getElementById(this.canvasAreaId);
    var context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.x3, this.y3);
    context.closePath();

    context.lineWidth = 1;
    context.strokeStyle = this.getBorderColor();
    context.stroke();

    context.fillStyle = this.getFillColor();
    context.fill();
};


function ShapeProgram (canvasAreaId) {
    canvasAreaId === undefined ? this.canvasAreaId = "canvas-area" : this.canvasAreaId = canvasAreaId;
}

ShapeProgram.prototype.GetFormCollection = function () {
    return {
        colorForm: document.getElementsByClassName('color-form')[0],
        circleForm: document.getElementsByClassName('circle-form')[0],
        rectangleForm: document.getElementsByClassName('rectangle-form')[0],
        triangleForm: document.getElementsByClassName('triangle-form')[0],
        actionControl: document.getElementsByClassName('action-control-btns')[0]
    };
};

ShapeProgram.prototype.ResetForm = function () {
    var controlForms = this.GetFormCollection();
    for (var formName in controlForms) {
        controlForms[formName].style.display = "none";
    }
};

ShapeProgram.prototype.UpdateAreaAndPerimeter = function (area, perimeter) {
    document.getElementsByClassName('shape-area')[0].innerHTML = area;
    document.getElementsByClassName('shape-perimeter')[0].innerHTML = perimeter;
};

ShapeProgram.prototype.DisplayShape = function (shapeObj, shapeColorParams, shapeParams) {
    var shape;

    try {
        shape = new shapeObj(shapeColorParams, shapeParams);
    }
    catch (e) {
        alert(e.message);
        return;
    }

    shape.draw(this.canvasAreaId);
    this.UpdateAreaAndPerimeter(shape.calculateArea(), shape.calculatePerimeter());
};
console.log('test');
var shapeProgram = new ShapeProgram();

window.onload = function () {

    /**
     * Select shape type and show shape params form
     */
    document.getElementsByClassName('shape-type')[0].addEventListener("change", function () {
        var shapeControlForms = shapeProgram.GetFormCollection();

        var selectedType = this.value.toString();

        switch (selectedType) {
            case "circle":
                shapeProgram.ResetForm();
                shapeControlForms.circleForm.style.display = "block";
                break;
            case "rectangle":
                shapeProgram.ResetForm();
                shapeControlForms.rectangleForm.style.display = "block";
                break;
            case "triangle":
                shapeProgram.ResetForm();
                shapeControlForms.triangleForm.style.display = "block";
                break;
        }

        shapeControlForms.colorForm.style.display = "block";
        shapeControlForms.actionControl.style.display = "block";

    });

    /**
     * Hide all control forms
     */
    document.getElementsByClassName('reset-configurator')[0].addEventListener("click", function () {
        shapeProgram.ResetForm();
    });

    /**
     * Draw action
     */
    document.getElementsByClassName('draw-shape')[0].addEventListener("click", function () {
        var selectedType = document.getElementsByClassName('shape-type')[0].value.toString();
        var shapeColorParams = {
            fillColorValue: document.getElementsByClassName('fill-color')[0].value.toString(),
            borderColorValue: document.getElementsByClassName('border-color')[0].value.toString()
        };
        var shapeParams = {};

        switch (selectedType) {
            case "circle":
                shapeParams = {
                    radius: parseFloat(document.getElementsByClassName('radius')[0].value.toString()),
                    centerX: parseFloat(document.getElementsByClassName('circle-x-coord')[0].value.toString()),
                    centerY: parseFloat(document.getElementsByClassName('circle-y-coord')[0].value.toString())
                };
                shapeProgram.DisplayShape(CCircle, shapeColorParams, shapeParams);

                break;
            case "rectangle":
                shapeParams = {
                    x1: parseFloat(document.getElementsByClassName('rectangle-x1-coord')[0].value.toString()),
                    y1: parseFloat(document.getElementsByClassName('rectangle-y1-coord')[0].value.toString()),
                    x2: parseFloat(document.getElementsByClassName('rectangle-x2-coord')[0].value.toString()),
                    y2: parseFloat(document.getElementsByClassName('rectangle-y2-coord')[0].value.toString())
                };
                shapeProgram.DisplayShape(CRectangle, shapeColorParams, shapeParams);

                break;
            case "triangle":
                shapeParams = {
                    x1: parseFloat(document.getElementsByClassName('triangle-x1-coord')[0].value.toString()),
                    y1: parseFloat(document.getElementsByClassName('triangle-y1-coord')[0].value.toString()),
                    x2: parseFloat(document.getElementsByClassName('triangle-x2-coord')[0].value.toString()),
                    y2: parseFloat(document.getElementsByClassName('triangle-y2-coord')[0].value.toString()),
                    x3: parseFloat(document.getElementsByClassName('triangle-x3-coord')[0].value.toString()),
                    y3: parseFloat(document.getElementsByClassName('triangle-y3-coord')[0].value.toString())
                };
                shapeProgram.DisplayShape(CTriangle, shapeColorParams, shapeParams);
                break;
        }
    });
};