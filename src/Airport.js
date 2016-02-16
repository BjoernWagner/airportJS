function Airport() {
}

Airport.prototype.land = function(plane) {
  plane.land(this);
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
};