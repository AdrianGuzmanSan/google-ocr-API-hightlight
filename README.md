# Google OCR detection highlight in NodeJS
This code uses the node canvas package (https://www.npmjs.com/package/canvas) <br />
and the image size package (https://www.npmjs.com/package/image-size) <br />
to highlight the word matches given in the resulting JSON from the Google Cloud OCR API (https://cloud.google.com/vision/docs/ocr) and also to numerate the matches so you can check its order.
<br /><br />

To quickstart just install the dependencies with 
  npm install
and then run it with
  node canvas.js

The original image is this:
![image](https://user-images.githubusercontent.com/89719906/222868179-477d8ef8-71a0-49bb-be3f-7cc5cbf75de5.png)

And it saves a file with the highlights like this:

![image](https://user-images.githubusercontent.com/89719906/222868331-345ea970-70d7-4f7f-b8e7-19b323db3919.png)

