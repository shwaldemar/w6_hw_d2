const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

module.exports = Dinosaur;

Dinosaur.prototype.addDinosaur = function (passenger) {
  this.dinosaur.push(passenger);
}

Park.prototype.removeAnyDinosaur = function () {
  this.dinosaurs.pop()
};
