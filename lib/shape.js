class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  
}


// Circle class

class Circle extends Shape{
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
};

// Triangle class

class Triangle extends Shape{
  render(){
    return `<polygon points="150,50 250,150 50,150" fill="${this.color}" />`
  }
};

// Square class

class Square extends Shape{
  render(){
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`
  }
};


// Export the templates as an object
module.exports = {
  Circle,
  Triangle,
  Square
};
