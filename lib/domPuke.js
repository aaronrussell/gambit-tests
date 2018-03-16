function domPuke(args) {
  // If args param is not an array, take all arguments as the desired array
  if ( !Array.isArray(args) ) { args = arguments; }

  // Element is always first item in the array
  var el = args.shift();

  // If there are remaining arguments, map into an array of children
  if (args.length) {
    var children = args.map(function(a) {
      // If child is an array, make more dompuke
      // Otherwise, escape the string of any HTML chars
      if ( Array.isArray(a) ) { return domPuke(a) }
      return escapeHtml(a);
    });
    return `<${el}>${children.join('')}</${el}>`

  // If no children, return self closing element
  } else {
    return `<${el}/>`;
  }
}

// Simple helper method for escaping HTML in strings
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

module.exports = domPuke;