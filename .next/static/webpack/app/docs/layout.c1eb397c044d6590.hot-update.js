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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/docs/search */ \"(app-pages-browser)/./components/docs/search.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/hand.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/file-text.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDownToLine,BookOpen,FileText,Hand,HelpCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-help.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSidebarChange */ \"(app-pages-browser)/./hooks/useSidebarChange.tsx\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Introduction\",\n        href: \"#\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Installation\",\n        href: \"#installation\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        name: \"Documentation\",\n        href: \"#docs\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        name: \"Components\",\n        href: \"#components\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        name: \"Sponsor\",\n        href: \"#sponsor\",\n        icon: _barrel_optimize_names_ArrowDownToLine_BookOpen_FileText_Hand_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    }\n];\nconst GETTING_STARTED = [\n    {\n        name: \"Getting Started\",\n        subcategories: [\n            \"Introduction\",\n            \"Installation\",\n            \"CLI\"\n        ]\n    }\n];\nfunction normalizeURL(url) {\n    return url.replace(/\\s+/g, \"-\");\n}\nfunction Sidebar() {\n    var _componentsData_;\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const { activeRoute, setActiveRoute } = (0,_hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [componentsData, setcomponentsData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            getComponentsData();\n        }\n    }[\"Sidebar.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Sidebar.useEffect\": ()=>{\n            let active = pathName;\n            if (pathName.includes(\"/docs/components\")) {\n                active = pathName.split(\"/docs/components/\")[1];\n            } else if (pathName.includes(\"/docs\")) {\n                active = pathName.split(\"/docs/\")[1];\n            }\n            setActiveRoute(active);\n        }\n    }[\"Sidebar.useEffect\"], [\n        pathName,\n        setActiveRoute\n    ]);\n    const getComponentsData = async ()=>{\n        const repoOwner = \"trend-ui\";\n        const repoName = \"trendui-react-native\";\n        const path = \"src/components\";\n        const url = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(path);\n        try {\n            const res = await fetch(url, {\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch component list: \".concat(res.statusText));\n            }\n            const data = await res.json();\n            const components = data.filter((item)=>item.type === \"dir\") // Ensure it's a directory (component folder)\n            .map((folder)=>({\n                    name: folder.name,\n                    isNew: false\n                }));\n            setcomponentsData(components);\n            setLoader(false);\n        } catch (error) {\n            console.error(\"Error fetching component list:\", error);\n            return [];\n        }\n    };\n    const CATEGORIES = [\n        {\n            name: \"Components\",\n            subcategories: componentsData\n        },\n        {\n            name: \"Sponsor\",\n            subcategories: [\n                {\n                    name: \"Sponsor\",\n                    isNew: false\n                }\n            ]\n        }\n    ];\n    console.log((_componentsData_ = componentsData[0]) === null || _componentsData_ === void 0 ? void 0 : _componentsData_.name, activeRoute);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-col p-4 sm:p-6 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_docs_search__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            GETTING_STARTED.map((category)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-md mb-3 font-geistSemiBold\",\n                            children: category.name\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"ml-2 space-y-2\",\n                            children: category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: ()=>setActive(!active),\n                                    className: \"w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                    onKeyDown: (e)=>{\n                                        if (e.key === \"Enter\" || e.key === \" \") {\n                                            setActive(!active);\n                                        }\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/docs/\".concat(normalizeURL(subcategory.toLowerCase())),\n                                        className: (param)=>{\n                                            let { isActive } = param;\n                                            return isActive ? \"text-black dark:text-white\" : \"border-gray-700\";\n                                        },\n                                        children: subcategory\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 21\n                                    }, this)\n                                }, subcategory, false, {\n                                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, category.name, true, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 13\n                }, this);\n            }),\n            loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%]  h-[40vh] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-blue-600\"\n                }, void 0, false, {\n                    fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: CATEGORIES.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-md mb-3 font-geistSemiBold\",\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 194,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-2 space-y-2\",\n                                children: category.subcategories.map((subcategory)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        onClick: ()=>setActive(!active),\n                                        className: \"flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2\",\n                                        onKeyDown: (e)=>{\n                                            if (e.key === \"Enter\" || e.key === \" \") {\n                                                setActive(!active);\n                                            }\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/docs/\".concat(category.name.toLowerCase(), \"/\").concat(normalizeURL(subcategory.name.toLowerCase())),\n                                                className: \"border-gray-700 \".concat(activeRoute === category.name ? \"text-white\" : \"text-red-500\"),\n                                                children: subcategory.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 210,\n                                                columnNumber: 25\n                                            }, this),\n                                            subcategory.isNew && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300\",\n                                                children: \"new\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                                lineNumber: 223,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, subcategory.name, true, {\n                                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                        lineNumber: 200,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                                lineNumber: 197,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, category.name, true, {\n                        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shahriarsajeeb/Desktop/Betafier/trendui/components/docs/sidebar.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"xKEJ7w1vbFXN+EZy9h7t+1T9omY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _hooks_useSidebarChange__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZG9jcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkI7QUFDaUI7QUFHSTtBQU81QjtBQUNzQjtBQUNZO0FBRXhELE1BQU1XLGFBQWE7SUFDakI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1YLDZIQUFJQTtJQUNaO0lBQ0E7UUFDRVMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1QLDZIQUFlQTtJQUN2QjtJQUNBO1FBQ0VLLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNViw2SEFBUUE7SUFDaEI7SUFDQTtRQUNFUSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVQsNkhBQVFBO0lBQ2hCO0lBQ0E7UUFDRU8sTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU1SLDhIQUFVQTtJQUNsQjtDQUNEO0FBRUQsTUFBTVMsa0JBQWtCO0lBQ3RCO1FBQ0VILE1BQU07UUFDTkksZUFBZTtZQUFDO1lBQWdCO1lBQWdCO1NBQU07SUFDeEQ7Q0FDRDtBQUVELFNBQVNDLGFBQWFDLEdBQVc7SUFDL0IsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLFFBQVE7QUFDN0I7QUFFTyxTQUFTQztRQWlFRkM7O0lBaEVaLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZSxXQUFXdkIsNERBQVdBO0lBQzVCLE1BQU0sRUFBRXdCLFdBQVcsRUFBRUMsY0FBYyxFQUFFLEdBQUdoQixtRUFBZ0JBO0lBQ3hELE1BQU0sQ0FBQ1csZ0JBQWdCTSxrQkFBa0IsR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkQsTUFBTSxDQUFDbUIsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQTs2QkFBQztZQUNSc0I7UUFDRjs0QkFBRyxFQUFFO0lBRUx0QixnREFBU0E7NkJBQUM7WUFDUixJQUFJb0IsU0FBU0o7WUFFYixJQUFJQSxT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RyxDQUFDLENBQUNZO29DQUMzQixxQkFDRSw4REFBQ0M7d0NBRUNDLFNBQVMsSUFBTWhDLFVBQVUsQ0FBQ0Q7d0NBQzFCMkIsV0FBVTt3Q0FDVk8sV0FBVyxDQUFDQzs0Q0FDVixJQUFJQSxFQUFFQyxHQUFHLEtBQUssV0FBV0QsRUFBRUMsR0FBRyxLQUFLLEtBQUs7Z0RBQ3RDbkMsVUFBVSxDQUFDRDs0Q0FDYjt3Q0FDRjs7MERBRUEsOERBQUM1QixpREFBSUE7Z0RBQ0hhLE1BQU0sU0FBd0NJLE9BQS9CdUMsU0FBUzVDLElBQUksQ0FBQ3FELFdBQVcsSUFBRyxLQUV6QyxPQUY0Q2hELGFBQzVDMEMsWUFBWS9DLElBQUksQ0FBQ3FELFdBQVc7Z0RBRTlCVixXQUFXLG1CQUlWLE9BSEM5QixnQkFBZ0IrQixTQUFTNUMsSUFBSSxHQUN6QixlQUNBOzBEQUdMK0MsWUFBWS9DLElBQUk7Ozs7Ozs0Q0FFbEIrQyxZQUFZVixLQUFLLGtCQUNoQiw4REFBQ2tCO2dEQUFFWixXQUFVOzBEQUFxSTs7Ozs7Ozt1Q0F0Qi9JSSxZQUFZL0MsSUFBSTs7Ozs7Z0NBNEIzQjs7Ozs7Ozt1QkFwQ000QyxTQUFTNUMsSUFBSTs7Ozs7Z0JBd0MzQjs7Ozs7Ozs7QUFLVjtHQXJMZ0JROztRQUVHbkIsd0RBQVdBO1FBQ1lTLCtEQUFnQkE7OztLQUgxQ1UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFocmlhcnNhamVlYi9EZXNrdG9wL0JldGFmaWVyL3RyZW5kdWkvY29tcG9uZW50cy9kb2NzL3NpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kb2NzL3NlYXJjaFwiO1xuaW1wb3J0IHtcbiAgSGFuZCxcbiAgRmlsZVRleHQsXG4gIEJvb2tPcGVuLFxuICBIZWxwQ2lyY2xlLFxuICBBcnJvd0Rvd25Ub0xpbmUsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTaWRlYmFyQ2hhbmdlIGZyb20gXCJAL2hvb2tzL3VzZVNpZGViYXJDaGFuZ2VcIjtcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAge1xuICAgIG5hbWU6IFwiSW50cm9kdWN0aW9uXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogSGFuZCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW5zdGFsbGF0aW9uXCIsXG4gICAgaHJlZjogXCIjaW5zdGFsbGF0aW9uXCIsXG4gICAgaWNvbjogQXJyb3dEb3duVG9MaW5lLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgaHJlZjogXCIjZG9jc1wiLFxuICAgIGljb246IEZpbGVUZXh0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21wb25lbnRzXCIsXG4gICAgaHJlZjogXCIjY29tcG9uZW50c1wiLFxuICAgIGljb246IEJvb2tPcGVuLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTcG9uc29yXCIsXG4gICAgaHJlZjogXCIjc3BvbnNvclwiLFxuICAgIGljb246IEhlbHBDaXJjbGUsXG4gIH0sXG5dO1xuXG5jb25zdCBHRVRUSU5HX1NUQVJURUQgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgIHN1YmNhdGVnb3JpZXM6IFtcIkludHJvZHVjdGlvblwiLCBcIkluc3RhbGxhdGlvblwiLCBcIkNMSVwiXSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVSTCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgeyBhY3RpdmVSb3V0ZSwgc2V0QWN0aXZlUm91dGUgfSA9IHVzZVNpZGViYXJDaGFuZ2UoKTtcbiAgY29uc3QgW2NvbXBvbmVudHNEYXRhLCBzZXRjb21wb25lbnRzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb21wb25lbnRzRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYWN0aXZlID0gcGF0aE5hbWU7XG5cbiAgICBpZiAocGF0aE5hbWUuaW5jbHVkZXMoXCIvZG9jcy9jb21wb25lbnRzXCIpKSB7XG4gICAgICBhY3RpdmUgPSBwYXRoTmFtZS5zcGxpdChcIi9kb2NzL2NvbXBvbmVudHMvXCIpWzFdO1xuICAgIH0gZWxzZSBpZiAocGF0aE5hbWUuaW5jbHVkZXMoXCIvZG9jc1wiKSkge1xuICAgICAgYWN0aXZlID0gcGF0aE5hbWUuc3BsaXQoXCIvZG9jcy9cIilbMV07XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlUm91dGUoYWN0aXZlKTtcbiAgfSwgW3BhdGhOYW1lLCBzZXRBY3RpdmVSb3V0ZV0pO1xuXG4gIGNvbnN0IGdldENvbXBvbmVudHNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9Pd25lciA9IFwidHJlbmQtdWlcIjtcbiAgICBjb25zdCByZXBvTmFtZSA9IFwidHJlbmR1aS1yZWFjdC1uYXRpdmVcIjtcbiAgICBjb25zdCBwYXRoID0gXCJzcmMvY29tcG9uZW50c1wiO1xuXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtyZXBvT3duZXJ9LyR7cmVwb05hbWV9L2NvbnRlbnRzLyR7cGF0aH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAvLyBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgLy8gSW5jbHVkZSBhIEdpdEh1YiBwZXJzb25hbCBhY2Nlc3MgdG9rZW4gaWYgeW91IGhpdCByYXRlIGxpbWl0c1xuICAgICAgICAvLyAgIC8vIEF1dGhvcml6YXRpb246IGB0b2tlbiBZT1VSX1BFUlNPTkFMX0FDQ0VTU19UT0tFTmAsXG4gICAgICAgIC8vIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggY29tcG9uZW50IGxpc3Q6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc3QgY29tcG9uZW50cyA9IGRhdGFcbiAgICAgICAgLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnR5cGUgPT09IFwiZGlyXCIpIC8vIEVuc3VyZSBpdCdzIGEgZGlyZWN0b3J5IChjb21wb25lbnQgZm9sZGVyKVxuICAgICAgICAubWFwKChmb2xkZXI6IGFueSkgPT4gKHsgbmFtZTogZm9sZGVyLm5hbWUsIGlzTmV3OiBmYWxzZSB9KSk7XG4gICAgICBzZXRjb21wb25lbnRzRGF0YShjb21wb25lbnRzKTtcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb21wb25lbnQgbGlzdDpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDQVRFR09SSUVTID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tcG9uZW50c1wiLFxuICAgICAgc3ViY2F0ZWdvcmllczogY29tcG9uZW50c0RhdGEsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNwb25zb3JcIixcbiAgICAgIHN1YmNhdGVnb3JpZXM6IFt7IG5hbWU6IFwiU3BvbnNvclwiLCBpc05ldzogZmFsc2UgfV0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zb2xlLmxvZyhjb21wb25lbnRzRGF0YVswXT8ubmFtZSwgYWN0aXZlUm91dGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCBwLTQgc206cC02IGxnOnAtOFwiPlxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICB7LyogPG5hdiBjbGFzc05hbWU9XCJtdC00IGZsZXgtMSBzcGFjZS15LTJcIj5cbiAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gaXRlbS5ocmVmO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICB2YXJpYW50PXtpc0FjdGl2ZSA/IFwic2Vjb25kYXJ5XCIgOiBcImdob3N0XCJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJ3LWZ1bGwgcC00IHNtOnAtNSBsZzpwLTYganVzdGlmeS1zdGFydCBzaGFkb3ctbGcgcm91bmRlZC1sZyBib3JkZXItMiBkYXJrOmJvcmRlci1ub25lIGRhcms6YmctbmV1dHJhbC05MDAgZGFyazpob3ZlcjpiZy1uZXV0cmFsLTgwMFwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gXCJiZy1hY2NlbnRcIiA6IFwiaG92ZXI6YmctYWNjZW50LzUwXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgYXNDaGlsZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IHNtOmgtNSBzbTp3LTVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9uYXY+ICovfVxuICAgICAge0dFVFRJTkdfU1RBUlRFRC5tYXAoXG4gICAgICAgIChjYXRlZ29yeTogeyBuYW1lOiBzdHJpbmc7IHN1YmNhdGVnb3JpZXM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbWQgbWItMyBmb250LWdlaXN0U2VtaUJvbGRcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1sLTIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5LnN1YmNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LW1heCBib3JkZXItZ3JheS01MDAgcHgtMyB0ZXh0LXNtIHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOmJvcmRlci1sLTJcIlxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jcy8ke25vcm1hbGl6ZVVSTChzdWJjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKX1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7bG9hZGVyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzkwJV0gIGgtWzQwdmhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItZ3JheS0zMDAgaC04IHctOCBhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci10LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtDQVRFR09SSUVTLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5uYW1lfSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbWQgbWItMyBmb250LWdlaXN0U2VtaUJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1sLTIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViY2F0ZWdvcmllcy5tYXAoKHN1YmNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YmNhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctbWF4IGN1cnNvci1wb2ludGVyIGdhcC14LTMgYm9yZGVyLWdyYXktNTAwIHB4LTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jcy8ke2NhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKX0vJHtub3JtYWxpemVVUkwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLWdyYXktNzAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUm91dGUgPT09IGNhdGVnb3J5Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXJlZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkuaXNOZXcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCItcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwIGJnLWdyZWVuLTMwMC8yMCBweC0zIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtZ3JlZW4tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlNlYXJjaCIsIkhhbmQiLCJGaWxlVGV4dCIsIkJvb2tPcGVuIiwiSGVscENpcmNsZSIsIkFycm93RG93blRvTGluZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2lkZWJhckNoYW5nZSIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImljb24iLCJHRVRUSU5HX1NUQVJURUQiLCJzdWJjYXRlZ29yaWVzIiwibm9ybWFsaXplVVJMIiwidXJsIiwicmVwbGFjZSIsIlNpZGViYXIiLCJjb21wb25lbnRzRGF0YSIsImxvYWRlciIsInNldExvYWRlciIsInBhdGhOYW1lIiwiYWN0aXZlUm91dGUiLCJzZXRBY3RpdmVSb3V0ZSIsInNldGNvbXBvbmVudHNEYXRhIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ2V0Q29tcG9uZW50c0RhdGEiLCJpbmNsdWRlcyIsInNwbGl0IiwicmVwb093bmVyIiwicmVwb05hbWUiLCJwYXRoIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImRhdGEiLCJqc29uIiwiY29tcG9uZW50cyIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwibWFwIiwiZm9sZGVyIiwiaXNOZXciLCJlcnJvciIsImNvbnNvbGUiLCJDQVRFR09SSUVTIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2F0ZWdvcnkiLCJoMSIsInVsIiwic3ViY2F0ZWdvcnkiLCJsaSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJlIiwia2V5IiwidG9Mb3dlckNhc2UiLCJpc0FjdGl2ZSIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/docs/sidebar.tsx\n"));

/***/ })

});