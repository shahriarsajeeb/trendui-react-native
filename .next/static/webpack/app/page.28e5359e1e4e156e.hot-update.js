"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/header/navbar.tsx":
/*!**************************************!*\
  !*** ./components/header/navbar.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _configs_constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/configs/constans */ \"(app-pages-browser)/./configs/constans.tsx\");\n/* harmony import */ var _hooks_useRoutechange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useRoutechange */ \"(app-pages-browser)/./hooks/useRoutechange.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { activeRoute, setActiveRoute } = (0,_hooks_useRoutechange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            setActiveRoute(pathName);\n        }\n    }[\"Navbar.useEffect\"], [\n        pathName,\n        setActiveRoute\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _configs_constans__WEBPACK_IMPORTED_MODULE_1__.NavItems.map((i, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: i.href,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat(i.title === activeRoute ? \"text-white\" : \"text-zinc-400\", \" hover:text-white\"),\n                    children: i.title\n                }, void 0, false, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/header/navbar.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/header/navbar.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_s(Navbar, \"/Z/e5gL2imVI6yNmqq7gp34+g+g=\", false, function() {\n    return [\n        _hooks_useRoutechange__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNNO0FBQ3ZCO0FBQ2lCO0FBQ0w7QUFFekMsTUFBTU0sU0FBUzs7SUFDYixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFLEdBQUdQLGlFQUFjQTtJQUN0RCxNQUFNUSxXQUFXTiw0REFBV0E7SUFFNUJFLGdEQUFTQTs0QkFBQztZQUNSRyxlQUFlQztRQUNqQjsyQkFBRztRQUFDQTtRQUFVRDtLQUFlO0lBRTdCLHFCQUNFO2tCQUNHUix1REFBUUEsQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLEdBQWlCQyxzQkFDOUIsOERBQUNWLGlEQUFJQTtnQkFBQ1csTUFBTUYsRUFBRUUsSUFBSTswQkFDaEIsNEVBQUNDO29CQUNDQyxXQUFXLEdBRVYsT0FEQ0osRUFBRUssS0FBSyxLQUFLVCxjQUFjLGVBQWUsaUJBQzFDOzhCQUVBSSxFQUFFSyxLQUFLOzs7Ozs7ZUFOYUo7Ozs7OztBQVlqQztHQXZCTU47O1FBQ29DTCw2REFBY0E7UUFDckNFLHdEQUFXQTs7O0tBRnhCRztBQXlCTixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NoYWhyaWFyc2FqZWViL0Rlc2t0b3AvQmV0YWZpZXIvdHJlbmR1aS9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkl0ZW1zIH0gZnJvbSBcIkAvY29uZmlncy9jb25zdGFuc1wiO1xuaW1wb3J0IHVzZVJvdXRlQ2hhbmdlIGZyb20gXCJAL2hvb2tzL3VzZVJvdXRlY2hhbmdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGFjdGl2ZVJvdXRlLCBzZXRBY3RpdmVSb3V0ZSB9ID0gdXNlUm91dGVDaGFuZ2UoKTtcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlUm91dGUocGF0aE5hbWUpO1xuICB9LCBbcGF0aE5hbWUsIHNldEFjdGl2ZVJvdXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge05hdkl0ZW1zLm1hcCgoaTogTmF2SXRlbXNUeXBlLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2kuaHJlZn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgaS50aXRsZSA9PT0gYWN0aXZlUm91dGUgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC16aW5jLTQwMFwiXG4gICAgICAgICAgICB9IGhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJOYXZJdGVtcyIsInVzZVJvdXRlQ2hhbmdlIiwiTGluayIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJhY3RpdmVSb3V0ZSIsInNldEFjdGl2ZVJvdXRlIiwicGF0aE5hbWUiLCJtYXAiLCJpIiwiaW5kZXgiLCJocmVmIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidGl0bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header/navbar.tsx\n"));

/***/ })

});