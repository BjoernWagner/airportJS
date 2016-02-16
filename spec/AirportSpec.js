describe("Airport", function() {

  // describe('landing', function() {
  
  var plane = function() {
  };
  var airport;

  plane.land = function() {
  };
  
  beforeEach(function() {
    airport = new Airport();
  });

  
    it('instructs a plane to land', function() {
      spyOn(plane, 'land');
      airport.land(plane);
    });
  
  // });





});