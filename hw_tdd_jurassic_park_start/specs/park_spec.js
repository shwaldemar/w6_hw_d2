const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function() {

  let park
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaurs


  beforeEach(function () {
    dinosaur1 = new Dinosaur("Terranosaurus", "Kebabs", 20)
    dinosaur2 = new Dinosaur("Stegosaurus", "Fish & Chips", 10)
    dinosaur3 = new Dinosaur("Velociraptor", "Vindaloo", 10)

    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Jurassic Park", 100, dinosaurs )
    })

  it("should have a name", function(){
    actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it("should have a ticket price", function(){
    actual = park.ticketPrice
    assert.strictEqual(actual, 100)
  });

  it("should have a collection of dinosaurs", function(){
    actual = park.dinosaurs
    assert.strictEqual(actual, dinosaurs)
  });

  //1.
  it("should be able to add a dinosaur to its collection", function(){
    const dinosaur = new Dinosaur("Bartasaurus Simpson", "Cowabunga", 100)
    park.addDinosaur(dinosaur)
    actual = dinosaurs.length
    assert.strictEqual(actual, 4)
  });

  //2.
  xit("should be able to remove a dinosaur from its collection", function(){
    park.removeDinosaur()
    actual = dinosaurs.length
    assert.strictEqual(actual, 3)
  });

  //3.
  xit("should be able to find the dinosaur that attracts the most visitors", function(){
    actual = park.attractsMost()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  //4.
  xit("should be able to find all dinosaurs of a particular species", function(){
    actual = park.allDinosaursOfSpecies("Stegosaurus")
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  //5.
  xit("should be able to remove all dinosaurs of a particular species", function(){
    park.removeAllDinosaurSpeciesFromPark("Velociraptor")
    actual = park.dinosaurs
    assert.deepStrictEqual(actual,[dinosaur1, dinosaur3])
  });

});
