# re-map

  Re-maps a number from one range to another: Ported from [processing.js](http://processingjs.org/)

## Installation

    $ component install mnmly/remap

## API
  - [remap()](#remap)

## remap()

  Re-maps a number from one range to another. In the example above, the number '25' is converted from
  a value in the range 0..100 into a value that ranges from the left edge (0) to the right edge (width) of the screen.
  Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.

## Usage
```javascript
var remap = require('remap');

remap( 0, 0, 20, 0, 5 ).should.equal( 0 )
remap( 10, 0, 20, 0, 5 ).should.equal( 2.5 )
remap( 20, 0, 20, 0, 5 ).should.equal( 5 )
```

## License

  MIT
