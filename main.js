canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = upload_background;
    background_imageTag.src = background_image;

    greencar_imageTag = new Image();
    greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = greencar_image;
}

function upload_background(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar(){
    ctx.drawImage(greencar_imageTag, greencar_x, greencar_y, greencar_width, greencar_height)
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == "38"){
    console.log("up");
    up();
    }

    if(keyPressed == "40"){
        console.log("down");
        down();
        }

        if(keyPressed == "37"){
            console.log("left");
            left();
            }

            if(keyPressed == "39"){
                console.log("right");
                right();
                }
}

function up(){
    if(greencar_y >= 0){
        greencar_y = greencar_y - 10;
        console.log("when up arrow is pressed, x = " + greencar_x + "and y = " + greencar_y);
        upload_background();
        upload_greencar()
    }
}

    function down(){
        if(greencar_y <= 500){
            greencar_y = greencar_y + 10;
            console.log("when up arrow is pressed, x = " + greencar_x + "and y = " + greencar_y);
            upload_background();
            upload_greencar()
        }
    }

	function left(){
		if(greencar_y >= 0){
			greencar_y = greencar_y - 10;
			console.log("when up arrow is pressed, x = " + greencar_x + "and y = " + greencar_y);
			upload_background();
			upload_greencar()
		}
	}
	
		function right(){
			if(greencar_y <= 500){
				greencar_y = greencar_y + 10;
				console.log("when up arrow is pressed, x = " + greencar_x + "and y = " + greencar_y);
				upload_background();
				upload_greencar()
			}
		}