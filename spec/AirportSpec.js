describe("Airport", function() {

  var airport;
  var plane = function() {};
  plane.land = function() {};
  plane.takeOff = function() {};
  
  beforeEach(function() {
    airport = new Airport();
  });
  
    it('instructs a plane to land', function() {
      spyOn(plane, 'land');
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('instructs a plane to take off', function() {
      spyOn(plane, 'takeOff');
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
});