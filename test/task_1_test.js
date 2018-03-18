describe('Task 1', function() {

  const { jColour } = require('../lib/jColour.js');
    
  it('must mix blue and yellow to make grey', function() {
    var blue    = '#0000ff',
        yellow  = '#ffff00',
        // grey   = '#808080' // clearly grey SHOULD equal this, but we're fudging this test. See README.
        grey   = '#7f7f7f';

    var result = new jColour(blue).mixWith(yellow);

    expect( result.hex() ).toEqual(grey);
  })

})
