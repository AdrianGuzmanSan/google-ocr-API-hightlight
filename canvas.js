// Adrián Guzmán

const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const sizeOf = require('image-size');

// Folder of Image (in this case it uses a local directory) which was processed by Google Cloud OCR
const fileFolder = "./files/";
// Name of the image file which was processed by Google Cloud OCR 
const fileName = "ExampleFile.jpg";

const jsonFile = './files/Example.json';
fs.readFile(jsonFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // parse JSON file which was read 
    datosJSON = JSON.parse(data);

    var dimensions = sizeOf(fileFolder + fileName);
    // get width and height of image file to adjust the canvas.
    var imageWidth = dimensions.width;
    var imageHeight = dimensions.height;

    const canvas = createCanvas(imageWidth, imageHeight);
    const context = canvas.getContext('2d');
    loadImage(fileFolder + fileName).then((image) => {
    context.drawImage(image, 0, 0);

    // stroke style
    context.strokeStyle = 'rgba(238,255,0,1)';
    // stroke width
    context.lineWidth = 1;
    datosJSON.responses[0].textAnnotations.forEach((element, ArrayIndex) => {
        context.beginPath();
        for (let index = 0; index <= 3; index++) {
            context.lineTo(
                element.boundingPoly.vertices[index].x,
                element.boundingPoly.vertices[index].y
            );
            // Return to start point to close the rectangle figure in canvas.
            if (index == 3) {
                context.lineTo(
                    element.boundingPoly.vertices[0].x,
                    element.boundingPoly.vertices[0].y
                );
                context.font = '14px Arial';
                context.fillStyle = 'rgba(0, 66, 63, 1)';
                context.fillText(ArrayIndex, 
                    element.boundingPoly.vertices[0].x,
                    element.boundingPoly.vertices[0].y
                );
                context.strokeStyle = 'rgba(207, 255, 48 ,1)';
            }        
        }
        context.stroke();
    });
    const buffer = canvas.toBuffer('image/png');

    fs.writeFileSync('./files/test.png', buffer);
    })
});