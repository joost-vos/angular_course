(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buy = function(index) {
    ShoppingListCheckOffService.pushItemToBought(index);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}



function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
    { name: "kg of Gouda Cheese", quantity: 1},
    { name: "Tulips", quantity: 20},
    { name: "Pairs of Wooden Shoes", quantity: 2},
    { name: "miniature windmills", quantity: 3},
    { name: "packages of stroopwafels", quantity: 5 },
    { name: "bottles of Beerenburg", quantity: 2 },
    { name: "sixpack of Heineken Beer", quantity: 1 }];

  var alreadyBoughtItems = [];


  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.pushItemToBought = function(index) {
    alreadyBoughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };
  
 service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();

