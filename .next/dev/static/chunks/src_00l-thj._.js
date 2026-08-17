(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BrandLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandSlug",
    ()=>brandSlug,
    "default",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const brandSlug = (brand)=>brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function BrandLogo({ brand, variant = 'compact', showName = false }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initials = brand.split(/\s+/).map((x)=>x[0]).join('').slice(0, 3).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `brand-logo brand-logo-${variant}`,
        children: [
            failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "brand-logo-fallback",
                children: initials
            }, void 0, false, {
                fileName: "[project]/src/components/BrandLogo.tsx",
                lineNumber: 3,
                columnNumber: 340
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `/images/brands/${brandSlug(brand)}.svg`,
                alt: `${brand} brand mark`,
                loading: "lazy",
                decoding: "async",
                onError: ()=>setFailed(true)
            }, void 0, false, {
                fileName: "[project]/src/components/BrandLogo.tsx",
                lineNumber: 3,
                columnNumber: 396
            }, this),
            " ",
            showName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: brand
            }, void 0, false, {
                fileName: "[project]/src/components/BrandLogo.tsx",
                lineNumber: 3,
                columnNumber: 552
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BrandLogo.tsx",
        lineNumber: 3,
        columnNumber: 279
    }, this);
}
_s(BrandLogo, "UVrV75yVidObyTgMyenoosZ++nA=");
_c = BrandLogo;
var _c;
__turbopack_context__.k.register(_c, "BrandLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.mjs [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function ProductCard({ p }) {
    _s();
    const [commerce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommerceSettings"]);
    const { user, addCart, saved, toggleSave, compare, toggleCompare } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const priceVisible = user.status === 'approved' || commerce.guestPricing === 'visible';
    const margin = Math.max(0, Math.round((p.msrp - p.price) / p.msrp * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "wholesale-product-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wpc-media",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-badges",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.tags[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 420
                            }, this),
                            p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "verified",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 484
                                    }, this),
                                    "Verified"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 457
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 392
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: 'wpc-save ' + (saved.includes(p.id) ? 'active' : ''),
                        onClick: ()=>toggleSave(p.id),
                        "aria-label": saved.includes(p.id) ? 'Remove saved product' : 'Save product',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 2,
                            columnNumber: 690
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 520
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "wpc-image",
                        to: '/products/' + p.slug,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p.image,
                            alt: `${p.brand} ${p.name}`,
                            loading: "lazy",
                            decoding: "async"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 2,
                            columnNumber: 760
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 707
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "wpc-quick",
                        to: '/products/' + p.slug,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {}, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 901
                            }, this),
                            "Quick view"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 848
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 2,
                columnNumber: 365
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wpc-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-brand-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: '/brand/' + p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    brand: p.brand,
                                    variant: "micro",
                                    showName: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1057
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 987
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.size
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1117
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 956
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "wpc-title",
                        to: '/products/' + p.slug,
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1144
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "wpc-sku",
                        children: [
                            "SKU ",
                            p.sku,
                            " · ",
                            p.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1212
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-social",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: p.rating
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1307
                                    }, this),
                                    " ★★★★★"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1301
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: `/products/${p.slug}#reviews`,
                                children: [
                                    p.reviews.toLocaleString(),
                                    " ratings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1337
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    p.orders.toLocaleString(),
                                    " ordered*"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1421
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1273
                    }, this),
                    priceVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-pricing",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "$",
                                            p.price.toFixed(2),
                                            "–$",
                                            (p.price * 1.08).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1524
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/ unit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1581
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1519
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("del", {
                                        children: [
                                            "$",
                                            p.msrp.toFixed(2),
                                            " MSRP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1609
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            margin,
                                            "% retail margin"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1645
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1606
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1490
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "wpc-price-lock",
                        to: "/login",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1741
                            }, this),
                            "Sign in to view wholesale pricing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1696
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-commercial",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "MINIMUM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1833
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            p.moq,
                                            " ",
                                            p.moq === 1 ? 'case' : 'cases'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1855
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1828
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "CASE PACK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1907
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            p.casePack,
                                            " units"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1931
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1902
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "DISPATCH"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1967
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: p.leadTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1990
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 1962
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 1796
                    }, this),
                    priceVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-order-value",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {}, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2069
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Opening order"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2077
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    "$",
                                    (p.price * p.casePack * p.moq).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 2036
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-availability",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: p.stock ? 'available' : 'unavailable',
                                children: p.stock ? `${p.stock} cases available` : 'Currently unavailable'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2191
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2318
                                    }, this),
                                    "US inventory"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2312
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 2157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-supplier",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Supplied by"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/supplier/meridian",
                                        children: p.supplier
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2410
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2381
                            }, this),
                            p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2481
                                    }, this),
                                    "Business verified"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2478
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 2351
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wpc-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/supplier/meridian",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2582
                                    }, this),
                                    "Contact"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2552
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !p.stock,
                                onClick: ()=>addCart(p),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2665
                                    }, this),
                                    p.stock ? 'Add case' : 'Unavailable'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2612
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 2523
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "wpc-compare",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: compare.includes(p.id),
                                onChange: ()=>toggleCompare(p.id)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2759
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Compare product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2851
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: [
                                    "+",
                                    Math.min(5, Math.max(2, p.gallery.length - 1)),
                                    " buying options"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 2,
                                columnNumber: 2879
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 2,
                        columnNumber: 2728
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 2,
                columnNumber: 930
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 2,
        columnNumber: 321
    }, this);
}
_s(ProductCard, "LKs/v8hDaiEk6taxFj2NCkhvLZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/Store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const C = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const load = (k, d)=>{
    try {
        return JSON.parse(localStorage.getItem(k) || '') || d;
    } catch  {
        return d;
    }
};
function StoreProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StoreProvider.useState": ()=>load('ms-cart', [])
    }["StoreProvider.useState"]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StoreProvider.useState": ()=>load('ms-saved', [])
    }["StoreProvider.useState"]);
    const [compare, setCompare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StoreProvider.useState": ()=>load('ms-compare', [])
    }["StoreProvider.useState"]);
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StoreProvider.useState": ()=>load('ms-recent', [])
    }["StoreProvider.useState"]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StoreProvider.useState": ()=>load('ms-user', {
                name: 'Guest',
                status: 'guest',
                tier: 'Standard'
            })
    }["StoreProvider.useState"]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>localStorage.setItem('ms-cart', JSON.stringify(cart))
    }["StoreProvider.useEffect"], [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>localStorage.setItem('ms-saved', JSON.stringify(saved))
    }["StoreProvider.useEffect"], [
        saved
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>localStorage.setItem('ms-compare', JSON.stringify(compare))
    }["StoreProvider.useEffect"], [
        compare
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>localStorage.setItem('ms-recent', JSON.stringify(recent))
    }["StoreProvider.useEffect"], [
        recent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>localStorage.setItem('ms-user', JSON.stringify(user))
    }["StoreProvider.useEffect"], [
        user
    ]);
    const showToast = (s)=>{
        setToast(s);
        setTimeout(()=>setToast(''), 2600);
    };
    const addCart = (p, q = 1)=>{
        setCart((c)=>{
            const e = c.find((x)=>x.product.id === p.id);
            return e ? c.map((x)=>x.product.id === p.id ? {
                    ...x,
                    qty: x.qty + q
                } : x) : [
                ...c,
                {
                    product: p,
                    qty: q
                }
            ];
        });
        showToast(`${p.name} added to order`);
    };
    const setQty = (id, q)=>setCart((c)=>q < 1 ? c.filter((x)=>x.product.id !== id) : c.map((x)=>x.product.id === id ? {
                    ...x,
                    qty: q
                } : x));
    const remove = (id)=>setCart((c)=>c.filter((x)=>x.product.id !== id));
    const toggleSave = (id)=>{
        setSaved((s)=>s.includes(id) ? s.filter((x)=>x !== id) : [
                ...s,
                id
            ]);
        showToast('Saved products updated');
    };
    const toggleCompare = (id)=>{
        setCompare((s)=>s.includes(id) ? s.filter((x)=>x !== id) : s.length >= 4 ? (showToast('Compare up to 4 products'), s) : [
                ...s,
                id
            ]);
    };
    const viewProduct = (id)=>setRecent((r)=>[
                id,
                ...r.filter((x)=>x !== id)
            ].slice(0, 12));
    const login = (email)=>{
        setUser({
            name: email.split('@')[0].replace(/[._]/g, ' '),
            status: 'approved',
            tier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommerceSettings"])().defaultTier
        });
        showToast('Welcome back');
    };
    const logout = ()=>setUser({
            name: 'Guest',
            status: 'guest',
            tier: 'Standard'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(C.Provider, {
        value: {
            cart,
            saved,
            compare,
            recent,
            user,
            addCart,
            setQty,
            remove,
            toggleSave,
            toggleCompare,
            viewProduct,
            login,
            logout,
            cartCount: cart.reduce((a, x)=>a + x.qty, 0),
            toast,
            showToast
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/Store.tsx",
        lineNumber: 5,
        columnNumber: 1961
    }, this);
}
_s(StoreProvider, "EbIcUF7Veq2Tkt5ZTjuYAO1SwMU=");
_c = StoreProvider;
const useStore = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(C);
};
_s1(useStore, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brands",
    ()=>brands,
    "categories",
    ()=>categories,
    "hydrateCatalog",
    ()=>hydrateCatalog,
    "persistBrands",
    ()=>persistBrands,
    "persistCatalog",
    ()=>persistCatalog,
    "persistCategories",
    ()=>persistCategories,
    "products",
    ()=>products,
    "resetCatalog",
    ()=>resetCatalog
]);
const imgs = [
    'gucci-beauty-bloom-guilty-flora-perfume--1.webp',
    'gucci-beauty-bloom-guilty-flora-perfume--2.webp',
    'gucci-beauty-bloom-guilty-flora-perfume--3.webp',
    'gucci-beauty-bloom-guilty-flora-perfume--4.webp',
    'gucci-beauty-bloom-guilty-flora-perfume--5.webp',
    'giorgio-armani-beauty-acqua-di-gio-si-my-1.webp',
    'giorgio-armani-beauty-acqua-di-gio-si-my-2.webp',
    'giorgio-armani-beauty-acqua-di-gio-si-my-3.webp',
    'giorgio-armani-beauty-acqua-di-gio-si-my-4.webp',
    'giorgio-armani-beauty-acqua-di-gio-si-my-5.webp',
    'lancome-beauty-la-vie-est-belle-idole-ge-1.webp',
    'lancome-beauty-la-vie-est-belle-idole-ge-2.webp',
    'lancome-beauty-la-vie-est-belle-idole-ge-3.webp',
    'lancome-beauty-la-vie-est-belle-idole-ge-4.webp',
    'lancome-beauty-la-vie-est-belle-idole-ge-5.webp',
    'l-oreal-paris-makeup-skincare-haircare-p-1.webp',
    'l-oreal-paris-makeup-skincare-haircare-p-2.webp',
    'l-oreal-paris-makeup-skincare-haircare-p-3.webp',
    'l-oreal-paris-makeup-skincare-haircare-p-4.webp',
    'l-oreal-paris-makeup-skincare-haircare-p-5.webp',
    'ysl-dior-estee-lauder-clinique-tom-ford--1.webp',
    'ysl-dior-estee-lauder-clinique-tom-ford--2.webp',
    'ysl-dior-estee-lauder-clinique-tom-ford--3.webp',
    'ysl-dior-estee-lauder-clinique-tom-ford--4.webp',
    'ysl-dior-estee-lauder-clinique-tom-ford--5.webp',
    'chanel-dior-yves-saint-laurent-perfume-b-1.webp',
    'chanel-dior-yves-saint-laurent-perfume-b-2.webp',
    'chanel-dior-yves-saint-laurent-perfume-b-3.webp',
    'chanel-dior-yves-saint-laurent-perfume-b-4.webp',
    'chanel-dior-yves-saint-laurent-perfume-b-5.webp',
    'estee-lauder-clinique-mac-cosmetics-prod-1.webp',
    'estee-lauder-clinique-mac-cosmetics-prod-2.webp',
    'estee-lauder-clinique-mac-cosmetics-prod-3.webp',
    'estee-lauder-clinique-mac-cosmetics-prod-4.webp',
    'estee-lauder-clinique-mac-cosmetics-prod-5.webp',
    'versace-burberry-dolce-gabbana-perfume-p-1.webp',
    'versace-burberry-dolce-gabbana-perfume-p-2.webp',
    'versace-burberry-dolce-gabbana-perfume-p-3.webp',
    'versace-burberry-dolce-gabbana-perfume-p-4.webp',
    'versace-burberry-dolce-gabbana-perfume-p-5.webp',
    'calvin-klein-hugo-boss-rabanne-perfume-p-1.webp',
    'calvin-klein-hugo-boss-rabanne-perfume-p-2.webp',
    'calvin-klein-hugo-boss-rabanne-perfume-p-3.webp',
    'calvin-klein-hugo-boss-rabanne-perfume-p-4.webp',
    'calvin-klein-hugo-boss-rabanne-perfume-p-5.webp',
    'maybelline-nyx-cerave-olay-beauty-skinca-1.webp',
    'maybelline-nyx-cerave-olay-beauty-skinca-2.webp',
    'maybelline-nyx-cerave-olay-beauty-skinca-3.webp',
    'maybelline-nyx-cerave-olay-beauty-skinca-4.webp',
    'maybelline-nyx-cerave-olay-beauty-skinca-5.webp',
    'lattafa-perfume-khamrah-asad-yara-produc-1.webp',
    'lattafa-perfume-khamrah-asad-yara-produc-2.webp',
    'lattafa-perfume-khamrah-asad-yara-produc-3.webp',
    'lattafa-perfume-khamrah-asad-yara-produc-4.webp',
    'lattafa-perfume-khamrah-asad-yara-produc-5.webp',
    'lego-mattel-barbie-hot-wheels-toys-produ-1.webp',
    'lego-mattel-barbie-hot-wheels-toys-produ-2.webp',
    'lego-mattel-barbie-hot-wheels-toys-produ-3.webp',
    'lego-mattel-barbie-hot-wheels-toys-produ-4.webp',
    'lego-mattel-barbie-hot-wheels-toys-produ-5.webp',
    'hasbro-nerf-monopoly-transformers-play-d-1.webp',
    'hasbro-nerf-monopoly-transformers-play-d-2.webp',
    'hasbro-nerf-monopoly-transformers-play-d-3.webp',
    'hasbro-nerf-monopoly-transformers-play-d-4.webp',
    'hasbro-nerf-monopoly-transformers-play-d-5.webp',
    'pop-mart-labubu-molly-collectible-figure-1.webp',
    'pop-mart-labubu-molly-collectible-figure-2.webp',
    'pop-mart-labubu-molly-collectible-figure-3.webp',
    'pop-mart-labubu-molly-collectible-figure-4.webp',
    'pop-mart-labubu-molly-collectible-figure-5.webp',
    'stanley-quencher-tumbler-drinkware-produ-1.webp',
    'stanley-quencher-tumbler-drinkware-produ-2.webp',
    'stanley-quencher-tumbler-drinkware-produ-3.webp',
    'stanley-quencher-tumbler-drinkware-produ-4.webp',
    'stanley-quencher-tumbler-drinkware-produ-5.webp'
].map((x)=>'/images/products/' + x);
const base = [
    [
        'Gucci Bloom Eau de Parfum',
        'Gucci',
        'Fragrance'
    ],
    [
        'Gucci Guilty Pour Femme',
        'Gucci',
        'Fragrance'
    ],
    [
        'Gucci Flora Gorgeous Gardenia',
        'Gucci',
        'Fragrance'
    ],
    [
        'Gucci Bloom Parfum',
        'Gucci',
        'Fragrance'
    ],
    [
        'Gucci Flora Gorgeous Orchid',
        'Gucci',
        'Fragrance'
    ],
    [
        'Acqua di Giò Elixir',
        'Giorgio Armani',
        'Fragrance'
    ],
    [
        'Acqua di Giò Profondo',
        'Giorgio Armani',
        'Fragrance'
    ],
    [
        'Acqua di Giò Parfum',
        'Giorgio Armani',
        'Fragrance'
    ],
    [
        'My Way Eau de Parfum',
        'Giorgio Armani',
        'Fragrance'
    ],
    [
        'Sì Eau de Parfum',
        'Giorgio Armani',
        'Fragrance'
    ],
    [
        'Teint Idole Ultra Wear Foundation',
        'Lancôme',
        'Makeup'
    ],
    [
        'La Vie Est Belle Eau de Parfum',
        'Lancôme',
        'Fragrance'
    ],
    [
        'Idôle Eau de Parfum',
        'Lancôme',
        'Fragrance'
    ],
    [
        'Advanced Génifique Serum',
        'Lancôme',
        'Skincare'
    ],
    [
        'Teint Idole Care & Glow',
        'Lancôme',
        'Makeup'
    ],
    [
        "True Match Super-Blendable Foundation",
        "L'Oréal Paris",
        'Makeup'
    ],
    [
        "Voluminous Lash Paradise Mascara",
        "L'Oréal Paris",
        'Makeup'
    ],
    [
        "Revitalift Hyaluronic Acid Serum",
        "L'Oréal Paris",
        'Skincare'
    ],
    [
        "Elvive Hyaluron Plump Serum",
        "L'Oréal Paris",
        'Hair Care'
    ],
    [
        "Excellence Crème Hair Color",
        "L'Oréal Paris",
        'Hair Care'
    ],
    [
        'Black Opium Eau de Parfum',
        'Yves Saint Laurent',
        'Fragrance'
    ],
    [
        'Sauvage Eau de Parfum',
        'Dior',
        'Fragrance'
    ],
    [
        'Advanced Night Repair Serum',
        'Estée Lauder',
        'Skincare'
    ],
    [
        'Clinique Moisture Surge 100H',
        'Clinique',
        'Skincare'
    ],
    [
        'Oud Wood Eau de Parfum',
        'Tom Ford',
        'Fragrance'
    ],
    [
        'Coco Mademoiselle Eau de Parfum',
        'Chanel',
        'Fragrance'
    ],
    [
        'Bleu de Chanel Eau de Parfum',
        'Chanel',
        'Fragrance'
    ],
    [
        'Chance Eau Tendre',
        'Chanel',
        'Fragrance'
    ],
    [
        'N°5 Eau de Parfum',
        'Chanel',
        'Fragrance'
    ],
    [
        'Miss Dior Eau de Parfum',
        'Dior',
        'Fragrance'
    ],
    [
        'J’adore Eau de Parfum',
        'Dior',
        'Fragrance'
    ],
    [
        'Libre Eau de Parfum',
        'Yves Saint Laurent',
        'Fragrance'
    ],
    [
        'Libre Intense Eau de Parfum',
        'Yves Saint Laurent',
        'Fragrance'
    ],
    [
        'Pure Color Envy Lipstick',
        'Estée Lauder',
        'Makeup'
    ],
    [
        'Double Wear Foundation',
        'Estée Lauder',
        'Makeup'
    ],
    [
        'Dramatically Different Moisturizing Lotion',
        'Clinique',
        'Skincare'
    ],
    [
        'Take The Day Off Cleansing Balm',
        'Clinique',
        'Skincare'
    ],
    [
        'Studio Fix Fluid Foundation',
        'MAC Cosmetics',
        'Makeup'
    ],
    [
        'Retro Matte Lipstick',
        'MAC Cosmetics',
        'Makeup'
    ],
    [
        'Eros Eau de Toilette',
        'Versace',
        'Fragrance'
    ],
    [
        'Bright Crystal Eau de Toilette',
        'Versace',
        'Fragrance'
    ],
    [
        'Burberry Her Eau de Parfum',
        'Burberry',
        'Fragrance'
    ],
    [
        'Light Blue Eau de Toilette',
        'Dolce & Gabbana',
        'Fragrance'
    ],
    [
        'CK One Eau de Toilette',
        'Calvin Klein',
        'Fragrance'
    ],
    [
        'Boss Bottled Eau de Toilette',
        'Hugo Boss',
        'Fragrance'
    ],
    [
        '1 Million Eau de Toilette',
        'Rabanne',
        'Fragrance'
    ],
    [
        'Fat Cheeks Liquid Blush',
        'NYX Professional Makeup',
        'Makeup'
    ],
    [
        'The Brow Glue',
        'NYX Professional Makeup',
        'Makeup'
    ],
    [
        'The Marshmellow Primer',
        'NYX Professional Makeup',
        'Makeup'
    ],
    [
        'Hydrating Facial Cleanser',
        'CeraVe',
        'Skincare'
    ],
    [
        'Moisturizing Cream',
        'CeraVe',
        'Skincare'
    ],
    [
        'Regenerist Micro-Sculpting Cream',
        'Olay',
        'Skincare'
    ],
    [
        'SuperStay Matte Ink',
        'Maybelline',
        'Makeup'
    ],
    [
        'Lash Sensational Mascara',
        'Maybelline',
        'Makeup'
    ],
    [
        'Fit Me Matte + Poreless',
        'Maybelline',
        'Makeup'
    ],
    [
        'Asad Eau de Parfum',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Khamrah Eau de Parfum',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Khamrah Qahwa',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Yara Eau de Parfum',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Asad Zanzibar',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Maahir Legacy',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Bade’e Al Oud Honor & Glory',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Fakhar Black',
        'Lattafa',
        'Fragrance'
    ],
    [
        'Polo Blue Eau de Toilette',
        'Ralph Lauren Fragrances',
        'Fragrance'
    ],
    [
        'Romance Eau de Parfum',
        'Ralph Lauren Fragrances',
        'Fragrance'
    ],
    [
        'Red Door Eau de Toilette',
        'Elizabeth Arden',
        'Fragrance'
    ],
    [
        'Green Tea Scent Spray',
        'Elizabeth Arden',
        'Fragrance'
    ],
    [
        'DKNY Be Delicious',
        'DKNY',
        'Fragrance'
    ],
    [
        'Tommy Eau de Toilette',
        'Tommy Hilfiger',
        'Fragrance'
    ],
    [
        'Guess Seductive Homme',
        'Guess',
        'Fragrance'
    ],
    [
        'Cloud Eau de Parfum',
        'Ariana Grande Fragrances',
        'Fragrance'
    ],
    [
        'Daisy Eau de Toilette',
        'Marc Jacobs Fragrances',
        'Fragrance'
    ],
    [
        'Perfect Eau de Parfum',
        'Marc Jacobs Fragrances',
        'Fragrance'
    ],
    [
        'Coach Eau de Parfum',
        'Coach Fragrances',
        'Fragrance'
    ],
    [
        'Coach for Men Eau de Toilette',
        'Coach Fragrances',
        'Fragrance'
    ],
    [
        'Michael Kors Gorgeous!',
        'Michael Kors Fragrances',
        'Fragrance'
    ],
    [
        'Viva La Juicy Eau de Parfum',
        'Juicy Couture',
        'Fragrance'
    ],
    [
        'Bombshell Eau de Parfum',
        'Victoria’s Secret Beauty',
        'Fragrance'
    ],
    [
        'Tease Eau de Parfum',
        'Victoria’s Secret Beauty',
        'Fragrance'
    ],
    [
        'Into the Night Fine Fragrance Mist',
        'Bath & Body Works',
        'Fragrance'
    ],
    [
        'Japanese Cherry Blossom Mist',
        'Bath & Body Works',
        'Fragrance'
    ],
    [
        'EGO Creative Building Block Set',
        'EGO',
        'Toys & Games'
    ],
    [
        'EGO Vehicle Construction Set',
        'EGO',
        'Toys & Games'
    ],
    [
        'EGO Learning Blocks Assortment',
        'EGO',
        'Toys & Games'
    ],
    [
        'EGO Kids Creative Play Kit',
        'EGO',
        'Toys & Games'
    ],
    [
        'Classic Creative Brick Box',
        'LEGO',
        'Toys & Games'
    ],
    [
        'City Construction Set',
        'LEGO',
        'Toys & Games'
    ],
    [
        'Technic Sports Car Set',
        'LEGO',
        'Toys & Games'
    ],
    [
        'Friends Creative Play Set',
        'LEGO',
        'Toys & Games'
    ],
    [
        'DUPLO Building Set',
        'LEGO',
        'Toys & Games'
    ],
    [
        'Barbie Fashion Doll Assortment',
        'Mattel',
        'Toys & Games'
    ],
    [
        'Hot Wheels Basic Car Assortment',
        'Mattel',
        'Toys & Games'
    ],
    [
        'UNO Card Game',
        'Mattel',
        'Toys & Games'
    ],
    [
        'Fisher-Price Learning Toy',
        'Mattel',
        'Toys & Games'
    ],
    [
        'Mega Bloks Building Bag',
        'Mattel',
        'Toys & Games'
    ],
    [
        'Monopoly Classic Board Game',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Nerf Elite Blaster',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Play-Doh Modeling Compound Set',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Transformers Action Figure',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'My Little Pony Figure Set',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Peppa Pig Playset',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Connect 4 Strategy Game',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'Jenga Classic Game',
        'Hasbro',
        'Toys & Games'
    ],
    [
        'The Monsters Labubu Blind Box',
        'POP MART',
        'Collectibles'
    ],
    [
        'Space Molly Series Blind Box',
        'POP MART',
        'Collectibles'
    ],
    [
        'Molly Anniversary Figure',
        'POP MART',
        'Collectibles'
    ],
    [
        'Skullpanda Series Blind Box',
        'POP MART',
        'Collectibles'
    ],
    [
        'Dimoo World Series',
        'POP MART',
        'Collectibles'
    ],
    [
        'Hirono Little Mischief Series',
        'POP MART',
        'Collectibles'
    ],
    [
        'Crybaby Series Figure',
        'POP MART',
        'Collectibles'
    ],
    [
        'Mega Space Molly Figure',
        'POP MART',
        'Collectibles'
    ],
    [
        'Quencher H2.0 FlowState Tumbler',
        'Stanley',
        'Drinkware'
    ],
    [
        'IceFlow Flip Straw Tumbler',
        'Stanley',
        'Drinkware'
    ],
    [
        'Classic Legendary Bottle',
        'Stanley',
        'Drinkware'
    ],
    [
        'Aerolight Transit Mug',
        'Stanley',
        'Drinkware'
    ],
    [
        'Adventure To-Go Food Jar',
        'Stanley',
        'Drinkware'
    ],
    [
        'Everyday Camp Mug',
        'Stanley',
        'Drinkware'
    ],
    [
        'Quick Flip Water Bottle',
        'Stanley',
        'Drinkware'
    ],
    [
        'Stay-Hot French Press',
        'Stanley',
        'Drinkware'
    ],
    [
        'Insulated Travel Tumbler',
        'Generic / Open Market',
        'Drinkware'
    ],
    [
        'Stainless Steel Water Bottle',
        'Generic / Open Market',
        'Drinkware'
    ],
    [
        'Reusable Food Storage Set',
        'Generic / Open Market',
        'Home & Kitchen'
    ],
    [
        'Microfiber Cleaning Cloth Pack',
        'Generic / Open Market',
        'Home & Kitchen'
    ],
    [
        'Kitchen Utensil Set',
        'Generic / Open Market',
        'Home & Kitchen'
    ],
    [
        'Stackable Storage Bins',
        'Generic / Open Market',
        'Home & Kitchen'
    ],
    [
        'LED Desk Lamp',
        'Generic / Open Market',
        'General Merchandise'
    ],
    [
        'USB Charging Cable Assortment',
        'Generic / Open Market',
        'Electronics Accessories'
    ],
    [
        'Wireless Earbud Case',
        'Generic / Open Market',
        'Electronics Accessories'
    ],
    [
        'Phone Stand Assortment',
        'Generic / Open Market',
        'Electronics Accessories'
    ],
    [
        'School Notebook Multipack',
        'Generic / Open Market',
        'Stationery'
    ],
    [
        'Gel Pen Assortment',
        'Generic / Open Market',
        'Stationery'
    ],
    [
        'Art Marker Set',
        'Generic / Open Market',
        'Stationery'
    ],
    [
        'Gift Wrap Paper Assortment',
        'Generic / Open Market',
        'Seasonal'
    ],
    [
        'Holiday Gift Bag Set',
        'Generic / Open Market',
        'Seasonal'
    ],
    [
        'Party Decoration Kit',
        'Generic / Open Market',
        'Seasonal'
    ],
    [
        'Plush Animal Assortment',
        'Generic / Open Market',
        'Toys & Games'
    ],
    [
        'Mini Puzzle Assortment',
        'Generic / Open Market',
        'Toys & Games'
    ],
    [
        'Reusable Shopping Tote Pack',
        'Generic / Open Market',
        'General Merchandise'
    ],
    [
        'Personal Organizer Pouch',
        'Generic / Open Market',
        'General Merchandise'
    ],
    [
        'Travel Accessory Kit',
        'Generic / Open Market',
        'General Merchandise'
    ],
    [
        'Household Essentials Bundle',
        'Generic / Open Market',
        'General Merchandise'
    ]
];
const beautySizes = [
    '30 ml',
    '50 ml',
    '75 ml',
    '100 ml',
    'Gift set',
    'Tester display'
];
const merchandiseSizes = [
    'Single retail pack',
    '2-pack',
    '6-piece assortment',
    '12-piece display',
    'Counter display',
    'Retail bundle'
];
const imagePool = (brand, category)=>{
    if (brand === 'Gucci') return imgs.slice(0, 5);
    if (brand === 'Giorgio Armani') return imgs.slice(5, 10);
    if (brand === 'Lancôme') return imgs.slice(10, 15);
    if (brand === "L'Oréal Paris") return imgs.slice(15, 20);
    if ([
        'Tom Ford'
    ].includes(brand)) return imgs.slice(20, 25);
    if ([
        'Chanel',
        'Dior',
        'Yves Saint Laurent'
    ].includes(brand)) return imgs.slice(25, 30);
    if ([
        'Estée Lauder',
        'Clinique',
        'MAC Cosmetics'
    ].includes(brand)) return imgs.slice(30, 35);
    if ([
        'Versace',
        'Burberry',
        'Dolce & Gabbana'
    ].includes(brand)) return imgs.slice(35, 40);
    if ([
        'Calvin Klein',
        'Hugo Boss',
        'Rabanne',
        'Ralph Lauren Fragrances',
        'Elizabeth Arden',
        'DKNY',
        'Tommy Hilfiger',
        'Guess',
        'Ariana Grande Fragrances',
        'Marc Jacobs Fragrances',
        'Coach Fragrances',
        'Michael Kors Fragrances',
        'Juicy Couture',
        'Victoria’s Secret Beauty',
        'Bath & Body Works'
    ].includes(brand)) return imgs.slice(40, 45);
    if ([
        'NYX Professional Makeup',
        'CeraVe',
        'Olay',
        'Maybelline'
    ].includes(brand)) return imgs.slice(45, 50);
    if (brand === 'Lattafa') return imgs.slice(50, 55);
    if ([
        'EGO',
        'LEGO',
        'Mattel'
    ].includes(brand)) return imgs.slice(55, 60);
    if (brand === 'Hasbro') return imgs.slice(60, 65);
    if (brand === 'POP MART') return imgs.slice(65, 70);
    if (brand === 'Stanley' || category === 'Drinkware') return imgs.slice(70, 75);
    if (category === 'Toys & Games') return imgs.slice(55, 65);
    if (category === 'Collectibles') return imgs.slice(65, 70);
    if ([
        'Home & Kitchen',
        'General Merchandise',
        'Electronics Accessories',
        'Stationery',
        'Seasonal'
    ].includes(category)) return imgs.slice(55, 75);
    return imgs.slice(20, 50);
};
let products = Array.from({
    length: 800
}, (_, i)=>{
    const b = base[i % base.length], v = Math.floor(i / base.length), isBeauty = [
        'Fragrance',
        'Skincare',
        'Makeup',
        'Hair Care',
        'Personal Care',
        'Beauty Tools',
        'Gift Sets'
    ].includes(b[2]), sizes = isBeauty ? beautySizes : merchandiseSizes, size = sizes[v % sizes.length], name = v ? `${b[0]} — ${size}` : b[0], pool = imagePool(b[1], b[2]), main = (i + v) % pool.length;
    return {
        id: i + 1,
        slug: (name + '-' + (i + 1)).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name,
        brand: b[1],
        category: b[2],
        sku: `${b[1].replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase()}-${String(4100 + i)}`,
        price: +((isBeauty ? 12 : 4) + i % 17 * (isBeauty ? 2.35 : 1.45) + v * 2.5).toFixed(2),
        msrp: +((isBeauty ? 42 : 14) + i % 13 * (isBeauty ? 6.25 : 3.2)).toFixed(2),
        casePack: i % 3 === 0 ? 6 : 12,
        moq: i % 5 === 0 ? 2 : 1,
        stock: i % 19 === 0 ? 0 : 24 + i * 7 % 280,
        tags: [
            i % 6 === 0 ? 'Best Seller' : i % 5 === 0 ? 'New' : i % 7 === 0 ? 'Deal' : 'Ready to Ship'
        ],
        tone: [
            '#eaded6',
            '#eee6d5',
            '#ded8ce',
            '#e8dadd'
        ][i % 4],
        image: pool[main],
        gallery: [
            pool[main],
            pool[(main + 1) % pool.length],
            pool[(main + 2) % pool.length],
            pool[(main + 3) % pool.length]
        ],
        rating: +(4.5 + i % 5 * .1).toFixed(1),
        reviews: 1040 + i * 37 % 4200,
        orders: 3080 + i * 53 % 12400,
        metricsAreDemo: true,
        supplier: 'Meridian Supply Co.',
        verified: i % 4 !== 0,
        size,
        origin: 'United States inventory',
        concentration: b[2] === 'Fragrance' ? [
            'Eau de Parfum',
            'Eau de Toilette',
            'Parfum',
            'Body Spray'
        ][i % 4] : 'Not applicable',
        audience: isBeauty ? [
            'Women',
            'Men',
            'Unisex'
        ][i % 3] : [
            'Kids',
            'Family',
            'General'
        ][i % 3],
        fragranceFamily: b[2] === 'Fragrance' ? [
            'Floral',
            'Woody',
            'Fresh',
            'Amber',
            'Citrus'
        ][i % 5] : 'Not applicable',
        leadTime: [
            '2–5 days',
            '3–7 days',
            '1–3 days'
        ][i % 3],
        shelfLife: isBeauty ? [
            '24 months',
            '30 months',
            '36 months'
        ][i % 3] : 'Manufacturer specification',
        documents: i % 3 !== 0,
        sample: i % 4 !== 0,
        returnable: i % 5 !== 0
    };
});
let categories = [
    'Fragrance',
    'Skincare',
    'Makeup',
    'Hair Care',
    'Personal Care',
    'Beauty Tools',
    'Gift Sets',
    'Toys & Games',
    'Collectibles',
    'Drinkware',
    'Home & Kitchen',
    'General Merchandise',
    'Electronics Accessories',
    'Stationery',
    'Seasonal'
];
let brands = [
    ...new Set(products.map((p)=>p.brand))
];
const CATALOG_VERSION = '3';
function hydrateCatalog() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem('ms-admin-catalog-version') === CATALOG_VERSION ? localStorage.getItem('ms-admin-products') : null;
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length) {
                products = parsed;
                brands = [
                    ...new Set(products.map((p)=>p.brand))
                ];
                categories = [
                    ...new Set(products.map((p)=>p.category))
                ];
            }
        }
        const taxonomy = localStorage.getItem('ms-admin-taxonomy');
        if (taxonomy) {
            const parsed = JSON.parse(taxonomy);
            if (Array.isArray(parsed.brands)) brands = parsed.brands;
            if (Array.isArray(parsed.categories)) categories = parsed.categories;
        }
    } catch  {}
}
function persistCatalog(next) {
    products = next;
    brands = [
        ...new Set(next.map((p)=>p.brand))
    ];
    categories = [
        ...new Set(next.map((p)=>p.category))
    ];
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('ms-admin-products', JSON.stringify(next));
        localStorage.setItem('ms-admin-catalog-version', CATALOG_VERSION);
    }
}
function persistBrands(next) {
    brands = next;
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('ms-admin-taxonomy', JSON.stringify({
        brands,
        categories
    }));
}
function persistCategories(next) {
    categories = next;
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('ms-admin-taxonomy', JSON.stringify({
        brands,
        categories
    }));
}
function resetCatalog() {
    if ("TURBOPACK compile-time truthy", 1) localStorage.removeItem('ms-admin-products');
    localStorage.removeItem('ms-admin-catalog-version');
    localStorage.removeItem('ms-admin-taxonomy');
    window.location.reload();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/siteConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendAdminRow",
    ()=>appendAdminRow,
    "defaultCommerceSettings",
    ()=>defaultCommerceSettings,
    "defaultSiteContent",
    ()=>defaultSiteContent,
    "getCommerceSettings",
    ()=>getCommerceSettings,
    "getSiteContent",
    ()=>getSiteContent,
    "loadAdminRows",
    ()=>loadAdminRows,
    "saveAdminRows",
    ()=>saveAdminRows,
    "saveCommerceSettings",
    ()=>saveCommerceSettings,
    "saveSiteContent",
    ()=>saveSiteContent
]);
const defaultSiteContent = {
    heroHeading: 'Better sourcing starts with a partner built to deliver.',
    heroBody: 'Fragrance, beauty, toys, collectibles, drinkware and everyday merchandise—organized for qualified wholesale buyers and backed by decades of distribution experience.',
    announcement: 'Serving qualified businesses with professional wholesale distribution.',
    promoHeading: 'Fresh inventory for the next retail moment.',
    promoBody: 'Explore new fragrance, beauty, toys, collectibles, drinkware and everyday merchandise selected for modern retail assortments.',
    footerDescription: 'A modern wholesale partner built on decades of distribution experience. Serving qualified retailers across fragrance, beauty, toys, collectibles, drinkware and general merchandise.',
    supportEmail: 'support@example.com'
};
const defaultCommerceSettings = {
    guestPricing: 'hidden',
    defaultTier: 'Standard Wholesale',
    minimumOrder: 500,
    lowStockThreshold: 30,
    applicationApproval: 'manual',
    verifiedReviews: true,
    market: 'United States',
    currency: 'USD',
    language: 'English'
};
const read = (key, fallback)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return {
            ...fallback,
            ...JSON.parse(localStorage.getItem(key) || '{}')
        };
    } catch  {
        return fallback;
    }
};
const getSiteContent = ()=>read('ms-admin-site-content', defaultSiteContent);
const saveSiteContent = (value)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('ms-admin-site-content', JSON.stringify(value));
        window.dispatchEvent(new Event('meridian-content-updated'));
    }
};
const getCommerceSettings = ()=>read('ms-admin-commerce-settings', defaultCommerceSettings);
const saveCommerceSettings = (value)=>{
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('ms-admin-commerce-settings', JSON.stringify(value));
};
const loadAdminRows = (key, fallback)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const v = JSON.parse(localStorage.getItem('ms-admin-' + key) || 'null');
        return Array.isArray(v) ? v : fallback;
    } catch  {
        return fallback;
    }
};
const saveAdminRows = (key, rows)=>{
    if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('ms-admin-' + key, JSON.stringify(rows));
};
const appendAdminRow = (key, row)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const current = loadAdminRows(key, []);
    saveAdminRows(key, [
        row,
        ...current
    ]);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/DiscoveryPages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandDirectory",
    ()=>BrandDirectory,
    "BrandPage",
    ()=>BrandPage,
    "CategoryPage",
    ()=>CategoryPage,
    "SupplierDirectory",
    ()=>SupplierDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-search.mjs [app-client] (ecmascript) <export default as PackageSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BrandLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const slug = (s)=>s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
