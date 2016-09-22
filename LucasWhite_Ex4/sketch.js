function setup() {
  createCanvas(580,342);
  background(230,228,205);
}

function draw() {
  noStroke();
fill(248,219,106,200);
ellipse(318,178,170,170);
fill(218,183,144);
ellipse(316,176,140,140);
fill(71,137,178);
ellipse(311,173,120,120);

stroke(0);
strokeWeight(2.5);
line(59,238,405,0);
strokeWeight(2);
line(118,320,366,72);
strokeWeight(3);
line(431,125,459,0);
strokeWeight(.9);
line(414,200,431,125);
strokeWeight(2.5);
line(355,60,510,60);
strokeWeight(.5);
line(510,60,550,60);

strokeWeight(2.5);
line(360,105,510,105);
strokeWeight(.5);
line(510,105,580,105);
}