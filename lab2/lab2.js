"use strict";
var count = 0;
var a = true;


var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
};

Scene.start = function() {
    // Get the canvas and it's context.
    if (a == true) {
        a = false;
        Scene.canvas = document.getElementById("myCanvas");
        Scene.canvasContext = Scene.canvas.getContext("2d");

        // Seup the parrot to be displayed.
        Scene.sprite = number;
        Scene.textAlign = 'center';

        // Attach the image to be used for the sprite.
        Scene.sprite.img = new Image();
        Scene.sprite.img.src = Scene.sprite.src;

        // Wait till the parrot image is loaded before starting the animation.
        Scene.sprite.img.onload = function() {
            Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
            Scene.mainLoop();
        }
    }
};

Scene.clearCanvas = function() {
    Scene.canvasContext.fillStyle = "lightblue";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

    // Animate at 2 frames a second.
    window.setTimeout(Scene.mainLoop, 500);
};

Scene.update = function() {
    if (count == 10) {
        Scene.sprite.offset = Scene.canvas.width / 2 - 205;
    } else {
        Scene.sprite.offset = Scene.canvas.width / 2 - 102.5;
    }
};

Scene.draw = function() {
    // Advance to the next frame.
    if (count == 10) {
        Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[1].frame.x, Scene.sprite.frames[1].frame.y, Scene.sprite.frames[1].frame.w, Scene.sprite.frames[1].frame.h, Scene.sprite.offset, 0, Scene.sprite.frames[1].frame.w, Scene.sprite.frames[1].frame.h);
        Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[0].frame.x, Scene.sprite.frames[0].frame.y, Scene.sprite.frames[0].frame.w, Scene.sprite.frames[0].frame.h, Scene.sprite.offset + 205, 0, Scene.sprite.frames[0].frame.w, Scene.sprite.frames[0].frame.h);
    } else {
        Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[Scene.sprite.frame].frame.x, Scene.sprite.frames[Scene.sprite.frame].frame.y, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h, Scene.sprite.offset, 0, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h);
        Scene.sprite.frame++;
    }

    // At the end of the sprite sheet, start at the first frame.
    if (count == 10) {
        Scene.sprite.frame = 0;
        count = -1;
    }
    count++;
};