#angular-materialPreloader
An `Material Design Preloader` directive for angular(without using jquery) that recreates the Material pre-loader (as seen on inbox).  

demo is at http://waseembepari.github.io/angular-material-preloader

How to use angular-materialPreloader?
==========================
Add the Following code to the &lt;head&gt; of your document.


```html
<link href="css/materialPreloader.min.css" rel="stylesheet prefetch">
<script type="text/javascript" src="js/angular-Material-Preloader.min.js"></script>
```

Place the `template folder` in your root directory

Add ``angularMaterialPreloader`` dependency to your module
```javascript
var myApp = angular.module("app", ["angularMaterialPreloader"])
```

Include `<div material-preloader ></div>` directive in your html template.
```html
<div material-preloader position="top" height="5px" col1='#159756' col2='#da4733' col3='#3b78e7' col4='#fdba2c' ></div>
// material-preloader as attribute
```

Or Include `<material-preloader ></material-preloader>` directive as element in your html template.

```html
<material-preloader position="top" height="5px" col1='#159756' col2='#da4733' col3='#3b78e7' col4='#fdba2c' ></material-preloader>
// material-preloader as element
```

#### VARIABLE ####
``` javascript
$scope.materialPreloader = TRUE/FALSE;
// Use true or false to on/off the materialpreloader.
```

### materialPreloader Options

| attribute        | Required           | Description						| Options	  | Default 	|
| ------------- |--------------------|----------------------------------|-------------|-------------|
| position	    | No		 		 | 	Position to place the preloader	| top/bottom  |	top   	|
| height      	| No      	 		 | 	The height of the preloader bar	| any length  |	5px   		|
| col1      	| No      	 		 |  Color 1 option					| any color   |	#159756   	|
| col2      	| No      	 		 | 	Color 2 option			 		| any color   |	#da4733   	|
| col3      	| No      	 		 |  Color 3 option					| any color   |	#3b78e7  	|
| col4      	| No      	 		 | 	Color 4 option					| any color   |	#fdba2c  	|


