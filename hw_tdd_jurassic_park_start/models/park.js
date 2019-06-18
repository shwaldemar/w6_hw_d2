const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop()
};

Park.prototype.allDinosaursOfSpecies = function(species){
  const speciesOfDinosaur = []
  for(dino of this.dinosaurs){
    if(dino.species === species){
      speciesOfDinosaur.push(dino)
    }
  }
  return speciesOfDinosaur
}




module.exports = Park;
