'use strict';

describe('TillController', function() {
  beforeEach(module('CoffeeTill'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TillController');
  }));

  it('initialises with an empty order total and tax amount', function() {
	  expect(ctrl.orderTotal).toBeUndefined();
	  expect(ctrl.taxAmount).toBeUndefined();
	});
});