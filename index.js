const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shape')
const svgTemplates = require('./lib/shape');
// Import SVG templates from another file


class Logo {
    constructor(){
        //pass shape and text

    }


    //create a functions that will set the shape and the text
    setText(){

    }

    setShape(){

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
      const svg = svgTemplates[answers.shape](answers.text, answers.textColor, answers.shapeColor);
        let logo = new Logo()
        logo.setShape(answers.shape)
        logo.setText(answers.text, answers.textColor)
      // Save SVG as file
      fs.writeFileSync('logo.svg', svg);
        
      // Print success message to console
      console.log('Generated logo.svg');
    });