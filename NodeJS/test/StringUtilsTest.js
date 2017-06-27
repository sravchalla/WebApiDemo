var assert = require("assert");
var util = require("../app/StringUtils.js");

describe("String Utilities", function() {
  
    describe('Length', function() {
    describe('Get Length of', function() {
        it('should return 5 when the value is Hello', function() {                
            var length = util.GetLengthOfaString('Hello');    
            assert.equal(length, 5);
        });
    });
    });


});