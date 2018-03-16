describe('Task 2', function() {

  const domPuke = require('../lib/domPuke.js');

  //  ['div’] => ‘<div/>'
  it('must be a self closing element when no children', function() {
    expect( domPuke(['div']) ).toEqual('<div/>');
  })

  //  ['h1', 'Text’] => ‘<h1>Text</h1>'
  it('must wrap text children', function() {
    expect( domPuke(['h1', 'Text']) ).toEqual('<h1>Text</h1>');
  })

  //  ['span', 'More', 'Text’] => ‘<span>MoreText</span>'
  it('must concatenate multiple text children', function() {
    expect( domPuke(['span', 'More', 'Text']) ).toEqual('<span>MoreText</span>');
  })

  //  ['a', ['b', 'More'], ' Text'] => '<a><b>More</b> Text</a>'
  it('must nest arrays as child elements', function() {
    expect( domPuke(['span', 'More', 'Text']) ).toEqual('<span>MoreText</span>');
  })

  //  ['p', '<b>Text</b>'] => '<p>&lt;b&gt;Text&lt;/b&gt;</p>'
  it('must escape html text', function() {
    expect( domPuke(['p', '<b>Text</b>']) ).toEqual('<p>&lt;b&gt;Text&lt;/b&gt;</p>');
  })  

})
