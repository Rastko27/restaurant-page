/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-load.js":
/*!***************************!*\
  !*** ./src/about-load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction aboutLoad() {\n    const contentDiv = document.getElementById('content');\n\n    const h1 = document.createElement('h1');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n\n    h1.textContent = 'About the Restaurant';\n    p1.textContent = \"Welcome to The Culinary Haven, where culinary excellence meets warm hospitality in the heart of Gourmet Town. Established in 2010, our restaurant has become a cherished dining destination, known for its exquisite Mediterranean fusion cuisine and inviting atmosphere. Our menu, crafted with the freshest ingredients, features a delightful array of dishes, from classic favorites to innovative creations. Whether you're craving a hearty pasta, a perfectly grilled steak, or a refreshing salad, every plate at The Culinary Haven is a testament to our commitment to quality and flavor.\";\n    p2.textContent = \"At The Culinary Haven, we believe in creating memorable experiences for our guests. Our dedicated team of chefs, servers, and staff share a passion for exceptional food and outstanding service. The ambiance of our thoughtfully designed interior, featuring cozy seating, ambient lighting, and tasteful decor, provides the perfect setting for any occasion. Committed to sustainability, we source local and organic ingredients whenever possible, reflecting our respect for nature and our community. Join us at The Culinary Haven and discover the warmth, flavor, and hospitality that define our restaurant.\";\n\n    contentDiv.appendChild(h1);\n    contentDiv.appendChild(p1);\n    contentDiv.appendChild(p2);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/about-load.js?");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homeLoad() {\n    const contentDiv = document.getElementById('content');\n\n    const h1 = document.createElement('h1');\n    const img = document.createElement('img');\n    const p = document.createElement('p');\n\n    contentDiv.style.display = 'flex';\n    contentDiv.style.flexDirection = 'column';\n    contentDiv.style.justifyContent = 'flex-start';\n    contentDiv.style.alignItems = 'center';\n    h1.textContent = 'The Culinary Haven';\n    img.src = 'images/restaurant-image.jpg';\n    img.alt = '';\n    img.style.width = '500px';\n    img.style.height = '100%';\n    p.textContent = 'Nestled in the heart of the city, Gastronomia Delizia offers a culinary experience like no other. Our chefs are masters in the art of blending traditional flavors with modern techniques, creating dishes that are both familiar and innovative. The ambiance is warm and inviting, perfect for a romantic dinner or a gathering with friends.';\n\n    contentDiv.appendChild(h1);\n    contentDiv.appendChild(img);\n    contentDiv.appendChild(p);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/home-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load.js */ \"./src/home-load.js\");\n/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load.js */ \"./src/menu-load.js\");\n/* harmony import */ var _about_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-load.js */ \"./src/about-load.js\");\n\n\n\n\nconst contentDiv = document.getElementById('content');\n\nlet home = document.getElementById('home');\nlet menu = document.getElementById('menu');\nlet about = document.getElementById('about');\n\nhome.addEventListener(\"click\", () => {\n    contentDiv.innerHTML = '';\n    (0,_home_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenu.addEventListener(\"click\", () => {\n    contentDiv.innerHTML = '';\n    (0,_menu_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nabout.addEventListener(\"click\", () => {\n    contentDiv.innerHTML = '';\n    (0,_about_load_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuLoad() {\n    const contentDiv = document.getElementById('content');\n    \n    const h1 = document.createElement('h1');\n    h1.textContent = 'Menu';\n\n    const appetizers = document.createElement('h2');\n    appetizers.textContent = 'Appetizers';\n\n    const bruschetta = document.createElement('h3');\n    bruschetta.textContent = 'Bruschetta';\n\n    const bruschettaText = document.createElement('p');\n    bruschettaText.textContent = 'Crispy bread topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.';\n\n    const calamari = document.createElement('h3');\n    calamari.textContent = 'Calamari';\n\n    const calamariText = document.createElement('p');\n    calamariText.textContent = 'Lightly fried squid served with zesty marinara sauce.';\n\n    const mainCourses = document.createElement('h2');\n    mainCourses.textContent = 'Main Courses';\n\n    const grilledSalmon = document.createElement('h3');\n    grilledSalmon.textContent = 'Grilled Salmon';\n\n    const grilledSalmonText = document.createElement('p');\n    grilledSalmonText.textContent = 'Succulent salmon fillet, grilled to perfection, served with a lemon herb butter sauce.';\n\n    const pastaPrimavera = document.createElement('h3');\n    pastaPrimavera.textContent = 'Pasta Primavera';\n\n    const pastaPrimaveraText = document.createElement('p');\n    pastaPrimaveraText.textContent = 'A delightful mix of seasonal vegetables and pasta, tossed in a light garlic and olive oil sauce.';\n    \n    const deserts = document.createElement('h2');\n    deserts.textContent = 'Deserts';\n\n    const tiramisu = document.createElement('h3');\n    tiramisu.textContent = 'Tiramisu';\n\n    const tiramisuText = document.createElement('p');\n    tiramisuText.textContent = 'A classic Italian dessert layered with espresso-soaked ladyfingers and creamy mascarpone.';\n\n    const chocolateLavaCake = document.createElement('h3');\n    chocolateLavaCake.textContent = 'Chocolate Lava Cake';\n\n    const chocolateLavaCakeText = document.createElement('p');\n    chocolateLavaCakeText.textContent = 'Warm, gooey chocolate cake with a molten center, served with vanilla ice cream.';\n\n    const beverages = document.createElement('h2');\n    beverages.textContent = 'Beverages';\n\n    const water = document.createElement('h3');\n    water.textContent = 'Water';\n\n    const waterText = document.createElement('p');\n    waterText.textContent = 'Refreshing water.';\n\n    const lemonade = document.createElement('h3');\n    lemonade.textContent = 'Lemonade';\n\n    const lemonadeText = document.createElement('p');\n    lemonadeText.textContent = 'Cool and refreshing, made with freshly squeezed lemons.';\n\n    contentDiv.appendChild(h1);\n    contentDiv.appendChild(appetizers);\n    contentDiv.appendChild(bruschetta);\n    contentDiv.appendChild(bruschettaText);\n    contentDiv.appendChild(calamari);\n    contentDiv.appendChild(calamariText);\n    contentDiv.appendChild(mainCourses);\n    contentDiv.appendChild(grilledSalmon);\n    contentDiv.appendChild(grilledSalmonText);\n    contentDiv.appendChild(pastaPrimavera);\n    contentDiv.appendChild(pastaPrimaveraText);\n    contentDiv.appendChild(deserts);\n    contentDiv.appendChild(tiramisu);\n    contentDiv.appendChild(tiramisuText);\n    contentDiv.appendChild(chocolateLavaCake);\n    contentDiv.appendChild(chocolateLavaCakeText);\n    contentDiv.appendChild(beverages);\n    contentDiv.appendChild(water);\n    contentDiv.appendChild(waterText);\n    contentDiv.appendChild(lemonade);\n    contentDiv.appendChild(lemonadeText);\n}\n    \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;