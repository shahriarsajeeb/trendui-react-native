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

/***/ "(app-pages-browser)/./components/landing-page.tsx":
/*!*************************************!*\
  !*** ./components/landing-page.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LandingPage: () => (/* binding */ LandingPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_landing_page_feature_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/landing-page/feature-section */ \"(app-pages-browser)/./components/ui/landing-page/feature-section.tsx\");\n/* harmony import */ var _ui_landing_page_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/landing-page/footer */ \"(app-pages-browser)/./components/ui/landing-page/footer.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header */ \"(app-pages-browser)/./components/header/header.tsx\");\n/* __next_internal_client_entry_do_not_use__ LandingPage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction LandingPage() {\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCheckboxChange = ()=>{\n        setIsChecked(!isChecked);\n    };\n    const handleCopy = ()=>{\n        navigator.clipboard.writeText(\"npm i @trendui/react-native\");\n        setCopied(true);\n        setTimeout(()=>setCopied(false), 2000); // Reset after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"landing-background min-h-screen  bg-black text-white relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 pt-28 flex justify-between h-[70vh]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 flex flex-col justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {\n                                initial: {\n                                    opacity: 0,\n                                    y: 20\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                className: \"text-5xl font-bold mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent\",\n                                        children: \"Modern\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this),\n                                    \",\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent\",\n                                        children: \"Lightweight\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"UI library for React Native\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl text-zinc-400 mb-8\",\n                                children: \"Supports both Tailwind CSS and traditional Stylesheets.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        href: \"/docs/introduction\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-gradient-to-r from-orange-600 to-red-700 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium\",\n                                            children: \"Get Started →\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-mono text-sm\",\n                                                children: \"$ npm i @trendui/react-native\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-zinc-400 hover:text-white\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    className: \"w-4 h-4\",\n                                                    onClick: ()=>handleCopy()\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    copied && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm text-green-500\",\n                                        children: \"Copied!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 24\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_landing_page_feature_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_landing_page_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute  bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-purple-500/20 to-transparent\"\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/landing-page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"OHtw4qMu8EVPwt03ej2RXIXS7gw=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDSztBQUNYO0FBQ3dCO0FBQ1g7QUFDakI7QUFDUTtBQUU5QixTQUFTTzs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1VLHVCQUF1QjtRQUMzQkgsYUFBYSxDQUFDRDtJQUNoQjtJQUVBLE1BQU1LLGFBQWE7UUFDakJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDO1FBQzlCTCxVQUFVO1FBQ1ZNLFdBQVcsSUFBTU4sVUFBVSxRQUFRLE9BQU8sd0JBQXdCO0lBQ3BFO0lBQ0EscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDYixzREFBTUE7Ozs7OzBCQUdQLDhEQUFDYztnQkFBS0QsV0FBVTs7a0NBRWQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ25CLGlEQUFNQSxDQUFDcUIsRUFBRTtnQ0FDUkMsU0FBUztvQ0FBRUMsU0FBUztvQ0FBR0MsR0FBRztnQ0FBRztnQ0FDN0JDLFNBQVM7b0NBQUVGLFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUU7Z0NBQzVCTCxXQUFVOztrREFFViw4REFBQ087d0NBQUtQLFdBQVU7a0RBQTZFOzs7Ozs7b0NBRXRGO2tEQUVQLDhEQUFDTzt3Q0FBS1AsV0FBVTtrREFBNEU7Ozs7OztvQ0FFcEY7b0NBQUk7Ozs7Ozs7MENBR2QsOERBQUNRO2dDQUFFUixXQUFVOzBDQUE2Qjs7Ozs7OzBDQUcxQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDZCxpREFBSUE7d0NBQUN1QixNQUFLO2tEQUNULDRFQUFDQzs0Q0FBT1YsV0FBVTtzREFBOEc7Ozs7Ozs7Ozs7O2tEQUlsSSw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDTztnREFBS1AsV0FBVTswREFBb0I7Ozs7OzswREFHcEMsOERBQUNVO2dEQUFPVixXQUFVOzBEQUNoQiw0RUFBQ2xCLGdGQUFJQTtvREFBQ2tCLFdBQVU7b0RBQVVXLFNBQVMsSUFBTWpCOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHNUNILHdCQUFVLDhEQUFDZ0I7d0NBQUtQLFdBQVU7a0RBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3hELDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ2hCLHdFQUFRQTs7Ozs7MEJBR1QsOERBQUNDLCtEQUFNQTs7Ozs7MEJBR1AsOERBQUNjO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckI7R0F2RWdCWjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3NoYWhyaWFyc2FqZWViL0Rlc2t0b3AvQmV0YWZpZXIvdHJlbmR1aS9jb21wb25lbnRzL2xhbmRpbmctcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ29weSwgU2VhcmNoIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlcyBmcm9tIFwiLi91aS9sYW5kaW5nLXBhZ2UvZmVhdHVyZS1zZWN0aW9uXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL3VpL2xhbmRpbmctcGFnZS9mb290ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcIm5wbSBpIEB0cmVuZHVpL3JlYWN0LW5hdGl2ZVwiKTtcbiAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKTsgLy8gUmVzZXQgYWZ0ZXIgMiBzZWNvbmRzXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWJhY2tncm91bmQgbWluLWgtc2NyZWVuICBiZy1ibGFjayB0ZXh0LXdoaXRlIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB0LTI4IGZsZXgganVzdGlmeS1iZXR3ZWVuIGgtWzcwdmhdXCI+XG4gICAgICAgIHsvKiBpbnRybyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIG1iLTZcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHRvLXBpbmstNTAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIE1vZGVyblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLW9yYW5nZS01MDAgdG8tcmVkLTUwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICBMaWdodHdlaWdodFxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIFVJIGxpYnJhcnkgZm9yIFJlYWN0IE5hdGl2ZVxuICAgICAgICAgIDwvbW90aW9uLmgxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC16aW5jLTQwMCBtYi04XCI+XG4gICAgICAgICAgICBTdXBwb3J0cyBib3RoIFRhaWx3aW5kIENTUyBhbmQgdHJhZGl0aW9uYWwgU3R5bGVzaGVldHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9pbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTYwMCB0by1yZWQtNzAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMiBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkIOKGklxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctemluYy05MDAgcm91bmRlZC1sZyBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAkIG5wbSBpIEB0cmVuZHVpL3JlYWN0LW5hdGl2ZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC16aW5jLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPENvcHkgY2xhc3NOYW1lPVwidy00IGgtNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvcHkoKX0gLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjb3BpZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTUwMFwiPkNvcGllZCE8L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRmxvYXRpbmcgVUkgRWxlbWVudHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+PC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiBmZWF0dWVyIHNlY3Rpb24gKi99XG4gICAgICA8RmVhdHVyZXMgLz5cblxuICAgICAgey8qIGZvb3RlciAqL31cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgey8qIEJhY2tncm91bmQgR3JhZGllbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlICBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLVszMHZoXSBiZy1ncmFkaWVudC10by10IGZyb20tcHVycGxlLTUwMC8yMCB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkNvcHkiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVzIiwiRm9vdGVyIiwiTGluayIsIkhlYWRlciIsIkxhbmRpbmdQYWdlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY29waWVkIiwic2V0Q29waWVkIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJzcGFuIiwicCIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/landing-page.tsx\n"));

/***/ })

});