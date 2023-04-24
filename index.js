const inquirer = require('inquirer');
const fs = require('fs');
const svgTemplates = require('./shape'); // Import SVG templates from another file

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
  
      // Save SVG as file
      fs.writeFileSync('logo.svg', svg);
  
      // Print success message to console
      console.log('Generated logo.svg');
    });