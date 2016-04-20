describe("alive", function() {
    var alive;

    it("alive should appear on the screen", function() {
        alive = true;

        expect(alive).toBe(true);
    });
});

describe("Adds ten", function() {
    it("checks to see if 10 has been added to var spam", function() {
        var spam = 0;
        spam += 10;

        expect(spam).toEqual(10);
    });
});

describe("Test this keyword", function() {
  beforeEach(function() {
    this.spam = 0;
  });

  it("this is being tested", function() {
    expect(this.spam).toEqual(0);
    this.bar = "test pollution?";
  });

  it("prevents test pollution by having an empty `this` created for the next spec", function() {
    expect(this.foo).toEqual(undefined);
    expect(this.bar).toBe(undefined);
  });
});

