/**
 * angular-Material-Preloader directive
 */
;
(function () {
  'use strict';

  angular.module('angularMaterialPreloader', [])
    .directive('materialPreloader', function () {
      // Runs during compile
      return {
        restrict: 'EA', // E = Element, A = Attribute
        templateUrl: 'template/material-preloader-template.html',
        transclude: true,
        link: function ($scope, iAttrs) {
          $scope.settings = {
            position: iAttrs.position || 'top',
            height: iAttrs.height || '5px',
            col_1: iAttrs.col1 || '#159756',
            col_2: iAttrs.col2 || '#da4733',
            col_3: iAttrs.col3 || '#3b78e7',
            col_4: iAttrs.col4 || '#fdba2c'
          };
        }
      };
    });
})();