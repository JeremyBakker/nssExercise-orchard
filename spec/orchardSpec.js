describe("Orchard", function() {

	it("should have a Plant function", function(){
		expect(Plant).toBeDefined();
	});

	it("should have a Tree function", function(){
		expect(Tree).toBeDefined();
	});

	it("should have a function named increaseHeight on the prototype of plant", function (){
		expect(Plant.prototype.increaseHeight).toBeDefined();
	});

	it("should have a function named decreaseHeight on the prototype of plant", function(){
		expect(Plant.prototype.decreaseHeight).toBeDefined();
	});

	it("should have a height property on Plant", function() {
		let plant = new Plant();
    	expect(plant.height).toBeDefined();
	});

	it("should have a grow function on the prototype of Tree", function(){
		expect(Tree.prototype.grow).toBeDefined();
	});

	it("should have a trim function on the prototype of Tree", function(){
		expect(Tree.prototype.trim).toBeDefined();
	});

	it("should subtract the trim argument from tree height", function() {
	    var tree = new Tree();
	    tree.height = 15;
	    tree.trim(2);
	    expect(tree.height).toBe(13);
  	});

  	it("should subtract a branch when trim is invoked on Tree", function() {
	    var tree = new Tree();
	    tree.branches = 10;
	    tree.trim();
	    expect(tree.branches).toBe(9);
  	});

  	it("should add the grow argument to tree height", function() {
	    var tree = new Tree();
	    tree.height = 12;
	    tree.grow(3);
	    expect(tree.height).toBe(15);
  	});

});