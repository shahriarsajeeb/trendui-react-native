"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/layout",{

/***/ "(app-pages-browser)/./components/docs/sidebar.tsx":
/*!*************************************!*\
  !*** ./components/docs/sidebar.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/docs/search */ \"(app-pages-browser)/./components/docs/search.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hand.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Introduction\",\n        href: \"#\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"Installation\",\n        href: \"#installation\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Documentation\",\n        href: \"#docs\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        name: \"Components\",\n        href: \"#components\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        name: \"Sponsor\",\n        href: \"#sponsor\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }\n];\nconst GETTING_STARTED = [\n    {\n        name: \"Getting Started\",\n        subcategories: [\n            \"Introduction\",\n            \"Installation\",\n            \"Documentation\"\n        ]\n    }\n];\nfunction normalizeURL(url) {\n    return url.replace(/\\s+/g, \"-\");\n}\nfunction Sidebar() {\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [componentsData, setcomponentsData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            getComponentsData();\n        }\n    }[\"Sidebar.useEffect\"], []);\n    const getComponentsData = async ()=>{\n        const repoOwner = \"trend-ui\";\n        const repoName = \"trendui-react-native\";\n        const path = \"src/components\";\n        const url = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(path);\n        try {\n            const res = await fetch(url, {\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch component list: \".concat(res.statusText));\n            }\n            const data = await res.json();\n            const components = data.filter((item)=>item.type === \"dir\") // Ensure it's a directory (component folder)\n            .map((folder)=>({\n                    name: folder.name,\n                    isNew: false\n                }));\n            setcomponentsData(components);\n        } catch (error) {\n            console.error(\"Error fetching component list:\", error);\n            return [];\n        }\n    };\n    const CATEGORIES = [\n        {\n            name: \"Components\",\n            subcategories: componentsData\n        },\n        {\n            name: \"Sponsor\",\n            subcategories: [\n                {\n                    name: \"Sponsor\",\n                    isNew: false\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-col p-4 sm:p-6 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_docs_search__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            GETTING_STARTED.map((category)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-md mb-3 font-geistSemiBold\",\n                            children: category.name\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"ml-2 space-y-2\",\n                            children: category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>setActive(!active),\n                                    className: \"w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                    onKeyDown: (e)=>{\n                                        if (e.key === \"Enter\" || e.key === \" \") {\n                                            setActive(!active);\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/docs/\".concat(normalizeURL(subcategory.toLowerCase())),\n                                        className: (param)=>{\n                                            let { isActive } = param;\n                                            return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                        },\n                                        children: subcategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 21\n                                    }, this)\n                                }, subcategory, false, {\n                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, category.name, true, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 13\n                }, this);\n            }),\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600\"\n                }, void 0, false, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: CATEGORIES.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-md mb-3 font-geistSemiBold\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-2 space-y-2\",\n                                children: category.subcategories.map((subcategory)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: ()=>setActive(!active),\n                                        className: \"flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                        onKeyDown: (e)=>{\n                                            if (e.key === \"Enter\" || e.key === \" \") {\n                                                setActive(!active);\n                                            }\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/docs/\".concat(category.name.toLowerCase(), \"/\").concat(normalizeURL(subcategory.name.toLowerCase())),\n                                                className: (param)=>{\n                                                    let { isActive } = param;\n                                                    return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                                },\n                                                children: subcategory.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 193,\n                                                columnNumber: 25\n                                            }, this),\n                                            subcategory.isNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300\",\n                                                children: \"new\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 206,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, subcategory.name, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 183,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.name, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"a6lWdTicwA3Vmsc1LolK9MiPAm8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNpQjtBQUdJO0FBTzVCO0FBQ3NCO0FBRTVDLE1BQU1VLGFBQWE7SUFDakI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1WLDZIQUFJQTtJQUNaO0lBQ0E7UUFDRVEsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1OLDZIQUFlQTtJQUN2QjtJQUNBO1FBQ0VJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNVCw2SEFBUUE7SUFDaEI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVIsNkhBQVFBO0lBQ2hCO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1QLDZIQUFVQTtJQUNsQjtDQUNEO0FBRUQsTUFBTVEsa0JBQWtCO0lBQ3RCO1FBQ0VILE1BQU07UUFDTkksZUFBZTtZQUFDO1lBQWdCO1lBQWdCO1NBQWdCO0lBQ2xFO0NBQ0Q7QUFFRCxTQUFTQyxhQUFhQyxHQUFXO0lBQy9CLE9BQU9BLElBQUlDLE9BQU8sQ0FBQyxRQUFRO0FBQzdCO0FBRU8sU0FBU0M7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1hLFdBQVdyQiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDc0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBOzZCQUFDO1lBQ1JtQjtRQUNGOzRCQUFHLEVBQUU7SUFFTCxNQUFNQSxvQkFBb0I7UUFDeEIsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxXQUFXO1FBQ2pCLE1BQU1DLE9BQU87UUFFYixNQUFNYixNQUFNLGdDQUE2Q1ksT0FBYkQsV0FBVSxLQUF3QkUsT0FBckJELFVBQVMsY0FBaUIsT0FBTEM7UUFFOUUsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTWYsS0FBSztZQUs3QjtZQUVBLElBQUksQ0FBQ2MsSUFBSUUsRUFBRSxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsTUFBTSxtQ0FBa0QsT0FBZkgsSUFBSUksVUFBVTtZQUNuRTtZQUVBLE1BQU1DLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtZQUMzQixNQUFNQyxhQUFhRixLQUNoQkcsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLElBQUksS0FBSyxPQUFPLDZDQUE2QzthQUN4RkMsR0FBRyxDQUFDLENBQUNDLFNBQWlCO29CQUFFaEMsTUFBTWdDLE9BQU9oQyxJQUFJO29CQUFFaUMsT0FBTztnQkFBTTtZQUMzRHBCLGtCQUFrQmM7UUFDcEIsRUFBRSxPQUFPTyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO1lBQ2hELE9BQU8sRUFBRTtRQUNYO0lBQ0Y7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCO1lBQ0VwQyxNQUFNO1lBQ05JLGVBQWVRO1FBQ2pCO1FBQ0E7WUFDRVosTUFBTTtZQUNOSSxlQUFlO2dCQUFDO29CQUFFSixNQUFNO29CQUFXaUMsT0FBTztnQkFBTTthQUFFO1FBQ3BEO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMvQywyREFBTUE7Ozs7O1lBdUJOWSxnQkFBZ0I0QixHQUFHLENBQ2xCLENBQUNRO2dCQUNDLHFCQUNFLDhEQUFDRjtvQkFBd0JDLFdBQVU7O3NDQUNqQyw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1hDLFNBQVN2QyxJQUFJOzs7Ozs7c0NBRWhCLDhEQUFDeUM7NEJBQUdILFdBQVU7c0NBQ1hDLFNBQVNuQyxhQUFhLENBQUMyQixHQUFHLENBQUMsQ0FBQ1csNEJBQzNCLDhEQUFDQztvQ0FFQ0MsU0FBUyxJQUFNN0IsVUFBVSxDQUFDRDtvQ0FDMUJ3QixXQUFVO29DQUNWTyxXQUFXLENBQUNDO3dDQUNWLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxXQUFXRCxFQUFFQyxHQUFHLEtBQUssS0FBSzs0Q0FDdENoQyxVQUFVLENBQUNEO3dDQUNiO29DQUNGOzhDQUVBLDRFQUFDekIsaURBQUlBO3dDQUNIWSxNQUFNLFNBQWlELE9BQXhDSSxhQUFhcUMsWUFBWU0sV0FBVzt3Q0FDbkRWLFdBQVc7Z0RBQUMsRUFBRVcsUUFBUSxFQUFFO21EQUN0QkEsV0FDSSwrQkFDQTs7a0RBR0xQOzs7Ozs7bUNBakJFQTs7Ozs7Ozs7Ozs7bUJBUEhILFNBQVN2QyxJQUFJOzs7OztZQStCM0I7WUFFRFMsdUJBQ0M7MEJBQ0UsNEVBQUM0QjtvQkFBSUMsV0FBVTs7Ozs7OzhDQUdqQjswQkFDR0YsV0FBV0wsR0FBRyxDQUFDLENBQUNRO29CQUNmLHFCQUNFLDhEQUFDRjt3QkFBd0JDLFdBQVU7OzBDQUNqQyw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQ1hDLFNBQVN2QyxJQUFJOzs7Ozs7MENBRWhCLDhEQUFDeUM7Z0NBQUdILFdBQVU7MENBQ1hDLFNBQVNuQyxhQUFhLENBQUMyQixHQUFHLENBQUMsQ0FBQ1c7b0NBQzNCLHFCQUNFLDhEQUFDQzt3Q0FFQ0MsU0FBUyxJQUFNN0IsVUFBVSxDQUFDRDt3Q0FDMUJ3QixXQUFVO3dDQUNWTyxXQUFXLENBQUNDOzRDQUNWLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxXQUFXRCxFQUFFQyxHQUFHLEtBQUssS0FBSztnREFDdENoQyxVQUFVLENBQUNEOzRDQUNiO3dDQUNGOzswREFFQSw4REFBQ3pCLGlEQUFJQTtnREFDSFksTUFBTSxTQUF3Q0ksT0FBL0JrQyxTQUFTdkMsSUFBSSxDQUFDZ0QsV0FBVyxJQUFHLEtBRXpDLE9BRjRDM0MsYUFDNUNxQyxZQUFZMUMsSUFBSSxDQUFDZ0QsV0FBVztnREFFOUJWLFdBQVc7d0RBQUMsRUFBRVcsUUFBUSxFQUFFOzJEQUN0QkEsV0FDSSwrQkFDQTs7MERBR0xQLFlBQVkxQyxJQUFJOzs7Ozs7NENBRWxCMEMsWUFBWVQsS0FBSyxrQkFDaEIsOERBQUNpQjtnREFBRVosV0FBVTswREFBcUk7Ozs7Ozs7dUNBdEIvSUksWUFBWTFDLElBQUk7Ozs7O2dDQTRCM0I7Ozs7Ozs7dUJBcENNdUMsU0FBU3ZDLElBQUk7Ozs7O2dCQXdDM0I7Ozs7Ozs7O0FBS1Y7R0FyS2dCUTs7UUFFR2xCLHdEQUFXQTs7O0tBRmRrQiIsInNvdXJjZXMiOlsiL1VzZXJzL3NoYWhyaWFyc2FqZWViL0Rlc2t0b3AvQmV0YWZpZXIvdHJlbmR1aS9jb21wb25lbnRzL2RvY3Mvc2lkZWJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiQC9jb21wb25lbnRzL2RvY3Mvc2VhcmNoXCI7XG5pbXBvcnQge1xuICBIYW5kLFxuICBGaWxlVGV4dCxcbiAgQm9va09wZW4sXG4gIEhlbHBDaXJjbGUsXG4gIEFycm93RG93blRvTGluZSxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xuICB7XG4gICAgbmFtZTogXCJJbnRyb2R1Y3Rpb25cIixcbiAgICBocmVmOiBcIiNcIixcbiAgICBpY29uOiBIYW5kLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJJbnN0YWxsYXRpb25cIixcbiAgICBocmVmOiBcIiNpbnN0YWxsYXRpb25cIixcbiAgICBpY29uOiBBcnJvd0Rvd25Ub0xpbmUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRvY3VtZW50YXRpb25cIixcbiAgICBocmVmOiBcIiNkb2NzXCIsXG4gICAgaWNvbjogRmlsZVRleHQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNvbXBvbmVudHNcIixcbiAgICBocmVmOiBcIiNjb21wb25lbnRzXCIsXG4gICAgaWNvbjogQm9va09wZW4sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNwb25zb3JcIixcbiAgICBocmVmOiBcIiNzcG9uc29yXCIsXG4gICAgaWNvbjogSGVscENpcmNsZSxcbiAgfSxcbl07XG5cbmNvbnN0IEdFVFRJTkdfU1RBUlRFRCA9IFtcbiAge1xuICAgIG5hbWU6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgc3ViY2F0ZWdvcmllczogW1wiSW50cm9kdWN0aW9uXCIsIFwiSW5zdGFsbGF0aW9uXCIsIFwiRG9jdW1lbnRhdGlvblwiXSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVSTCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW2NvbXBvbmVudHNEYXRhLCBzZXRjb21wb25lbnRzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb21wb25lbnRzRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0Q29tcG9uZW50c0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVwb093bmVyID0gXCJ0cmVuZC11aVwiO1xuICAgIGNvbnN0IHJlcG9OYW1lID0gXCJ0cmVuZHVpLXJlYWN0LW5hdGl2ZVwiO1xuICAgIGNvbnN0IHBhdGggPSBcInNyYy9jb21wb25lbnRzXCI7XG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG9Pd25lcn0vJHtyZXBvTmFtZX0vY29udGVudHMvJHtwYXRofWA7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gICAvLyBJbmNsdWRlIGEgR2l0SHViIHBlcnNvbmFsIGFjY2VzcyB0b2tlbiBpZiB5b3UgaGl0IHJhdGUgbGltaXRzXG4gICAgICAgIC8vICAgLy8gQXV0aG9yaXphdGlvbjogYHRva2VuIFlPVVJfUEVSU09OQUxfQUNDRVNTX1RPS0VOYCxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBjb21wb25lbnQgbGlzdDogJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zdCBjb21wb25lbnRzID0gZGF0YVxuICAgICAgICAuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udHlwZSA9PT0gXCJkaXJcIikgLy8gRW5zdXJlIGl0J3MgYSBkaXJlY3RvcnkgKGNvbXBvbmVudCBmb2xkZXIpXG4gICAgICAgIC5tYXAoKGZvbGRlcjogYW55KSA9PiAoeyBuYW1lOiBmb2xkZXIubmFtZSwgaXNOZXc6IGZhbHNlIH0pKTtcbiAgICAgIHNldGNvbXBvbmVudHNEYXRhKGNvbXBvbmVudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50IGxpc3Q6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgQ0FURUdPUklFUyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbXBvbmVudHNcIixcbiAgICAgIHN1YmNhdGVnb3JpZXM6IGNvbXBvbmVudHNEYXRhLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcG9uc29yXCIsXG4gICAgICBzdWJjYXRlZ29yaWVzOiBbeyBuYW1lOiBcIlNwb25zb3JcIiwgaXNOZXc6IGZhbHNlIH1dLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGZsZXgtY29sIHAtNCBzbTpwLTYgbGc6cC04XCI+XG4gICAgICA8U2VhcmNoIC8+XG5cbiAgICAgIHsvKiA8bmF2IGNsYXNzTmFtZT1cIm10LTQgZmxleC0xIHNwYWNlLXktMlwiPlxuICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBpdGVtLmhyZWY7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9e2lzQWN0aXZlID8gXCJzZWNvbmRhcnlcIiA6IFwiZ2hvc3RcIn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcInctZnVsbCBwLTQgc206cC01IGxnOnAtNiBqdXN0aWZ5LXN0YXJ0IHNoYWRvdy1sZyByb3VuZGVkLWxnIGJvcmRlci0yIGRhcms6Ym9yZGVyLW5vbmUgZGFyazpiZy1uZXV0cmFsLTkwMCBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtODAwXCIsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWFjY2VudFwiIDogXCJob3ZlcjpiZy1hY2NlbnQvNTBcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgc206aC01IHNtOnctNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L25hdj4gKi99XG4gICAgICB7R0VUVElOR19TVEFSVEVELm1hcChcbiAgICAgICAgKGNhdGVnb3J5OiB7IG5hbWU6IHN0cmluZzsgc3ViY2F0ZWdvcmllczogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnkubmFtZX0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1tZCBtYi0zIGZvbnQtZ2Vpc3RTZW1pQm9sZFwiPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWwtMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViY2F0ZWdvcmllcy5tYXAoKHN1YmNhdGVnb3J5OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctbWF4IGJvcmRlci1ncmF5LTUwMCBweC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6Ym9yZGVyLWwtMlwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2NzLyR7bm9ybWFsaXplVVJMKHN1YmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHtsb2FkZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZ3JheS0zMDAgaC0xMCB3LTEwIGFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgYm9yZGVyLTggYm9yZGVyLXQtYmx1ZS02MDBcIiAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge0NBVEVHT1JJRVMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1tZCBtYi0zIGZvbnQtZ2Vpc3RTZW1pQm9sZFwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWwtMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1tYXggY3Vyc29yLXBvaW50ZXIgZ2FwLXgtMyBib3JkZXItZ3JheS01MDAgcHgtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlci1sLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2NzLyR7Y2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke25vcm1hbGl6ZVVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeS5pc05ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIi1weS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgYmctZ3JlZW4tMzAwLzIwIHB4LTMgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC1ncmVlbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwiU2VhcmNoIiwiSGFuZCIsIkZpbGVUZXh0IiwiQm9va09wZW4iLCJIZWxwQ2lyY2xlIiwiQXJyb3dEb3duVG9MaW5lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJuYXZpZ2F0aW9uIiwibmFtZSIsImhyZWYiLCJpY29uIiwiR0VUVElOR19TVEFSVEVEIiwic3ViY2F0ZWdvcmllcyIsIm5vcm1hbGl6ZVVSTCIsInVybCIsInJlcGxhY2UiLCJTaWRlYmFyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwicGF0aG5hbWUiLCJjb21wb25lbnRzRGF0YSIsInNldGNvbXBvbmVudHNEYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ2V0Q29tcG9uZW50c0RhdGEiLCJyZXBvT3duZXIiLCJyZXBvTmFtZSIsInBhdGgiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJjb21wb25lbnRzIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJtYXAiLCJmb2xkZXIiLCJpc05ldyIsImVycm9yIiwiY29uc29sZSIsIkNBVEVHT1JJRVMiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRlZ29yeSIsImgxIiwidWwiLCJzdWJjYXRlZ29yeSIsImxpIiwib25DbGljayIsIm9uS2V5RG93biIsImUiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImlzQWN0aXZlIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/docs/sidebar.tsx\n"));

/***/ })

});