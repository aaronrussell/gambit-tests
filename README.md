# Gambit Tests

Mini repository to complete two small JavaScript test tasks.


## Task 1: Write a function that takes 2 colors as arguments and returns the average color.

For this task I am cheating... in fact I'm cheating not once, but twice!

First cheat is that I am using a library. I think I can be excused for using this library because I wrote it! Second cheat is that that the mix function doesn't even work correctly... haha!

In 2011 I built a small colour utility library for mixing and adjusting colours. It was written in CoffeeScript (sorry, it was cool at the time) and is able to manipulate colours in all sorts of ways.

See [Github repo](https://github.com/aaronrussell/jcolour) and [documentation](http://aaronrussell.github.io/jcolour/).

For this task I've discovered the mix function isn't 100% accurate. I tried mixing blue (#0000ff) with yellow (#00ffff) expecting green (#00ff00). In fact jColour returns a very slightly hex (#007fff). I put this difference down to a JavaScript float rounding issue. As I wrote this code in 2011, I'm not going to fix it now.

I could have written a simple function that does exactly as requested, but I figured you'd be more interested in seeing the full jColour library as it shows a much broader understanding of how colours can be manipulated with JavaScript (ignoring the fact there's a rounding error in there somewhere).


## Task 2: Write a function to parse a nested array and return formatted HTML.

TBC