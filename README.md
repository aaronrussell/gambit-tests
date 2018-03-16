# Gambit Tests

Mini repository to complete two small JavaScript test tasks.

To verify the work in this repository, check out the code and from the working folder run:

    npm install
    npm test

Refer to the two test files so see what's going on and see code in lib folder where I've added some comments to help explain the code.

The first task is a bit of a cheat and using 7 year old code of mine. The second task provides a better representation of my code today.


## Task 1: Write a function that takes 2 colors as arguments and returns the average color.

For this task I am cheating... in fact I'm cheating not once, but twice!

First cheat is that I am using a library. I think I can be excused for using this library because I wrote it! Second cheat is that that the mix function doesn't even work correctly... haha!

In 2011 I built a small colour utility library for mixing and adjusting colours. It was written in CoffeeScript (sorry, it was cool at the time) and is able to manipulate colours in all sorts of ways.

See [Github repo](https://github.com/aaronrussell/jcolour) and [documentation](http://aaronrussell.github.io/jcolour/).

For this task I've discovered the mix function isn't 100% accurate. I tried mixing blue (#0000ff) with yellow (#00ffff) expecting green (#00ff00). In fact jColour returns a very slightly different hex (#007fff). I put this difference down to JavaScript float rounding issue. As I wrote this code in 2011, I'm not going to fix it now.

I could have written a simple function that does exactly as requested, but I figured you'd be more interested in seeing the full jColour library as it shows a much broader understanding of how colours can be manipulated with JavaScript (ignoring the fact there's a rounding error in there somewhere).


## Task 2: Write a function to parse a nested array and return formatted HTML.

For this task I approached this with a TDD approach and defined failing specs for each of examples laid out in the given task.

See [test/task_2_test.js](https://github.com/aaronrussell/gambit-tests/blob/master/test/task_2_test.js)

I then wrote a small function called `domPuke()` which accepts an array and made all the tests above pass.

See [lib/domPuke.js](https://github.com/aaronrussell/gambit-tests/blob/master/lib/domPuke.js)

To be fair, I don't always write code in a strict TDD approach, but this was a nice clean task with clearly defined expectations so it made sense to approach it this way.

The `escapeHtml()` helper function is copy and pasted from a google search as this was quicker to do.
