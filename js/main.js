var canvas = new fabric.Canvas('canvas');
canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

canvas.selectionColor = 'rgba(0,255,0,0.3)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 5;

// Define the URL where your background image is located
var imageUrl = "./images/template.png";

// Define 
canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas), {
    // Optionally add an opacity lvl to the image
    backgroundImageOpacity: 0.5,
    // should the image be resized to fit the container?
    backgroundImageStretch: false
});
        