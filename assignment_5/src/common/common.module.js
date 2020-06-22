(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mighty-retreat-73352.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
