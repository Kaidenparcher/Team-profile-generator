// svgTemplates.js

// Circle template
const circleTemplate = (text, textColor, shapeColor) => `
  <svg width="300" height="200">
    <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
    <text x="150" y="115" font-size="50" font-weight="bold" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

// Triangle template
const triangleTemplate = (text, textColor, shapeColor) => `
  <svg width="300" height="200">
    <polygon points="150,50 250,150 50,150" fill="${shapeColor}" />
    <text x="150" y="135" font-size="50" font-weight="bold" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

// Square template
const squareTemplate = (text, textColor, shapeColor) => `
  <svg width="300" height="200">
    <rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />
    <text x="150" y="115" font-size="50" font-weight="bold" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
`;

// Export the templates as an object
module.exports = {
  circle: circleTemplate,
  triangle: triangleTemplate,
  square: squareTemplate,
};
