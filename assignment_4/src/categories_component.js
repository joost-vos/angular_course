(function() {
  "use strict";
  
  angular.module("MenuApp")
    .component("categories", {
      templateUrl: "html_templates/categories_template.html",
      controller: CategoriesComponentController,
      bindings: {
        items: "<"
      }
    });

  CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {
    // var comp = this;
  }
})();