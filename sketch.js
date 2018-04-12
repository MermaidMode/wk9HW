var x = 0;
var y = 0;

function setup() {

	createCanvas(800, 800);


}



function draw() {
	background(0, 195, 255);

	noStroke(0);


	//hairback
	fill(61, 36, 4);
	rect(200, 50, 400, 700);

	// body
	fill(175, 86, 101);
	rect(225, 600, 350, 400);

	// neck
	fill(201, 190, 175);
	rect(350, 450, 100, 150);


	// face
	fill(252, 231, 217);
	ellipse(400, 300, 400, 500);

	// eyes
	fill(0);
	if (mouseIsPressed) {
	ellipse(300, 300, 60, 5);

	} else {
	ellipse(300, 300, 50, 50);

	}
	// ellipse(300, 300, 50, 50);
	ellipse(500, 300, 50, 50);

	// mouth
	fill(0);
	arc(400, 450, 80, 80, 0, PI);

	// arms
	strokeWeight(10);
	stroke(0);
	line(mouseX, mouseY, 225, 650);

	noStroke(0);

	// hair
	fill(79, 57, 42);
	rect(200, 50, 400, 150);
	rect(200, 50, 70, 700);
	rect(530, 50, 70, 700);

	// cheeks

	fill(175, 86, 101);
	ellipse(275, 375, 70, 30);
	ellipse(525, 375, 70, 30);




}