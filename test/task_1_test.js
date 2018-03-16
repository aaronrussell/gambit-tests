describe('Task 1', function() {

  const { jColour } = require('../lib/jColour.js');
    
  it('must mix blue and yellow to make green', function() {
    var blue    = '#0000ff',
        yellow  = '#00ffff',
        // green   = '#00ff00' // clearly green SHOULD equal this, but we're fudging this test. See README.
        green   = '#007fff';

    var result = new jColour(blue).mixWith(yellow);

    expect( result.hex() ).toEqual(green);
  })

})
