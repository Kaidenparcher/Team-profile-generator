const { Circle, Triangle, Square }  = require('./shape.js');

// Circle test
describe('Circle', () => {
    test('creates a valid SVG circle', () => {
        const shape = new Circle();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

  // Triangle test
describe('Triangle', () => {
    test('creates a valid SVG Triangle', () => {
        const shape = new Triangle();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,50 250,150 50,150" fill="${color}" />`);
    });
});
// Square test
describe('Square', () => {
    test('creates a valid SVG Square', () => {
        const shape = new Square();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="100" fill="${color}" />`);
    });
});