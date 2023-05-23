var canvas = new fabric.canvas('myCanvas')
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
fabric.image.fromURL(get_image, function(img){
	block_image_object=img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:block_y,left:block_x})
	canvas.add(block_image_object);
});


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 10;
		new_image('red.jpg');
		console.log('R')
	}
	if(keyPressed == '71')
	{
		block_x = 310;
		new_image('green.png');
		console.log('G')
		
	}
	
	if(keyPressed == '89')
	{
		block_x =560;
		new_image('yellow.png');
		console.log('Y')
	}
	if(keyPressed == '80')
	{
		block_x = 880;
		new_image('pink.png');
		console.log('P')
	}
	if(keyPressed == '66')
	{
		block_x = 1040;
	new_image('blue.png');
	console.log('B')
	}
	
}

