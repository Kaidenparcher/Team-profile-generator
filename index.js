const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shape')

// Import SVG templates from another file


class Logo {
    constructor(){
        this.shape = '';
        this.text = '';
    }


    //create a functions that will set the shape and the text
    setText(text, color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`;
    }

    setShape(shape) {
        switch (shape) {
          case 'circle':
            this.shape = `<circle cx="50%" cy="50%" r="40%"`;
            break;
          case 'triangle':
            this.shape = `<polygon points="150,50 250,150 50,150"`;
            break;
          case 'square':
            this.shape = `<rect x="50" y="50" width="200" height="100"`;
            break;
          default:
            this.shape = '';
        }
      }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape}</svg>`
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
      // Generate SVG using selected template and user input
      const svg = {Circle, Triangle, Square}[answers.shape](answers.text, answers.textColor, answers.shapeColor);
        let logo = new Logo()
        logo.setShape(answers.shape)
        logo.setText(answers.text, answers.textColor)
      // Save SVG as file
      fs.writeFileSync('logo.svg', svg);
        
      // Print success message to console
      console.log('Generated logo.svg');
    });