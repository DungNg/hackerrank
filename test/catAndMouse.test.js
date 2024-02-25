const catAndMouse = require('../catAndMouse.js');

it('should return cat B', () => {
    expect(catAndMouse.catAndMouse(1,2,3)).toBe('Cat B');
})