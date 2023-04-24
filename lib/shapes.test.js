const { circle, triangle, square }  = require('./shape');

describe('Circle', () => {
    test('creates a valid SVG circle', () => {
      const c = new Circle('Hello', 'white', 'black');
      expect(circle(c.text, c.textColor, c.shapeColor)).toEqual(expect.any(String));
    });
  });
  