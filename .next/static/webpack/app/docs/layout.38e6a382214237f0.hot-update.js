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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/docs/search */ \"(app-pages-browser)/./components/docs/search.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hand.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Introduction\",\n        href: \"#\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"Installation\",\n        href: \"#installation\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Documentation\",\n        href: \"#docs\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        name: \"Components\",\n        href: \"#components\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        name: \"Sponsor\",\n        href: \"#sponsor\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }\n];\nconst GETTING_STARTED = [\n    {\n        name: \"Getting Started\",\n        subcategories: [\n            \"Introduction\",\n            \"Installation\",\n            \"Documentation\"\n        ]\n    }\n];\nfunction normalizeURL(url) {\n    return url.replace(/\\s+/g, \"-\");\n}\nfunction Sidebar() {\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [componentsData, setcomponentsData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            getComponentsData();\n        }\n    }[\"Sidebar.useEffect\"], []);\n    const getComponentsData = async ()=>{\n        const repoOwner = \"trend-ui\";\n        const repoName = \"trendui-react-native\";\n        const path = \"src/components\";\n        const url = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(path);\n        try {\n            const res = await fetch(url, {\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch component list: \".concat(res.statusText));\n            }\n            const data = await res.json();\n            const components = data.filter((item)=>item.type === \"dir\") // Ensure it's a directory (component folder)\n            .map((folder)=>({\n                    name: folder.name,\n                    isNew: false\n                }));\n            setcomponentsData(components);\n        } catch (error) {\n            console.error(\"Error fetching component list:\", error);\n            return [];\n        }\n    };\n    const CATEGORIES = [\n        {\n            name: \"Components\",\n            subcategories: componentsData\n        },\n        {\n            name: \"Sponsor\",\n            subcategories: [\n                {\n                    name: \"Sponsor\",\n                    isNew: false\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-col p-4 sm:p-6 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_docs_search__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            GETTING_STARTED.map((category)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-md mb-3 font-geistSemiBold\",\n                            children: category.name\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"ml-2 space-y-2\",\n                            children: category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>setActive(!active),\n                                    className: \"w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                    onKeyDown: (e)=>{\n                                        if (e.key === \"Enter\" || e.key === \" \") {\n                                            setActive(!active);\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/docs/\".concat(normalizeURL(subcategory.toLowerCase())),\n                                        className: (param)=>{\n                                            let { isActive } = param;\n                                            return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                        },\n                                        children: subcategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 21\n                                    }, this)\n                                }, subcategory, false, {\n                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, category.name, true, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 13\n                }, this);\n            }),\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-pulse\"\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: CATEGORIES.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-md mb-3 font-geistSemiBold\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-2 space-y-2\",\n                                children: category.subcategories.map((subcategory)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: ()=>setActive(!active),\n                                        className: \"flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                        onKeyDown: (e)=>{\n                                            if (e.key === \"Enter\" || e.key === \" \") {\n                                                setActive(!active);\n                                            }\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/docs/\".concat(category.name.toLowerCase(), \"/\").concat(normalizeURL(subcategory.name.toLowerCase())),\n                                                className: (param)=>{\n                                                    let { isActive } = param;\n                                                    return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                                },\n                                                children: subcategory.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 191,\n                                                columnNumber: 25\n                                            }, this),\n                                            subcategory.isNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300\",\n                                                children: \"new\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 204,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, subcategory.name, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 181,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.name, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"a6lWdTicwA3Vmsc1LolK9MiPAm8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNpQjtBQUdJO0FBTzVCO0FBQ3NCO0FBRTVDLE1BQU1VLGFBQWE7SUFDakI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1WLDZIQUFJQTtJQUNaO0lBQ0E7UUFDRVEsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1OLDZIQUFlQTtJQUN2QjtJQUNBO1FBQ0VJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNVCw2SEFBUUE7SUFDaEI7SUFDQTtRQUNFTyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVIsNkhBQVFBO0lBQ2hCO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1QLDZIQUFVQTtJQUNsQjtDQUNEO0FBRUQsTUFBTVEsa0JBQWtCO0lBQ3RCO1FBQ0VILE1BQU07UUFDTkksZUFBZTtZQUFDO1lBQWdCO1lBQWdCO1NBQWdCO0lBQ2xFO0NBQ0Q7QUFFRCxTQUFTQyxhQUFhQyxHQUFXO0lBQy9CLE9BQU9BLElBQUlDLE9BQU8sQ0FBQyxRQUFRO0FBQzdCO0FBRU8sU0FBU0M7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1hLFdBQVdyQiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDc0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBOzZCQUFDO1lBQ1JtQjtRQUNGOzRCQUFHLEVBQUU7SUFFTCxNQUFNQSxvQkFBb0I7UUFDeEIsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxXQUFXO1FBQ2pCLE1BQU1DLE9BQU87UUFFYixNQUFNYixNQUFNLGdDQUE2Q1ksT0FBYkQsV0FBVSxLQUF3QkUsT0FBckJE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QXRCL0lJLFlBQVkxQyxJQUFJOzs7OztnQ0E0QjNCOzs7Ozs7O3VCQXBDTXVDLFNBQVN2QyxJQUFJOzs7OztnQkF3QzNCOzs7Ozs7OztBQUtWO0dBbktnQlE7O1FBRUdsQix3REFBV0E7OztLQUZka0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmlhcnNhamVlYi9EZXNrdG9wL0JldGFmaWVyL3RyZW5kdWkvY29tcG9uZW50cy9kb2NzL3NpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kb2NzL3NlYXJjaFwiO1xuaW1wb3J0IHtcbiAgSGFuZCxcbiAgRmlsZVRleHQsXG4gIEJvb2tPcGVuLFxuICBIZWxwQ2lyY2xlLFxuICBBcnJvd0Rvd25Ub0xpbmUsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAge1xuICAgIG5hbWU6IFwiSW50cm9kdWN0aW9uXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogSGFuZCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW5zdGFsbGF0aW9uXCIsXG4gICAgaHJlZjogXCIjaW5zdGFsbGF0aW9uXCIsXG4gICAgaWNvbjogQXJyb3dEb3duVG9MaW5lLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgaHJlZjogXCIjZG9jc1wiLFxuICAgIGljb246IEZpbGVUZXh0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21wb25lbnRzXCIsXG4gICAgaHJlZjogXCIjY29tcG9uZW50c1wiLFxuICAgIGljb246IEJvb2tPcGVuLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTcG9uc29yXCIsXG4gICAgaHJlZjogXCIjc3BvbnNvclwiLFxuICAgIGljb246IEhlbHBDaXJjbGUsXG4gIH0sXG5dO1xuXG5jb25zdCBHRVRUSU5HX1NUQVJURUQgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkludHJvZHVjdGlvblwiLCBcIkluc3RhbGxhdGlvblwiLCBcIkRvY3VtZW50YXRpb25cIl0sXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBub3JtYWxpemVVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1xccysvZywgXCItXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IFtjb21wb25lbnRzRGF0YSwgc2V0Y29tcG9uZW50c0RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q29tcG9uZW50c0RhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldENvbXBvbmVudHNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9Pd25lciA9IFwidHJlbmQtdWlcIjtcbiAgICBjb25zdCByZXBvTmFtZSA9IFwidHJlbmR1aS1yZWFjdC1uYXRpdmVcIjtcbiAgICBjb25zdCBwYXRoID0gXCJzcmMvY29tcG9uZW50c1wiO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtyZXBvT3duZXJ9LyR7cmVwb05hbWV9L2NvbnRlbnRzLyR7cGF0aH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAvLyBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgLy8gSW5jbHVkZSBhIEdpdEh1YiBwZXJzb25hbCBhY2Nlc3MgdG9rZW4gaWYgeW91IGhpdCByYXRlIGxpbWl0c1xuICAgICAgICAvLyAgIC8vIEF1dGhvcml6YXRpb246IGB0b2tlbiBZT1VSX1BFUlNPTkFMX0FDQ0VTU19UT0tFTmAsXG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggY29tcG9uZW50IGxpc3Q6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGRhdGFcbiAgICAgICAgLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnR5cGUgPT09IFwiZGlyXCIpIC8vIEVuc3VyZSBpdCdzIGEgZGlyZWN0b3J5IChjb21wb25lbnQgZm9sZGVyKVxuICAgICAgICAubWFwKChmb2xkZXI6IGFueSkgPT4gKHsgbmFtZTogZm9sZGVyLm5hbWUsIGlzTmV3OiBmYWxzZSB9KSk7XG4gICAgICBzZXRjb21wb25lbnRzRGF0YShjb21wb25lbnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbXBvbmVudCBsaXN0OlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IENBVEVHT1JJRVMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJDb21wb25lbnRzXCIsXG4gICAgICBzdWJjYXRlZ29yaWVzOiBjb21wb25lbnRzRGF0YSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3BvbnNvclwiLFxuICAgICAgc3ViY2F0ZWdvcmllczogW3sgbmFtZTogXCJTcG9uc29yXCIsIGlzTmV3OiBmYWxzZSB9XSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCBwLTQgc206cC02IGxnOnAtOFwiPlxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICB7LyogPG5hdiBjbGFzc05hbWU9XCJtdC00IGZsZXgtMSBzcGFjZS15LTJcIj5cbiAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gaXRlbS5ocmVmO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICB2YXJpYW50PXtpc0FjdGl2ZSA/IFwic2Vjb25kYXJ5XCIgOiBcImdob3N0XCJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJ3LWZ1bGwgcC00IHNtOnAtNSBsZzpwLTYganVzdGlmeS1zdGFydCBzaGFkb3ctbGcgcm91bmRlZC1sZyBib3JkZXItMiBkYXJrOmJvcmRlci1ub25lIGRhcms6YmctbmV1dHJhbC05MDAgZGFyazpob3ZlcjpiZy1uZXV0cmFsLTgwMFwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gXCJiZy1hY2NlbnRcIiA6IFwiaG92ZXI6YmctYWNjZW50LzUwXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgYXNDaGlsZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IHNtOmgtNSBzbTp3LTVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9uYXY+ICovfVxuICAgICAge0dFVFRJTkdfU1RBUlRFRC5tYXAoXG4gICAgICAgIChjYXRlZ29yeTogeyBuYW1lOiBzdHJpbmc7IHN1YmNhdGVnb3JpZXM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbWQgbWItMyBmb250LWdlaXN0U2VtaUJvbGRcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1sLTIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5LnN1YmNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LW1heCBib3JkZXItZ3JheS01MDAgcHgtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlci1sLTJcIlxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jcy8ke25vcm1hbGl6ZVVSTChzdWJjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKX1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7bG9hZGVyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIj48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge0NBVEVHT1JJRVMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1tZCBtYi0zIGZvbnQtZ2Vpc3RTZW1pQm9sZFwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWwtMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1tYXggY3Vyc29yLXBvaW50ZXIgZ2FwLXgtMyBib3JkZXItZ3JheS01MDAgcHgtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlci1sLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2NzLyR7Y2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfS8ke25vcm1hbGl6ZVVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeS5pc05ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIi1weS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDAgYmctZ3JlZW4tMzAwLzIwIHB4LTMgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC1ncmVlbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwiU2VhcmNoIiwiSGFuZCIsIkZpbGVUZXh0IiwiQm9va09wZW4iLCJIZWxwQ2lyY2xlIiwiQXJyb3dEb3duVG9MaW5lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJuYXZpZ2F0aW9uIiwibmFtZSIsImhyZWYiLCJpY29uIiwiR0VUVElOR19TVEFSVEVEIiwic3ViY2F0ZWdvcmllcyIsIm5vcm1hbGl6ZVVSTCIsInVybCIsInJlcGxhY2UiLCJTaWRlYmFyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwicGF0aG5hbWUiLCJjb21wb25lbnRzRGF0YSIsInNldGNvbXBvbmVudHNEYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ2V0Q29tcG9uZW50c0RhdGEiLCJyZXBvT3duZXIiLCJyZXBvTmFtZSIsInBhdGgiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJjb21wb25lbnRzIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJtYXAiLCJmb2xkZXIiLCJpc05ldyIsImVycm9yIiwiY29uc29sZSIsIkNBVEVHT1JJRVMiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRlZ29yeSIsImgxIiwidWwiLCJzdWJjYXRlZ29yeSIsImxpIiwib25DbGljayIsIm9uS2V5RG93biIsImUiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImlzQWN0aXZlIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/docs/sidebar.tsx\n"));

/***/ })

});