function BrandPage() {
    _s();
    const { slug: brandSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const brand = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brands"].find((b)=>slug(b) === brandSlug) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brands"][0];
    const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.brand === brand);
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-store",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand-mark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                brand: brand,
                                variant: "hero"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 317
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "WHOLESALE BRAND SHOWROOM"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 369
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: brand
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 420
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Browse available ",
                                        brand,
                                        " references prepared for qualified wholesale purchasing."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 436
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Trademark belongs to its respective owner · Relationship status requires verification"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 523
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 364
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>showToast('Brand saved to your account'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 690
                                }, this),
                                " Follow brand"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 627
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 3,
                    columnNumber: 262
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 3,
                columnNumber: 233
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "brand-nav",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#products",
                            children: "Products"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 786
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#story",
                            children: "Brand information"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 818
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#terms",
                            children: "Wholesale terms"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 856
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#documents",
                            children: "Documents"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 3,
                            columnNumber: 892
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 3,
                    columnNumber: 759
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 3,
                columnNumber: 732
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-body container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-category-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Shop this brand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1022
                                    }, this),
                                    [
                                        ...new Set(list.map((p)=>p.category))
                                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: `/shop?brand=${encodeURIComponent(brand)}&category=${x}`,
                                            children: x
                                        }, x, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 3,
                                            columnNumber: 1090
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 986
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-feature",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "FEATURED ASSORTMENT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Retail-recognized products, organized for wholesale."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1252
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Compare pack sizes, case quantities and protected pricing from one brand-focused workspace."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1313
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#products",
                                                children: [
                                                    "View wholesale assortment ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 1457
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1411
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1215
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: list.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.image
                                            }, p.id, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1509
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1480
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 1184
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "products",
                                className: "brand-products-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "AVAILABLE PRODUCTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1610
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    list.length,
                                                    " wholesale listings"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1655
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1605
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Featured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1710
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Best selling"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1735
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Newest"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1764
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1702
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 1554
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-grid brand-product-grid",
                                children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        p: p
                                    }, p.id, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1864
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 1802
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "story",
                                className: "brand-story",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "BRAND INFORMATION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1947
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "About ",
                                            brand
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1991
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "This showroom organizes products associated with the referenced trademark for wholesale discovery. Final brand descriptions, approved marketing assets and relationship claims should be supplied through the company’s authorized asset and legal-review process."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 2013
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Primary categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2289
                                                    }, this),
                                                    [
                                                        ...new Set(list.map((p)=>p.category))
                                                    ].join(', ')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2283
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Catalog references"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2377
                                                    }, this),
                                                    list.length,
                                                    " listings"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2371
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Inventory model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2437
                                                    }, this),
                                                    "Case-level wholesale"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2431
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 2278
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 1903
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 3,
                        columnNumber: 980
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        id: "terms",
                        className: "brand-terms",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Wholesale ordering"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 2551
                            }, this),
                            [
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__["PackageSearch"],
                                    'Opening order',
                                    `From ${Math.min(...list.map((p)=>p.moq))} case`
                                ],
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                    'Ships from',
                                    'United States inventory'
                                ],
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
                                    'Dispatch',
                                    'Typically 2–7 business days'
                                ],
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
                                    'Pricing',
                                    'Approved accounts only'
                                ]
                            ].map(([I, a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {}, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 3,
                                            columnNumber: 2838
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: a
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2848
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: b
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2866
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 3,
                                            columnNumber: 2842
                                        }, this)
                                    ]
                                }, a, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 3,
                                    columnNumber: 2825
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "btn dark full",
                                to: "/apply",
                                children: "Apply to view pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 2891
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "btn inquiry full",
                                to: "/request-quote",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3018
                                    }, this),
                                    " Request brand quote"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 2963
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Terms shown are demonstration settings and remain subject to account and inventory verification."
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 3,
                                columnNumber: 3061
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 3,
                        columnNumber: 2509
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 3,
                columnNumber: 938
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DiscoveryPages.tsx",
        lineNumber: 3,
        columnNumber: 204
    }, this);
}
_s(BrandPage, "emnLAS5lzxmIAsjr3SQH4Tm8phs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = BrandPage;
function CategoryPage() {
    _s1();
    const { slug: catSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const cat = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find((c)=>slug(c) === catSlug) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][0];
    const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === cat);
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].filter((x)=>x !== cat).slice(0, 6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-landing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "category-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "HOME / CATEGORIES / ",
                                        cat.toUpperCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 338
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        cat,
                                        " wholesale marketplace"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 384
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Explore products, brands, case packs and sourcing options for qualified business buyers."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 420
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    className: "btn primary",
                                    to: `/shop?category=${encodeURIComponent(cat)}`,
                                    children: [
                                        "Browse all ",
                                        cat.toLowerCase(),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 4,
                                            columnNumber: 631
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 521
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 4,
                            columnNumber: 333
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "category-hero-products",
                            children: list.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: p.image
                                }, p.id, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 721
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 4,
                            columnNumber: 657
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 4,
                    columnNumber: 306
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 4,
                columnNumber: 271
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "category-content container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Browse beauty categories"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 831
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    className: x === cat ? 'active' : '',
                                    to: `/category/${slug(x)}`,
                                    children: [
                                        x,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 4,
                                            columnNumber: 958
                                        }, this)
                                    ]
                                }, x, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 4,
                                    columnNumber: 881
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 4,
                        columnNumber: 824
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "category-paths",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    "Explore ",
                                                    cat
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1062
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/shop?category=${cat}`,
                                                children: "View all products →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1084
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1031
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            'Best sellers',
                                            'New arrivals',
                                            'Ready to ship',
                                            'Low minimums',
                                            'Premium assortment',
                                            'Volume opportunities'
                                        ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/shop?category=${cat}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: String(i + 1).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1318
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: x
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1360
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Discover products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1370
                                                    }, this)
                                                ]
                                            }, x, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1275
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 995
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "category-rankings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                "Popular in ",
                                                cat
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1497
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1466
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "product-grid",
                                        children: list.slice(0, 8).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                p: p
                                            }, p.id, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1582
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1528
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 1427
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "category-brands",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Featured brands"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1699
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1668
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            ...new Set(list.map((p)=>p.brand))
                                        ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/brand/${slug(b)}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        brand: b,
                                                        variant: "compact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1816
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: b
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1856
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            list.filter((p)=>p.brand === b).length,
                                                            " listings"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1866
                                                    }, this)
                                                ]
                                            }, b, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1777
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1729
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 1631
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "buying-guide",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "CATEGORY BUYING GUIDE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1990
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    "Build a commercially balanced ",
                                                    cat.toLowerCase(),
                                                    " assortment."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 2038
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1985
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            [
                                                'Compare unit economics',
                                                'Review wholesale price, MSRP, case pack and expected margin together.'
                                            ],
                                            [
                                                'Plan opening quantities',
                                                'Use MOQ and volume tiers to balance assortment breadth with inventory depth.'
                                            ],
                                            [
                                                'Verify documentation',
                                                'Confirm product, batch and brand-relationship documentation where required.'
                                            ],
                                            [
                                                'Build replenishment rules',
                                                'Use saved products and reorder tools to maintain proven sellers.'
                                            ]
                                        ].map(([a, b], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "0",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 2560
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: a
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 2579
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: b
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 2591
                                                    }, this)
                                                ]
                                            }, a, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 4,
                                                columnNumber: 2543
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 2114
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 1951
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 4,
                        columnNumber: 989
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 4,
                columnNumber: 776
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "related-categories container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Continue exploring"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 4,
                            columnNumber: 2727
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 4,
                        columnNumber: 2696
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: related.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: `/category/${slug(x)}`,
                                children: [
                                    x,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 4,
                                        columnNumber: 2826
                                    }, this)
                                ]
                            }, x, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 4,
                                columnNumber: 2781
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 4,
                        columnNumber: 2760
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 4,
                columnNumber: 2646
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DiscoveryPages.tsx",
        lineNumber: 4,
        columnNumber: 237
    }, this);
}
_s1(CategoryPage, "ovIZC51cFHlFqM15FCCiouNvNc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c1 = CategoryPage;
function SupplierDirectory() {
    _s2();
    const [params] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(params.get('q') || '');
    const entries = [
        [
            'Meridian Supply Co.',
            'Multi-category wholesale distribution',
            'United States',
            'Nearly 30 years*'
        ],
        [
            'Northstar Beauty Partners',
            'Professional beauty assortment',
            'United States',
            'Demo profile'
        ],
        [
            'Atelier Trade Group',
            'Premium fragrance sourcing',
            'United States',
            'Demo profile'
        ],
        [
            'Common Market Supply',
            'General merchandise and gifting',
            'United States',
            'Demo profile'
        ]
    ].filter((e)=>(e[0] + ' ' + e[1]).toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "supplier-directory",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "SUPPLIER DISCOVERY"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 5,
                            columnNumber: 664
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Find wholesale supply partners."
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 5,
                            columnNumber: 715
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Compare categories, capabilities, locations and account services before starting a conversation."
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 5,
                            columnNumber: 755
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 5,
                    columnNumber: 637
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 5,
                columnNumber: 606
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "supplier-directory-search container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 5,
                        columnNumber: 927
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: q,
                        onChange: (e)=>setQ(e.target.value),
                        placeholder: "Search supplier name or specialization"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 5,
                        columnNumber: 936
                    }, this),
                    q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setQ(''),
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 5,
                        columnNumber: 1046
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 5,
                columnNumber: 874
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container supplier-dir-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Filter suppliers"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 5,
                                columnNumber: 1152
                            }, this),
                            [
                                'Verified profile',
                                'United States inventory',
                                'Ready to ship',
                                'Accepts RFQs',
                                'Provides documents',
                                'Sample program',
                                'Payment terms eligible'
                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1341
                                        }, this),
                                        x
                                    ]
                                }, x, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1326
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 5,
                        columnNumber: 1145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "supplier-dir-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            entries.length,
                                            " supplier profiles"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 5,
                                        columnNumber: 1430
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Best match"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 5,
                                                columnNumber: 1479
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Response time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 5,
                                                columnNumber: 1506
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Product count"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 5,
                                                columnNumber: 1536
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 5,
                                        columnNumber: 1471
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 5,
                                columnNumber: 1392
                            }, this),
                            entries.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dir-logo",
                                            children: e[0].split(' ').map((x)=>x[0]).join('').slice(0, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1621
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: [
                                                        e[0],
                                                        " ",
                                                        i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                                    lineNumber: 5,
                                                                    columnNumber: 1733
                                                                }, this),
                                                                " Verified profile"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1727
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1708
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: e[1]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1777
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                                    lineNumber: 5,
                                                                    columnNumber: 1801
                                                                }, this),
                                                                " ",
                                                                e[2]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1795
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                                    lineNumber: 5,
                                                                    columnNumber: 1830
                                                                }, this),
                                                                " ",
                                                                e[3]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1824
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                                    lineNumber: 5,
                                                                    columnNumber: 1859
                                                                }, this),
                                                                " Wholesale supplier"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1853
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1790
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "dir-tags",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Fragrance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1925
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Skincare"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1941
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Makeup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1956
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "Domestic inventory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 1969
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1899
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1703
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dir-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                    className: "btn dark",
                                                    to: i === 0 ? '/supplier/meridian' : '/supplier/meridian',
                                                    children: "View profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 2035
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                    to: "/supplier/meridian",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 2164
                                                        }, this),
                                                        " Contact"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 2134
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 5,
                                            columnNumber: 2006
                                        }, this)
                                    ]
                                }, e[0], true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1601
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 5,
                        columnNumber: 1386
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 5,
                columnNumber: 1098
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DiscoveryPages.tsx",
        lineNumber: 5,
        columnNumber: 570
    }, this);
}
_s2(SupplierDirectory, "JIXelv1P44U6WlTFLNfuk3yP8MI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c2 = SupplierDirectory;
function BrandDirectory() {
    _s3();
    const [params] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initial = params.get('q') || '';
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All categories');
    const [letter, setLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const records = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brands"].map((name)=>{
        const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.brand === name);
        return {
            name,
            list,
            categories: [
                ...new Set(list.map((p)=>p.category))
            ],
            featured: list.some((p)=>p.tags.includes('Best Seller'))
        };
    }).filter((b)=>(!q || b.name.toLowerCase().includes(q.toLowerCase())) && (category === 'All categories' || b.categories.includes(category)) && (letter === 'All' || b.name[0].toUpperCase() === letter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-directory-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-directory-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "WHOLESALE BRAND DISCOVERY"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 750
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Discover brands for every assortment."
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 808
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Search the complete multi-category brand portfolio, compare available products and open brand-specific wholesale showrooms."
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 854
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand-directory-search",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1024
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: !!initial,
                                    value: q,
                                    onChange: (e)=>setQ(e.target.value),
                                    placeholder: "Search brand name"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1033
                                }, this),
                                q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setQ(''),
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 984
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand-directory-stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brands"].length
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 7,
                                            columnNumber: 1241
                                        }, this),
                                        "brands"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1235
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 7,
                                            columnNumber: 1282
                                        }, this),
                                        "product listings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1276
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].length
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                                            lineNumber: 7,
                                            columnNumber: 1335
                                        }, this),
                                        "categories"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                    lineNumber: 7,
                                    columnNumber: 1329
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 1196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 7,
                    columnNumber: 723
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 7,
                columnNumber: 681
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand-directory-tools container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-alphabet",
                        children: [
                            'All',
                            ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: letter === x ? 'active' : '',
                                onClick: ()=>setLetter(x),
                                children: x
                            }, x, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 1529
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 7,
                        columnNumber: 1449
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-category-filter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Category",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: category,
                                        onChange: (e)=>setCategory(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "All categories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1748
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 7,
                                                    columnNumber: 1798
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1681
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 1666
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    records.length,
                                    " results"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 1845
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 7,
                        columnNumber: 1627
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 7,
                columnNumber: 1400
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-directory-grid container",
                children: records.length ? records.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-wordmark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        brand: b.name,
                                        variant: "card"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2031
                                    }, this),
                                    b.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "FEATURED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2086
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 1999
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-directory-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: b.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2151
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>showToast(`${b.name} added to followed brands`),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 7,
                                                        columnNumber: 2238
                                                    }, this),
                                                    "Follow"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2168
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2146
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: b.categories.slice(0, 3).join(' · ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2267
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-directory-metrics",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: b.list.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 7,
                                                        columnNumber: 2358
                                                    }, this),
                                                    "products"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2352
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: b.list.filter((p)=>p.stock > 0).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 7,
                                                        columnNumber: 2401
                                                    }, this),
                                                    "available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2395
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: Math.min(...b.list.map((p)=>p.moq))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                        lineNumber: 7,
                                                        columnNumber: 2466
                                                    }, this),
                                                    "case MOQ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2460
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2311
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-product-preview",
                                        children: b.list.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: '/products/' + p.slug,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p.image,
                                                    alt: p.name,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                    lineNumber: 7,
                                                    columnNumber: 2636
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2594
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2529
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        className: "brand-open",
                                        to: '/brand/' + b.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                        children: [
                                            "Open wholesale showroom ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                                lineNumber: 7,
                                                columnNumber: 2815
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                                        lineNumber: 7,
                                        columnNumber: 2699
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 2108
                            }, this)
                        ]
                    }, b.name, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 7,
                        columnNumber: 1977
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "listing-empty",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "No brands match your search"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 2884
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Clear the filters or try another brand name."
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 2920
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn outline",
                            onClick: ()=>{
                                setQ('');
                                setCategory('All categories');
                                setLetter('All');
                            },
                            children: "Clear all filters"
                        }, void 0, false, {
                            fileName: "[project]/src/views/DiscoveryPages.tsx",
                            lineNumber: 7,
                            columnNumber: 2971
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/DiscoveryPages.tsx",
                    lineNumber: 7,
                    columnNumber: 2853
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 7,
                columnNumber: 1894
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-asset-notice container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 7,
                        columnNumber: 3168
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Brand asset and relationship controls"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 3187
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Text-based wordmarks are used when approved official logos are unavailable. Trademark ownership and verified distribution relationships should be configured only from supplied legal documentation."
                            }, void 0, false, {
                                fileName: "[project]/src/views/DiscoveryPages.tsx",
                                lineNumber: 7,
                                columnNumber: 3231
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DiscoveryPages.tsx",
                        lineNumber: 7,
                        columnNumber: 3182
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DiscoveryPages.tsx",
                lineNumber: 7,
                columnNumber: 3118
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DiscoveryPages.tsx",
        lineNumber: 7,
        columnNumber: 643
    }, this);
}
_s3(BrandDirectory, "Bm7YR7dGVldglTgyz11LjCZTXGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c3 = BrandDirectory;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BrandPage");
__turbopack_context__.k.register(_c1, "CategoryPage");
__turbopack_context__.k.register(_c2, "SupplierDirectory");
__turbopack_context__.k.register(_c3, "BrandDirectory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_00l-thj._.js.map