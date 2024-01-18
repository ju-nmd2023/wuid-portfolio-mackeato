background(200, 200, 200);

// Head

noStroke();
fill(255, 200, 164);
ellipse(300, 300, 300, 300);
arc(300, 270 + 30, 300, 400, 0, PI, CHORD);

push();
rotate(-0.1);
fill(200, 200, 200);
rect(104, 250, 30, 200);
pop();

push();
rotate(0.1);
fill(200, 200, 200);
rect(464, 200, 30, 200);
pop();

push();

// Eyes

fill(255, 255, 255);
ellipse(250, 300, 70, 50);
ellipse(350, 300, 70, 50);

fill(204, 255, 229);
ellipse(250, 300, 30, 30);
ellipse(350, 300, 30, 30);

fill(10, 10, 10);
ellipse(250, 300, 20, 20);
ellipse(350, 300, 20, 20);

fill(255, 200, 164);
rect(210, 265, 80, 20);
rect(310, 265, 80, 20);

fill(79, 49, 17);
rect(210, 265, 80, 20);
rect(310, 265, 80, 20);

// Nose
fill(255, 168, 102);
rect(285, 288, 30, 70, 15);
ellipse(285, 355, 20, 20);
ellipse(315, 355, 20, 20);
ellipse(300, 360, 25, 20);

// Glasses

fill(10, 10, 10);
rect(170, 265, 120, 80, 10);
rect(310, 265, 120, 80, 10);
rect(275, 268, 50, 20);

push();
rotate(-0.4);
rect(40, 285, 15, 80, 100);
pop();

push();
rotate(0.4);
rect(496, 52, 15, 80, 100);
pop();

// Hat
push();
fill(40, 40, 40);
arc(300, 200 + 30, 400, 40, 0, PI, CHORD);

rect(160, 90, 280, 150);

push();
fill(200, 200, 200);
rotate(0.06);
rect(75, 64, 100, 160);
pop();

push();
fill(200, 200, 200);
rotate(-0.1);
rect(410, 119, 100, 160);
pop();

push();
fill(200, 200, 200);
rotate(0.05);
rect(160, 53, 300, 30);
pop();

// Beard

fill(40, 20, 20);

ellipse(300, 480, 158, 80);

push();
fill(255, 200, 164);
ellipse(270, 445, 60, 60);
ellipse(330, 445, 60, 60);
rect(295, 435, 10, 20);
pop();

push();
rotate(0.3);
rect(352, 323, 20, 70);
pop();

push();
rotate(-0.3);
rect(200.5, 500, 20, 70);
pop();

push();
fill(200, 100, 200);
translate(215, 470);
rotate(-0.2);
rect(-13, 3, 20, 40);
pop();

push();
fill(200, 100, 200);
translate(370, 470);
rotate(0.2);
rect(-13, 3, 20, 40);
pop();

rect(275, 450, 40, 50, 10);

rect(250, 407, 100, 30);

push();
translate(299.5, 447);
rotate(PI);
arc(0, 0 + 30, 120, 40, 0, PI, CHORD);
pop();
