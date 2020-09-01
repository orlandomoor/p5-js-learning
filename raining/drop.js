class Drop {
  constructor() {
  this.x = random(width);
  this.y = random (-500, -100);
  this.z = random (0, 20);
  this.yspeed = map(this.z, 0, 20, 2, 10);
  this.grav = map(this.z, 0, 20, 0, 0.02);
  this.len = map (this.z, 0, 20, 8, 15);
  this.pos = height - map (this.z, 0, 20, 80, 0);
  this.a = map (this.z, 0, 20, 1, 70);
  this.b = map (this.z, 0, 20, 1, 8);
  this.hitTime = null;
  }
  
  fall() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.grav;
    if ( this.y >= height+100) {
      this.y = random (-500, -100);
      this.hitTime = null;
      this.yspeed = map(this.z, 0, 20, 2, 10);
    }
  }
  
  show() {
    strokeWeight(map(this.z, 0, 20, 1, 2));
    stroke(map(this.z, 0, 20, 225, 230));
    line(this.x, this.y, this.x, this.y+this.len);
  }

  
  hit() {
    if (this.y >= height-52) {
      if (!this.hitTime) this.hitTime = millis();
      noFill();
      stroke(map(this.z, 0, 20, 130, 220));
      strokeWeight(map(this.z, 0, 20, 1, 3));
      let size = map(millis()-this.hitTime, 0, 400, 0, 1);
      ellipse( this.x, this.pos, this.a*size, this.b*size);
      }
  }
  
}
    