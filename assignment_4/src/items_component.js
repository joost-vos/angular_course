
(function() {
  "use strict";
  
  angular.module("MenuApp")
    .component("items", {
      templateUrl: "html_templates/items_template.html",
      controller: ItemsComponentController,
      bindings: {
        list: "<"
      }
    });

  ItemsComponentController.$inject = [];
  function ItemsComponentController() {
    // var comp = this;
  }
})();