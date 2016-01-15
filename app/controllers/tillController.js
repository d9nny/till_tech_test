'use strict';
tillSystem.controller('TillController', [function() {
	var self = this;
	self.order = {};
 	self.fiftyDiscount = 0;

	self.coffeeShopInfo = [
	{
		'shopName': 'The Coffee Connection',
		'address': '123 Lakeside Way',
		'phone': '16503600708',
		'prices': [
		{
			'Blueberry Muffin': 4.05,
			'Choc Chip Muffin': 4.05,
			'Muffin Of The Day': 4.55,
			'Cafe Latte': 4.75,
			'Flat White': 4.75,
			'Cappucino': 3.85,
			'Single Espresso': 2.05,
			'Double Espresso': 3.75,
			'Americano': 3.75,
			'Cortado': 4.55,
			'Tea': 3.65,
			'Choc Mudcake': 6.40,
			'Choc Mousse': 8.20,
			'Affogato': 14.80,
			'Tiramisu': 11.40
		}
		]
	}
	];

	self.calculate = function(item) {
		return Math.round((item[0] * item[1])*100)/100;
	};

	self.addCurrentSelection = function(item, price) {
		self.order[item] = [price, 1, price];
	};

	self.addOne = function(key) {
		self.order[key][1] += 1;
		self.order[key][2] = self.calculate(self.order[key]);
	};

	self.minusOne = function(key) {
		self.order[key][1] -= 1;
		if (self.order[key][1] === 0) {
			self.remove(key);
		} else {
			self.order[key][2] = self.calculate(self.order[key]);
		}
	};

	self.remove = function(key) {
		self.order[key] = null;
		delete self.order[key];
	};

	self.update = function() {
		self.minusDiscount();
		self.addTotal();
		self.calcTax();
	};

	self.addTotal = function() {
		var total = 0;
		var values=[];
		for( var key in self.order ) {
			total += (self.order[key][2]);
		}
		self.totalPrice = Math.round(total*100)/100 ;
	};

	self.minusDiscount = function() {
		if (self.totalPrice > 50.00) {
			self.fiftyDiscount = Math.round(self.totalPrice * 0.05*100)/100;
			self.totalPrice *= 0.95; 
		}
	};

	self.calcTax = function() {
		self.tax = self.totalPrice - self.totalPrice / 1.0864;
	};
		
}]);