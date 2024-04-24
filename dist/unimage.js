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

/***/ "./src/imageProcessor.ts":
/*!*******************************!*\
  !*** ./src/imageProcessor.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getImagePixelData = void 0;\nasync function getImagePixelData(imagePath) {\n    const image = await loadImage(imagePath);\n    const canvas = document.createElement(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    if (!ctx) {\n        throw new Error(\"Failed to create canvas context\");\n    }\n    canvas.width = image.width;\n    canvas.height = image.height;\n    ctx.drawImage(image, 0, 0);\n    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n    const pixels = [];\n    imageData.data.forEach((value, index) => {\n        if (index % 4 === 0) {\n            pixels.push({\n                r: value,\n                g: imageData.data[index + 1],\n                b: imageData.data[index + 2],\n                a: imageData.data[index + 3],\n            });\n        }\n    });\n    return {\n        width: canvas.width,\n        height: canvas.height,\n        pixels,\n    };\n}\nexports.getImagePixelData = getImagePixelData;\nfunction loadImage(imagePath) {\n    return new Promise((resolve, reject) => {\n        const image = new Image();\n        image.onload = () => resolve(image);\n        image.onerror = reject;\n        image.src = imagePath;\n    });\n}\n\n\n//# sourceURL=webpack://Unimage/./src/imageProcessor.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.generatePixels = void 0;\nconst imageProcessor_1 = __webpack_require__(/*! ./imageProcessor */ \"./src/imageProcessor.ts\");\nconst tableRenderer_1 = __webpack_require__(/*! ./tableRenderer */ \"./src/tableRenderer.ts\");\nasync function generatePixels(imagePath, width, height) {\n    const imageData = await (0, imageProcessor_1.getImagePixelData)(imagePath);\n    return (0, tableRenderer_1.renderTable)(imageData, width, height);\n}\nexports.generatePixels = generatePixels;\n\n\n//# sourceURL=webpack://Unimage/./src/index.ts?");

/***/ }),

/***/ "./src/tableRenderer.ts":
/*!******************************!*\
  !*** ./src/tableRenderer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderTable = void 0;\nfunction rgbToHex(pixel) {\n    const componentToHex = (c) => {\n        const hex = c.toString(16);\n        return hex.length === 1 ? \"0\" + hex : hex;\n    };\n    return (\"#\" +\n        componentToHex(pixel.r) +\n        componentToHex(pixel.g) +\n        componentToHex(pixel.b));\n}\nfunction renderTable(imageData, targetWidth, targetHeight) {\n    if (targetHeight !== undefined && targetWidth !== undefined) {\n        return renderTableAndScale(imageData, targetWidth, targetHeight);\n    }\n    else {\n        return renderTableAndFit(imageData);\n    }\n}\nexports.renderTable = renderTable;\nfunction renderTableAndFit(imageData) {\n    let html = `<table style=\"border-collapse: collapse;\">`;\n    for (let y = 0; y < imageData.height; y++) {\n        html += \"<tr>\";\n        for (let x = 0; x < imageData.width; x++) {\n            const pixelIndex = y * imageData.width + x;\n            const pixel = imageData.pixels[pixelIndex];\n            const hexColor = pixel ? rgbToHex(pixel) : new Error(\"Pixel not found\");\n            html += `<td style=\"background-color: ${hexColor};\"></td>`;\n        }\n        html += \"</tr>\";\n    }\n    html += \"</table>\";\n    return html;\n}\nfunction renderTableAndScale(imageData, targetWidth, targetHeight) {\n    const scaleX = targetWidth / imageData.width;\n    const scaleY = targetHeight / imageData.height;\n    let html = `<table style=\"border-collapse: collapse;\">`;\n    for (let y = 0; y < targetHeight; y++) {\n        html += \"<tr>\";\n        for (let x = 0; x < targetWidth; x++) {\n            const originalX = Math.floor(x / scaleX);\n            const originalY = Math.floor(y / scaleY);\n            const pixelIndex = originalY * imageData.width + originalX;\n            const pixel = imageData.pixels[pixelIndex];\n            const hexColor = pixel ? rgbToHex(pixel) : \"#000000\";\n            html += `<td style=\"background-color: ${hexColor};\"></td>`;\n        }\n        html += \"</tr>\";\n    }\n    html += \"</table>\";\n    return html;\n}\n\n\n//# sourceURL=webpack://Unimage/./src/tableRenderer.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	window.Unimage = __webpack_exports__;
/******/ 	
/******/ })()
;