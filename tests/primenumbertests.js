var hope = require('../app/getprimes.js');


describe("Prime Number tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'Please enter the correct input' for null", function() {
      expect(hope.getPrimes(null)).toEqual("Empty Array");
    });

    it("should return 'Please enter the correct input' for undefined", function() {
      expect(hope.getPrimes(undefined)).toEqual("Empty Array");
    });
    it("should return 'Invalid Input' for Strings", function() {
      expect(hope.getPrimes('')).toEqual('Invalid Input');
    });
    it("should return 'Invalid Input' for Negative numbers", function() {
      expect(hope.getPrimes(-5)).toBe('Invalid Input');
    });
    it("should return 'Invalid Input' for Zero", function() {
      expect(hope.getPrimes(0)).toBe('Invalid Input');
    });

  });

  describe("Case for Numbers", function() {

    it("should return '[2, 3, 5, 7, 11, 13, 17, 19]' for 20", function() {
      expect(hope.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
    it("should return ' [2]' for 2", function() {
      expect(hope.getPrimes(2)).toEqual( [2]);
    });
  });

  });