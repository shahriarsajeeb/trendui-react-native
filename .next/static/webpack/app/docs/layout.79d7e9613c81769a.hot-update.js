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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/docs/search */ \"(app-pages-browser)/./components/docs/search.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hand.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Introduction\",\n        href: \"#\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"Installation\",\n        href: \"#installation\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Documentation\",\n        href: \"#docs\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        name: \"Components\",\n        href: \"#components\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        name: \"Sponsor\",\n        href: \"#sponsor\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }\n];\nconst GETTING_STARTED = [\n    {\n        name: \"Getting Started\",\n        subcategories: [\n            \"Introduction\",\n            \"Installation\",\n            \"Documentation\"\n        ]\n    }\n];\nfunction normalizeURL(url) {\n    return url.replace(/\\s+/g, \"-\");\n}\nfunction Sidebar() {\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [componentsData, setcomponentsData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            getComponentsData();\n        }\n    }[\"Sidebar.useEffect\"], []);\n    const getComponentsData = async ()=>{\n        const repoOwner = \"trend-ui\";\n        const repoName = \"trendui-react-native\";\n        const path = \"src/components\";\n        const url = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(path);\n        try {\n            const res = await fetch(url, {\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch component list: \".concat(res.statusText));\n            }\n            const data = await res.json();\n            const components = data.filter((item)=>item.type === \"dir\") // Ensure it's a directory (component folder)\n            .map((folder)=>({\n                    name: folder.name,\n                    isNew: false\n                }));\n            setcomponentsData(components);\n        } catch (error) {\n            console.error(\"Error fetching component list:\", error);\n            return [];\n        }\n    };\n    const CATEGORIES = [\n        {\n            name: \"Components\",\n            subcategories: componentsData\n        },\n        {\n            name: \"Sponsor\",\n            subcategories: [\n                {\n                    name: \"Sponsor\",\n                    isNew: false\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-col p-4 sm:p-6 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_docs_search__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            GETTING_STARTED.map((category)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-md mb-3 font-geistSemiBold\",\n                            children: category.name\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"ml-2 space-y-2\",\n                            children: category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>setActive(!active),\n                                    className: \"w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                    onKeyDown: (e)=>{\n                                        if (e.key === \"Enter\" || e.key === \" \") {\n                                            setActive(!active);\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/docs/\".concat(normalizeURL(subcategory.toLowerCase())),\n                                        className: (param)=>{\n                                            let { isActive } = param;\n                                            return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                        },\n                                        children: subcategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 21\n                                    }, this)\n                                }, subcategory, false, {\n                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, category.name, true, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 13\n                }, this);\n            }),\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%]  h-[50vh] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-blue-600\"\n                }, void 0, false, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: CATEGORIES.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-md mb-3 font-geistSemiBold\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-2 space-y-2\",\n                                children: category.subcategories.map((subcategory)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: ()=>setActive(!active),\n                                        className: \"flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                        onKeyDown: (e)=>{\n                                            if (e.key === \"Enter\" || e.key === \" \") {\n                                                setActive(!active);\n                                            }\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/docs/\".concat(category.name.toLowerCase(), \"/\").concat(normalizeURL(subcategory.name.toLowerCase())),\n                                                className: (param)=>{\n                                                    let { isActive } = param;\n                                                    return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                                },\n                                                children: subcategory.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 193,\n                                                columnNumber: 25\n                                            }, this),\n                                            subcategory.isNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300\",\n                                                children: \"new\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 206,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, subcategory.name, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 183,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.name, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"a6lWdTicwA3Vmsc1LolK9MiPAm8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNpQjtBQUdJO0FBTzVCO0FBQ3NCO0FBRTVDLE1BQU1VLGFBQWE7SUFDakI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1WLDZIQUFJQTtJQUNaO0lBQ0E7UUFDRVEsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1OLDZIQUFlQTtJQUN2QjtJQUNBO1FBQ0VJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNVCw2SEFBUUE7SUFDaEI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVIsNkhBQVFBO0lBQ2hCO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1QLDZIQUFVQTtJQUNsQjtDQUNEO0FBRUQsTUFBTVEsa0JBQWtCO0lBQ3RCO1FBQ0VILE1BQU07UUFDTkksZUFBZTtZQUFDO1lBQWdCO1lBQWdCO1NBQWdCO0lBQ2xFO0NBQ0Q7QUFFRCxTQUFTQyxhQUFhQyxHQUFXO0lBQy9CLE9BQU9BLElBQUlDLE9BQU8sQ0FBQyxRQUFRO0FBQzdCO0FBRU8sU0FBU0M7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1hLFdBQVdyQiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDc0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBOzZCQUFDO1lBQ1JtQjtRQUNGOzRCQUFHLEVBQUU7SUFFTCxNQUFNQSxvQkFBb0I7UUFDeEIsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxXQUFXO1FBQ2pCLE1BQU1DLE9BQU87UUFFYixNQUFNYixNQUFNLGdDQUE2Q1ksT0FBYkQsV0FBVSxLQUF3QkUsT0FBckJE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Q2lCO2dEQUFFWixXQUFVOzBEQUFxSTs7Ozs7Ozt1Q0F0Qi9JSSxZQUFZMUMsSUFBSTs7Ozs7Z0NBNEIzQjs7Ozs7Ozt1QkFwQ011QyxTQUFTdkMsSUFBSTs7Ozs7Z0JBd0MzQjs7Ozs7Ozs7QUFLVjtHQXJLZ0JROztRQUVHbEIsd0RBQVdBOzs7S0FGZGtCIiwic291cmNlcyI6WyIvVXNlcnMvc2hhaHJpYXJzYWplZWIvRGVza3RvcC9CZXRhZmllci90cmVuZHVpL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCJAL2NvbXBvbmVudHMvZG9jcy9zZWFyY2hcIjtcbmltcG9ydCB7XG4gIEhhbmQsXG4gIEZpbGVUZXh0LFxuICBCb29rT3BlbixcbiAgSGVscENpcmNsZSxcbiAgQXJyb3dEb3duVG9MaW5lLFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkludHJvZHVjdGlvblwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGljb246IEhhbmQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkluc3RhbGxhdGlvblwiLFxuICAgIGhyZWY6IFwiI2luc3RhbGxhdGlvblwiLFxuICAgIGljb246IEFycm93RG93blRvTGluZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRG9jdW1lbnRhdGlvblwiLFxuICAgIGhyZWY6IFwiI2RvY3NcIixcbiAgICBpY29uOiBGaWxlVGV4dCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29tcG9uZW50c1wiLFxuICAgIGhyZWY6IFwiI2NvbXBvbmVudHNcIixcbiAgICBpY29uOiBCb29rT3BlbixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3BvbnNvclwiLFxuICAgIGhyZWY6IFwiI3Nwb25zb3JcIixcbiAgICBpY29uOiBIZWxwQ2lyY2xlLFxuICB9LFxuXTtcblxuY29uc3QgR0VUVElOR19TVEFSVEVEID0gW1xuICB7XG4gICAgbmFtZTogXCJHZXR0aW5nIFN0YXJ0ZWRcIixcbiAgICBzdWJjYXRlZ29yaWVzOiBbXCJJbnRyb2R1Y3Rpb25cIiwgXCJJbnN0YWxsYXRpb25cIiwgXCJEb2N1bWVudGF0aW9uXCJdLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gbm9ybWFsaXplVVJMKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBbY29tcG9uZW50c0RhdGEsIHNldGNvbXBvbmVudHNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENvbXBvbmVudHNEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRDb21wb25lbnRzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXBvT3duZXIgPSBcInRyZW5kLXVpXCI7XG4gICAgY29uc3QgcmVwb05hbWUgPSBcInRyZW5kdWktcmVhY3QtbmF0aXZlXCI7XG4gICAgY29uc3QgcGF0aCA9IFwic3JjL2NvbXBvbmVudHNcIjtcblxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb093bmVyfS8ke3JlcG9OYW1lfS9jb250ZW50cy8ke3BhdGh9YDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gaGVhZGVyczoge1xuICAgICAgICAvLyAgIC8vIEluY2x1ZGUgYSBHaXRIdWIgcGVyc29uYWwgYWNjZXNzIHRva2VuIGlmIHlvdSBoaXQgcmF0ZSBsaW1pdHNcbiAgICAgICAgLy8gICAvLyBBdXRob3JpemF0aW9uOiBgdG9rZW4gWU9VUl9QRVJTT05BTF9BQ0NFU1NfVE9LRU5gLFxuICAgICAgICAvLyB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGNvbXBvbmVudCBsaXN0OiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBkYXRhXG4gICAgICAgIC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS50eXBlID09PSBcImRpclwiKSAvLyBFbnN1cmUgaXQncyBhIGRpcmVjdG9yeSAoY29tcG9uZW50IGZvbGRlcilcbiAgICAgICAgLm1hcCgoZm9sZGVyOiBhbnkpID0+ICh7IG5hbWU6IGZvbGRlci5uYW1lLCBpc05ldzogZmFsc2UgfSkpO1xuICAgICAgc2V0Y29tcG9uZW50c0RhdGEoY29tcG9uZW50cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb21wb25lbnQgbGlzdDpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDQVRFR09SSUVTID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tcG9uZW50c1wiLFxuICAgICAgc3ViY2F0ZWdvcmllczogY29tcG9uZW50c0RhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNwb25zb3JcIixcbiAgICAgIHN1YmNhdGVnb3JpZXM6IFt7IG5hbWU6IFwiU3BvbnNvclwiLCBpc05ldzogZmFsc2UgfV0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgZmxleC1jb2wgcC00IHNtOnAtNiBsZzpwLThcIj5cbiAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4LTEgc3BhY2UteS0yXCI+XG4gICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUgPT09IGl0ZW0uaHJlZjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgdmFyaWFudD17aXNBY3RpdmUgPyBcInNlY29uZGFyeVwiIDogXCJnaG9zdFwifVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwidy1mdWxsIHAtNCBzbTpwLTUgbGc6cC02IGp1c3RpZnktc3RhcnQgc2hhZG93LWxnIHJvdW5kZWQtbGcgYm9yZGVyLTIgZGFyazpib3JkZXItbm9uZSBkYXJrOmJnLW5ldXRyYWwtOTAwIGRhcms6aG92ZXI6YmctbmV1dHJhbC04MDBcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/IFwiYmctYWNjZW50XCIgOiBcImhvdmVyOmJnLWFjY2VudC81MFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBzbTpoLTUgc206dy01XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtYmFzZVwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvbmF2PiAqL31cbiAgICAgIHtHRVRUSU5HX1NUQVJURUQubWFwKFxuICAgICAgICAoY2F0ZWdvcnk6IHsgbmFtZTogc3RyaW5nOyBzdWJjYXRlZ29yaWVzOiBzdHJpbmdbXSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5uYW1lfSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LW1kIG1iLTMgZm9udC1nZWlzdFNlbWlCb2xkXCI+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtbC0yIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnk6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1tYXggYm9yZGVyLWdyYXktNTAwIHB4LTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvY3MvJHtub3JtYWxpemVVUkwoc3ViY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSl9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgICAge2xvYWRlciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5MCVdICBoLVs1MHZoXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIGgtOCB3LTggYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItdC1ibHVlLTYwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7Q0FURUdPUklFUy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnkubmFtZX0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LW1kIG1iLTMgZm9udC1nZWlzdFNlbWlCb2xkXCI+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtbC0yIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnN1YmNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LW1heCBjdXJzb3ItcG9pbnRlciBnYXAteC0zIGJvcmRlci1ncmF5LTUwMCBweC0zIHRleHQtc20gdGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6Ym9yZGVyLWwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvY3MvJHtjYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKCl9LyR7bm9ybWFsaXplVVJMKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmNhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5LmlzTmV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiLXB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyZWVuLTMwMCBiZy1ncmVlbi0zMDAvMjAgcHgtMyB0ZXh0LXhzIGxlYWRpbmctbm9uZSB0ZXh0LWdyZWVuLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJTZWFyY2giLCJIYW5kIiwiRmlsZVRleHQiLCJCb29rT3BlbiIsIkhlbHBDaXJjbGUiLCJBcnJvd0Rvd25Ub0xpbmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImljb24iLCJHRVRUSU5HX1NUQVJURUQiLCJzdWJjYXRlZ29yaWVzIiwibm9ybWFsaXplVVJMIiwidXJsIiwicmVwbGFjZSIsIlNpZGViYXIiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJwYXRobmFtZSIsImNvbXBvbmVudHNEYXRhIiwic2V0Y29tcG9uZW50c0RhdGEiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJnZXRDb21wb25lbnRzRGF0YSIsInJlcG9Pd25lciIsInJlcG9OYW1lIiwicGF0aCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJkYXRhIiwianNvbiIsImNvbXBvbmVudHMiLCJmaWx0ZXIiLCJpdGVtIiwidHlwZSIsIm1hcCIsImZvbGRlciIsImlzTmV3IiwiZXJyb3IiLCJjb25zb2xlIiwiQ0FURUdPUklFUyIsImRpdiIsImNsYXNzTmFtZSIsImNhdGVnb3J5IiwiaDEiLCJ1bCIsInN1YmNhdGVnb3J5IiwibGkiLCJvbkNsaWNrIiwib25LZXlEb3duIiwiZSIsImtleSIsInRvTG93ZXJDYXNlIiwiaXNBY3RpdmUiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/docs/sidebar.tsx\n"));

/***/ })

});