remap = require './../index'

describe 'remap', ->
  it 'should remap value', ->
    remap( 0, 0, 20, 0, 5 ).should.equal( 0 )
    remap( 10, 0, 20, 0, 5 ).should.equal( 2.5 )
    remap( 20, 0, 20, 0, 5 ).should.equal( 5 )
