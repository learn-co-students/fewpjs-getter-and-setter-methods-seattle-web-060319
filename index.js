// Add your Circle class here
class Circle{
  constructor(radius) {
    this.radius = radius;
  }

  // get piValue() {
  //   return Math.PI;
  // }
  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area () {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circum) {
    this.diameter = circum / Math.PI;
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }

}