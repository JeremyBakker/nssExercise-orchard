"use strict";

let Plant = function() {
	this.height = 0;
};

let Tree = function() {
	this.branches = 0;
};

Plant.prototype.increaseHeight = function(growth) {
	this.height += growth;
};

Plant.prototype.decreaseHeight = function(decrease) {
	this.height -= decrease;
};

Tree.prototype = new Plant();

Tree.prototype.grow = function(amount) {
	this.increaseHeight(amount);
};

Tree.prototype.trim = function(amount) {
	this.height -= amount;
	this.branches -= 1;
};

var PearTree = new Tree();
var OakTree = new Tree();

let counter = 0;

var growTrees = setInterval(function(){
	// stop at 30 events
	if (counter % 30 === 0 && counter !== 0) {
		clearInterval(growTrees);
		console.log("Counter is at " + counter + ".");
		return;
	}
	// height increases by 10 increase branches by 1
	if (PearTree.height % 10 && PearTree.height !== 0) {
		PearTree.branches += 1;
	}
	// height increases by 10 increase branches by 1
	if (OakTree.height % 10 && OakTree.height !== 0) {
		OakTree.branches += 1;
	}
	// each tenth growth of the trees trim them
	if (counter % 10 === 0 && counter !== 0) {
		PearTree.trim(3);
		OakTree.trim(7);
		console.log("Trees were trimmed at counter number ", counter);
	} else {
		PearTree.grow(3);
		OakTree.grow(7);
		console.log("Trees grew at counter number ", counter);
	}
	// print the values of the trees to the DOM
	document.getElementById("output").innerHTML += " Pear Tree is " + PearTree.height + "cm tall, and has " + PearTree.branches + ` branches<br>`;
	document.getElementById("output").innerHTML += " Oak Tree is " + OakTree.height + "cm tall, and has " + OakTree.branches + ` branches<br><br>`;
	// scrolls down the page as page fills
	window.scrollTo(0, 1500);
	// increase counter by 1 each interval
	counter++;
}, 1000);