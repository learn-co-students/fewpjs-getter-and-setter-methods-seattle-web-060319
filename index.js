const pi = Math.PI

class Circle{
  constructor(radius){
    this.radius = radius;
  }


  get diameter(){
    let diameter = this.radius * 2;
    return diameter;
  }

  set diameter(diameter){
    this.radius = diameter/2
  }

  get circumference(){
    let circumference = 2*pi*this.radius
    return circumference;
  }

  set circumference(circumference){
    this.radius = circumference/(2*pi)
  }

  get area(){
    let area = pi*this.radius*this.radius
    return area;
  }

  set area(area){
    this.radius = area/(pi*this.radius)
  }


}
