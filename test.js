var lato = require('./')
var test = require('tape').test

test('should require image and font', function(t) {
    var img = lato.images[0]
    t.deepEqual(img.shape.slice(0, 3), [750, 512, 4], 'width x height is correct')
    t.equal(lato.pages.length, lato.images.length, 'images and pages extracted')
    t.equal(lato.info.face, 'Lato-Regular', 'face extracted')
    t.end()
})