var expect = require("chai").expect;
var assert = require("assert");
var converter = require("../app/converter.js");

describe("Color Code Converter", function() {
  
  describe("RGB to Hex conversion", function() {
      it("converts the basic colors", function() {
        var redHex   = converter.rgbToHex(255, 0, 0);
        var greenHex = converter.rgbToHex(0, 255, 0);
        var blueHex  = converter.rgbToHex(0, 0, 255);

        expect(redHex).to.equal("ff0000");
        expect(greenHex).to.equal("00ff00");
        expect(blueHex).to.equal("0000ff");
      });
  });

  describe("Hex to RGB conversion", function() {
      it("converts the basic colors", function() {
        var red   = converter.hexToRgb("ff0000");
        var green = converter.hexToRgb("00ff00");
        var blue  = converter.hexToRgb("0000ff");

        expect(red).to.deep.equal([255, 0, 0]);
        expect(green).to.deep.equal([0, 255, 0]);
        expect(blue).to.deep.equal([0, 0, 255]);
      });
  });

  describe("Addition of two numbers", function() {
      it("adds two numbers", function() {
        var valueReturned   = converter.AddTwoNumbers(1, 2);

        expect(valueReturned).to.deep.equal(3);
      });
  });


    describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
        assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
    });


});