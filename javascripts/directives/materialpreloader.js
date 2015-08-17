
/************************************************************************************
* angularJs material design preloader                                               *
* Waseem Bepari (https://github.com/WaseemBepari)                                   *
* http://waseembepari.github.io/angular-material-preloader/                         *
* Released under the MIT License - http://opensource.org/licenses/mit-license.html  *
************************************************************************************/

(function() {
	'use strict';

	/**
	 * material preloader directive fn 
	 * @return {object} return directive object used to define directive
	 * 
	 */
	function preloaderDir() {
		
		// template for loading the material preloader.
		var templ = ['<div id="materialPreloader" class="load-bar" style="height:{{settings.hg}};{{settings.pos}}:0px" ng-class="{\'hidden\':materialPreloader==false,\'visible\':materialPreloader==true}">',
      			'<div class="load-bar-container">',
		            '<div class="load-bar-base base1" style="background:{{settings.col_1}}">',
		                  '<div class="color red" style="background:{{settings.col_2}}">',
		                  '</div>',
		                  '<div class="color blue" style="background: {{settings.col_3}}">',
		                  '</div>',
		                  '<div class="color yellow" style="background: {{settings.col_4}}">',
		                  '</div>',
		                  '<div class="color green" style="background:{{settings.col_1}}">',
		                  '</div>',
		            '</div>',
		      '</div>',
		      '<div class="load-bar-container">',
		            '<div class="load-bar-base base2" style="background:{{settings.col_1}}">',
		                  '<div class="color red" style="background:  {{settings.col_2}} ">',
		                  '</div>',
		                  '<div class="color blue" style="background: {{settings.col_3}}  ">',
		                  '</div>',
		                  '<div class="color yellow" style="background: {{settings.col_4}} ">',
		                  '</div>',
		                  '<div class="color green" style="background:  {{settings.col_1}}  ">',
		                  '</div>',
		            '</div>',
		      '</div>',
		'</div>'].join('');

		function postLink($scope, elem, iAttrs) {
			$scope.settings = {
				pos: iAttrs.mpPosition || 'top',
				hg: iAttrs.mpHeight || '5px',
				col_1: iAttrs.mpCol1 || '#159756',
				col_2: iAttrs.mpCol2 || '#da4733',
				col_3: iAttrs.mpCol3 || '#3b78e7',
				col_4: iAttrs.mpCol4 || '#fdba2c'
			};
		}

		return {
			restrict: 'EA', // E = Element, A = Attribute
			template: templ,
			link: postLink
		};
	}

	angular.module('angularMaterialPreloader', [])
	  .directive('materialPreloader', preloaderDir);
})();
