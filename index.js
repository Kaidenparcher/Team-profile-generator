const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shape')

// Import SVG templates from another file


class Logo {
    constructor(){
        this.shapeColor = '';
        this.shape = '';
        this.text = '';
        
    }

    setShapeColor(color){
        this.shapeColor = color;
    }

    setText(text, color){
        this.text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${color}">${text}</text>`;
    }
    
      

    setShape(shape) {
        switch (shape) {
          case 'circle':
            this.shape = `<circle cx="50%" cy="50%" r="40%"`;
            this.viewBox = '0 0 100 100';
            break;
          case 'triangle':
            this.shape = `<polygon points="150,50 250,150 50,150"`;
            this.viewBox = '0 0 300 200';
            break;
          case 'square':
            this.shape = `<rect x="50" y="50" width="300" height="200"`;
            this.viewBox = '0 0 300 200';
            break;
          default:
            this.shape = '';
            this.viewBox = '';
        }
      }
      

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="${this.viewBox}">
          ${this.shape} fill="${this.shapeColor}"/>
          ${this.text}
        </svg>`;
      }
      
}



// Prompt the user for input
inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => /^[a-zA-Z0-9]{1,3}$/.test(input) || 'Please enter 1-3 alphanumeric characters only',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex code):',
      validate: (input) => /^#?[0-9a-fA-F]{3,6}$|^(black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua)$/i.test(input) || 'Please enter a valid color keyword or hex code',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex code):',
      validate: (input) => /^#?[0-9a-fA-F]{3,6}$|^(black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua)$/i.test(input) || 'Please enter a valid color keyword or hex code',
    },
  ])
  .then((answers) => {
    let logo = new Logo(); // Create Logo object first
    logo.setShape(answers.shape);
    logo.setShapeColor(answers.shapeColor);
    logo.setText(answers.text, answers.textColor);
    
  
    // Generate SVG using selected template and user input
    const svg = logo.render(); // Generate SVG using the Logo object
  
    // Save SVG as file
    fs.writeFileSync('logo.svg', svg);
    
    // Print success message to console
    console.log('Generated logo.svg');
  });