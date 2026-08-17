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
"[project]/src/components/ProductSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
;
;
;
;
function ProductSection({ eyebrow, title, description, items, viewAll, className = '', compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `product-system-section ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductSection.tsx",
                                lineNumber: 2,
                                columnNumber: 339
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductSection.tsx",
                                lineNumber: 2,
                                columnNumber: 382
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductSection.tsx",
                                lineNumber: 2,
                                columnNumber: 412
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 324
                    }, this),
                    viewAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: viewAll,
                        children: [
                            "View all ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                fileName: "[project]/src/components/ProductSection.tsx",
                                lineNumber: 2,
                                columnNumber: 477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 449
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductSection.tsx",
                lineNumber: 2,
                columnNumber: 294
            }, this),
            items.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `product-grid ${compact ? 'compact-products' : ''}`,
                children: items.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        p: p
                    }, p.id, false, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 597
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductSection.tsx",
                lineNumber: 2,
                columnNumber: 518
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-section-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "No products available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 676
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Inventory matching this collection will appear here when available."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 706
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "btn outline",
                        to: "/shop",
                        children: "Browse the complete catalog"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductSection.tsx",
                        lineNumber: 2,
                        columnNumber: 780
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductSection.tsx",
                lineNumber: 2,
                columnNumber: 637
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductSection.tsx",
        lineNumber: 2,
        columnNumber: 235
    }, this);
}
_c = ProductSection;
var _c;
__turbopack_context__.k.register(_c, "ProductSection");
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
"[project]/src/utils/productSelectors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBestSelling",
    ()=>getBestSelling,
    "getCrossCategory",
    ()=>getCrossCategory,
    "getDeals",
    ()=>getDeals,
    "getNewArrivals",
    ()=>getNewArrivals,
    "getReadyToShip",
    ()=>getReadyToShip,
    "getRecentlyViewed",
    ()=>getRecentlyViewed,
    "getRecommended",
    ()=>getRecommended,
    "getRelated",
    ()=>getRelated,
    "getSavedProducts",
    ()=>getSavedProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
const unique = (items)=>[
        ...new Map(items.map((p)=>[
                p.id,
                p
            ])).values()
    ];
const getNewArrivals = (limit = 12)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.tags.includes('New')).slice(0, limit);
const getBestSelling = (limit = 12)=>[
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]
    ].sort((a, b)=>b.orders - a.orders || b.rating - a.rating).slice(0, limit);
const getDeals = (limit = 12)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.tags.includes('Deal')).sort((a, b)=>b.msrp - b.price - (a.msrp - a.price)).slice(0, limit);
const getReadyToShip = (limit = 12)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.stock > 0 && p.tags.includes('Ready to Ship')).slice(0, limit);
const getRelated = (product, limit = 8)=>unique([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.id !== product.id && p.brand === product.brand),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.id !== product.id && p.category === product.category)
    ]).slice(0, limit);
const getRecommended = (product, limit = 8)=>unique([
        ...getRelated(product, limit),
        ...getBestSelling(limit)
    ]).filter((p)=>p.id !== product.id).slice(0, limit);
const getCrossCategory = (categoryNames, limit = 8)=>categoryNames.map((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.category === c && p.stock > 0)).filter(Boolean).slice(0, limit);
const getRecentlyViewed = (ids, limit = 12)=>ids.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id)).filter(Boolean).slice(0, limit);
const getSavedProducts = (ids)=>ids.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id)).filter(Boolean);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/InfoPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$productSelectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/productSelectors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const data = {
    about: {
        title: 'Distribution experience, reimagined.',
        eyebrow: 'OUR COMPANY',
        intro: 'Nearly three decades of offline wholesale expertise, now brought into a clearer, more capable digital experience.'
    },
    'why-choose-us': {
        title: 'A wholesale partner that earns its place.',
        eyebrow: 'WHY MERIDIAN',
        intro: 'Professional sourcing, practical operations and thoughtful support—organized around the way modern businesses buy.'
    },
    'how-it-works': {
        title: 'Wholesale made clear.',
        eyebrow: 'HOW IT WORKS',
        intro: 'From business verification to reordering, every step is designed to make purchasing more efficient.'
    },
    contact: {
        title: 'Let’s talk business.',
        eyebrow: 'CONTACT US',
        intro: 'Choose the team that can best help with your wholesale inquiry.'
    },
    resources: {
        title: 'Practical perspective for modern retail.',
        eyebrow: 'RESOURCES & INSIGHTS',
        intro: 'Guides, buying ideas and category intelligence for wholesale businesses.'
    },
    faq: {
        title: 'Answers, without the runaround.',
        eyebrow: 'FREQUENTLY ASKED QUESTIONS',
        intro: 'Straightforward information about accounts, ordering, pricing and fulfillment.'
    },
    brands: {
        title: 'Discover our brand portfolio.',
        eyebrow: 'SHOP BY BRAND',
        intro: 'Browse a curated mix of emerging and established suppliers. Brand relationship claims are displayed only when verified.'
    },
    categories: {
        title: 'Shop your way.',
        eyebrow: 'PRODUCT CATEGORIES',
        intro: 'Build a relevant, balanced assortment across key beauty and personal care categories.'
    }
};
const legal = [
    'privacy-policy',
    'terms-conditions',
    'cookie-policy',
    'trademark-disclaimer',
    'accessibility',
    'shipping-delivery',
    'returns-policies',
    'payment-information'
];
function InfoPage() {
    _s();
    const { page = '' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const d = data[page];
    if (page === 'wishlist') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wishlist, {}, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 110
    }, this);
    if (legal.includes(page) || page === 'forgot-password' || page === 'track-order') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Simple, {
        title: page.replaceAll('-', ' ')
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 201
    }, this);
    if (!d) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Simple, {
        title: page.replaceAll('-', ' ')
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 257
    }, this);
    if (page === 'brands') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Listing, {
        type: "brands",
        d: d
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 326
    }, this);
    if (page === 'categories') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Listing, {
        type: "categories",
        d: d
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 387
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "info-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: d.eyebrow
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 4,
                            columnNumber: 514
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: d.title
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 4,
                            columnNumber: 558
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: d.intro
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 4,
                            columnNumber: 576
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 4,
                    columnNumber: 487
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 456
            }, this),
            page === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "story container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "OUR STORY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 669
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Relationships first.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 735
                                            }, this),
                                            "Technology in service of them."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 711
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 664
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Meridian Supply Co. is a demonstration brand representing an established American distributor moving a long-standing wholesale operation online. The platform is built around enduring principles: dependable service, commercial judgment and respect for the businesses we serve."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 786
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Our next chapter combines that operating experience with faster discovery, protected account pricing and practical tools for repeat purchasing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1068
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 781
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 4,
                        columnNumber: 627
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Feature, {}, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1234
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 625
            }, this),
            page === 'why-choose-us' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Feature, {}, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1273
            }, this),
            page === 'how-it-works' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "timeline container",
                children: [
                    'Apply for an account',
                    'Business verification',
                    'Access wholesale pricing',
                    'Build your case-level order',
                    'Checkout on your terms',
                    'Fulfillment & tracking',
                    'Simple reordering'
                ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: String(i + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1549
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: x
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1585
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: i === 0 ? 'Share your business and resale information through our guided application.' : 'A clear, B2B-focused step supported by your wholesale account workspace.'
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1597
                            }, this)
                        ]
                    }, x, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1536
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1308
            }, this),
            page === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1801
            }, this),
            page === 'resources' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Resources, {}, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1833
            }, this),
            page === 'faq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {}, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1861
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "final-cta container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Ready to move forward?"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1909
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "btn primary",
                                to: "/apply",
                                children: "Apply for access"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1945
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "btn outline",
                                to: "/shop",
                                children: "Browse catalog"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 4,
                                columnNumber: 2010
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1940
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 4,
                columnNumber: 1868
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 4,
        columnNumber: 429
    }, this);
}
_s(InfoPage, "h/4rU/Lgl5EJaVJYKLmuZP/A2OU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = InfoPage;
function Listing({ type, d }) {
    _s1();
    const [params] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(params.get('q') || '');
    const arr = (type === 'brands' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brands"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"]).filter((x)=>x.toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "info-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: d.eyebrow
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 5,
                            columnNumber: 299
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: d.title
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 5,
                            columnNumber: 343
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: d.intro
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 5,
                            columnNumber: 361
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 5,
                    columnNumber: 272
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 5,
                columnNumber: 241
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "listing container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "listing-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "listing-search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 497
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: q,
                                        onChange: (e)=>setQ(e.target.value),
                                        placeholder: `Search ${type}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 506
                                    }, this),
                                    q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQ(''),
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 594
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 465
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    arr.length,
                                    " ",
                                    type,
                                    " found"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 646
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 5,
                        columnNumber: 432
                    }, this),
                    arr.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-grid",
                        children: arr.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: type === 'brands' ? '/brand/' + x.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '/category/' + x.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                children: [
                                    type === 'brands' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        brand: x,
                                        variant: "compact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 921
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: String(i + 1).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 962
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: x
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 1005
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>(type === 'brands' ? p.brand : p.category) === x).length,
                                            " products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 1017
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Explore ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 5,
                                                columnNumber: 1113
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 5,
                                        columnNumber: 1102
                                    }, this)
                                ]
                            }, x, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 760
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 5,
                        columnNumber: 702
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "listing-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "No matching ",
                                    type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 1177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Try a broader name or clear the current search."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 1204
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn outline",
                                onClick: ()=>setQ(''),
                                children: "Clear search"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 5,
                                columnNumber: 1258
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 5,
                        columnNumber: 1146
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 5,
                columnNumber: 393
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 5,
        columnNumber: 214
    }, this);
}
_s1(Listing, "JIXelv1P44U6WlTFLNfuk3yP8MI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = Listing;
function Feature() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "feature-band",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "OUR OPERATING PRINCIPLES"
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 6,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "What good distribution should feel like."
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 6,
                            columnNumber: 150
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 6,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feature-list",
                    children: [
                        'Experience that informs better decisions',
                        'Assortments built for real retail environments',
                        'Protected B2B pricing and account controls',
                        'Support from people who understand wholesale'
                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                    fileName: "[project]/src/views/InfoPage.tsx",
                                    lineNumber: 6,
                                    columnNumber: 440
                                }, this),
                                x
                            ]
                        }, x, true, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 6,
                            columnNumber: 429
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 6,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/InfoPage.tsx",
            lineNumber: 6,
            columnNumber: 61
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 6,
        columnNumber: 27
    }, this);
}
_c2 = Feature;
function Contact() {
    _s2();
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "contact container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "How can we help?"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 107
                    }, this),
                    [
                        'New wholesale accounts',
                        'Existing customer support',
                        'Sales & product inquiries',
                        'General business inquiries'
                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: x
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InfoPage.tsx",
                                    lineNumber: 7,
                                    columnNumber: 263
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "We’ll route your message to the appropriate distribution team."
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InfoPage.tsx",
                                    lineNumber: 7,
                                    columnNumber: 273
                                }, this)
                            ]
                        }, x, true, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 7,
                            columnNumber: 252
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 7,
                columnNumber: 102
            }, this),
            sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-success",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 399
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Inquiry received"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 413
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Your reference has been created. A production deployment will route this request to the responsible account or operations team."
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 438
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn outline",
                        onClick: ()=>setSent(false),
                        children: "Send another inquiry"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 572
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 7,
                columnNumber: 366
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendAdminRow"])('inquiries', [
                        `INQ-${Math.floor(3000 + Math.random() * 900)}`,
                        String(fd.get('business') || 'Business inquiry'),
                        String(fd.get('email') || ''),
                        String(fd.get('type') || 'General inquiry'),
                        'New'
                    ]);
                    setSent(true);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Full name",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1003
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 987
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Business email",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "email",
                                        required: true,
                                        type: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1049
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1028
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Business name",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "business",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1120
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Inquiry type",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "type",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "General inquiry"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1200
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Product availability"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1232
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Sales and quotation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1269
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Order support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1305
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Account support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1335
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1180
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1161
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Order or account reference",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "If applicable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1417
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1384
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Preferred response",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1494
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/InfoPage.tsx",
                                                lineNumber: 7,
                                                columnNumber: 1516
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1486
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1461
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "full",
                                children: [
                                    "How can we help?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 6,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 7,
                                        columnNumber: 1595
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 7,
                                columnNumber: 1555
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 960
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn dark",
                        children: "Submit inquiry"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 7,
                        columnNumber: 1638
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 7,
                columnNumber: 669
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 7,
        columnNumber: 63
    }, this);
}
_s2(Contact, "N5qGo+6eAYSicj3KuAT8zqNWiVo=");
_c3 = Contact;
function Resources() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "articles container",
        children: [
            'The practical guide to wholesale case packs',
            'Building a beauty assortment with intention',
            'Five signals to watch when planning seasonal inventory'
        ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "WHOLESALE INSIGHTS · ",
                            5 + i,
                            " MIN READ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 8,
                        columnNumber: 249
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 8,
                        columnNumber: 297
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: x
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 8,
                        columnNumber: 308
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Clear, useful perspective for independent retailers and growing beauty businesses."
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 8,
                        columnNumber: 320
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/resources",
                        children: "Read article →"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 8,
                        columnNumber: 409
                    }, this)
                ]
            }, x, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 8,
                columnNumber: 232
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 8,
        columnNumber: 29
    }, this);
}
_c4 = Resources;
function FAQ() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq container",
        children: [
            [
                'Who can purchase wholesale?',
                'Qualified retailers, salons, ecommerce sellers and other approved businesses may apply.'
            ],
            [
                'How do I see wholesale pricing?',
                'Pricing is protected and visible after your business account is approved.'
            ],
            [
                'Do I need a resale certificate?',
                'Requirements vary by jurisdiction, but a valid resale certificate is generally needed for tax-exempt wholesale purchasing.'
            ],
            [
                'Is there a minimum order?',
                'Minimums and case packs are displayed at product and cart level for approved buyers.'
            ],
            [
                'How long does approval take?',
                'Timing depends on the completeness of submitted business documentation.'
            ],
            [
                'How does shipping work?',
                'Available methods and freight estimates are shown during checkout.'
            ]
        ].map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: [
                            q,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 9,
                                columnNumber: 819
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 9,
                        columnNumber: 807
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: a
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 9,
                        columnNumber: 843
                    }, this)
                ]
            }, q, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 9,
                columnNumber: 790
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 9,
        columnNumber: 23
    }, this);
}
_c5 = FAQ;
function Wishlist() {
    _s3();
    const { saved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$productSelectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedProducts"])(saved);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "saved-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "catalog-title container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "BUYER WORKSPACE / SAVED PRODUCTS"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 10,
                        columnNumber: 161
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Saved products"
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 10,
                        columnNumber: 200
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Maintain a focused shortlist for comparison, quotation and future ordering."
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 10,
                        columnNumber: 223
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 10,
                columnNumber: 116
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: items.length ? `${items.length} saved ${items.length === 1 ? 'product' : 'products'}` : 'Your shortlist is ready when you are',
                    description: items.length ? 'Selections are presented through the same product system used throughout the marketplace.' : 'Save products from catalog cards and product pages to build a reusable buying shortlist.',
                    items: items,
                    viewAll: "/shop"
                }, void 0, false, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 10,
                    columnNumber: 356
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 10,
                columnNumber: 321
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 10,
        columnNumber: 88
    }, this);
}
_s3(Wishlist, "+L+l1JoVJxv3iQkJDH6m+gwZCKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c6 = Wishlist;
function Simple({ title }) {
    const key = title.toLowerCase();
    if (key === 'forgot password') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UtilityForm, {
        type: "password"
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 11,
        columnNumber: 105
    }, this);
    if (key === 'track order') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UtilityForm, {
        type: "tracking"
    }, void 0, false, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 11,
        columnNumber: 166
    }, this);
    const policies = {
        'privacy policy': {
            intro: 'How business, account and transaction information is handled across the wholesale platform.',
            sections: [
                [
                    'Information we collect',
                    'Business application details, account contacts, delivery addresses, order records and support communications may be collected to operate the distribution relationship.'
                ],
                [
                    'How information is used',
                    'Information supports account verification, pricing access, fulfillment, customer service, fraud prevention and legal compliance.'
                ],
                [
                    'Data choices and retention',
                    'Approved procedures should allow authorized users to review account information and submit privacy requests. Final retention periods must align with applicable law and company policy.'
                ]
            ]
        },
        'terms conditions': {
            intro: 'Commercial terms governing access to the wholesale platform and business purchasing tools.',
            sections: [
                [
                    'Business eligibility',
                    'Platform access is intended for qualified businesses. Account approval, resale documentation and purchasing authority may be required.'
                ],
                [
                    'Orders and availability',
                    'Orders remain subject to inventory confirmation, commercial terms, pricing validation and acceptance by the distributor.'
                ],
                [
                    'Intellectual property',
                    'Brand names and trademarks remain the property of their respective owners. No relationship should be inferred unless specifically verified.'
                ]
            ]
        },
        'cookie policy': {
            intro: 'Information about cookies and similar technologies used to operate the platform.',
            sections: [
                [
                    'Essential technologies',
                    'Essential storage supports account sessions, cart persistence, security and platform preferences.'
                ],
                [
                    'Analytics and preferences',
                    'Optional analytics should be activated only through an approved consent process.'
                ],
                [
                    'Managing choices',
                    'A production deployment should provide a consent manager appropriate to the markets served.'
                ]
            ]
        },
        'trademark disclaimer': {
            intro: 'Clear disclosure regarding third-party brands, products and intellectual property.',
            sections: [
                [
                    'Third-party marks',
                    'All third-party product names, trademarks and logos belong to their respective owners.'
                ],
                [
                    'Relationship statements',
                    'Product display does not itself establish authorization, endorsement, exclusivity or an official distribution relationship.'
                ],
                [
                    'Verification controls',
                    'Authorization badges and relationship descriptions must remain disabled until supporting documentation is reviewed and approved.'
                ]
            ]
        },
        'accessibility': {
            intro: 'Our approach to an inclusive wholesale purchasing experience.',
            sections: [
                [
                    'Digital access',
                    'The platform is designed around semantic structure, keyboard navigation, visible focus, form labels and readable contrast.'
                ],
                [
                    'Ongoing improvement',
                    'Accessibility should be reviewed through automated and manual testing as the platform and content evolve.'
                ],
                [
                    'Assistance',
                    'Customers who encounter a barrier may contact support for assistance with account and ordering tasks.'
                ]
            ]
        },
        'shipping delivery': {
            intro: 'How wholesale orders move from inventory confirmation to business delivery.',
            sections: [
                [
                    'Available methods',
                    'Ground, expedited and scheduled freight options may be presented according to order size, destination and account eligibility.'
                ],
                [
                    'Processing and lead time',
                    'Dispatch estimates are displayed at product and checkout level but remain subject to inventory and order review.'
                ],
                [
                    'Freight and delivery',
                    'Final charges, carrier details and delivery appointments are confirmed before fulfillment when required.'
                ]
            ]
        },
        'returns policies': {
            intro: 'A structured process for reporting and resolving eligible wholesale-order issues.',
            sections: [
                [
                    'Inspection',
                    'Business customers should inspect deliveries promptly and retain shipping, carton and product documentation.'
                ],
                [
                    'Return authorization',
                    'Returns require review and authorization. Eligibility may depend on category, product condition, reason and commercial terms.'
                ],
                [
                    'Damages and discrepancies',
                    'Shortages, damage or incorrect items should be reported with order references and supporting photographs.'
                ]
            ]
        },
        'payment information': {
            intro: 'Payment methods and commercial terms supported by the checkout architecture.',
            sections: [
                [
                    'Payment methods',
                    'The platform is prepared for business cards, ACH transfers, purchase orders and approved account terms.'
                ],
                [
                    'Credit and terms',
                    'Payment terms require separate review and should not be represented as approved until underwriting is complete.'
                ],
                [
                    'Security',
                    'Production payments must be processed through compliant payment providers; sensitive card information should not be stored by this frontend.'
                ]
            ]
        }
    };
    const policy = policies[key] || {
        intro: 'Operational information for qualified wholesale customers and distribution partners.',
        sections: [
            [
                'Overview',
                'This area provides structured business information for platform users.'
            ],
            [
                'Account support',
                'Account-specific questions should include the relevant business, order or product reference.'
            ],
            [
                'Verification',
                'Final operational details are confirmed through the responsible distribution team.'
            ]
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "info-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "DISTRIBUTION INFORMATION"
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 20,
                            columnNumber: 552
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                textTransform: 'capitalize'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 20,
                            columnNumber: 609
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: policy.intro
                        }, void 0, false, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 20,
                            columnNumber: 662
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/InfoPage.tsx",
                    lineNumber: 20,
                    columnNumber: 525
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 20,
                columnNumber: 494
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "legal container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "policy-summary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Business policy center"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 20,
                                columnNumber: 768
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Structured for wholesale accounts, orders and distribution operations."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 20,
                                columnNumber: 797
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 20,
                        columnNumber: 736
                    }, this),
                    policy.sections.map(([h, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: h
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InfoPage.tsx",
                                    lineNumber: 20,
                                    columnNumber: 933
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: p
                                }, void 0, false, {
                                    fileName: "[project]/src/views/InfoPage.tsx",
                                    lineNumber: 20,
                                    columnNumber: 945
                                }, this)
                            ]
                        }, h, true, {
                            fileName: "[project]/src/views/InfoPage.tsx",
                            lineNumber: 20,
                            columnNumber: 916
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "legal-contact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Need clarification?"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 20,
                                columnNumber: 998
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Contact the appropriate account or operations team for policy questions related to a specific order."
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 20,
                                columnNumber: 1026
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "btn dark",
                                to: "/contact",
                                children: "Contact support"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 20,
                                columnNumber: 1133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 20,
                        columnNumber: 967
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 20,
                columnNumber: 699
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 20,
        columnNumber: 467
    }, this);
}
_c7 = Simple;
function UtilityForm({ type }) {
    _s4();
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "utility-form-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: type === 'password' ? 'ACCOUNT SECURITY' : 'ORDER VISIBILITY'
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: type === 'password' ? 'Reset your password' : 'Track a wholesale order'
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 236
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: type === 'password' ? 'Enter the business email associated with your account.' : 'Enter the order reference and purchasing email to view current status.'
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 312
                    }, this),
                    done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "utility-success",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Request received"
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 21,
                                columnNumber: 507
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: type === 'password' ? 'If the account exists, password-reset instructions will be sent through the configured email service.' : 'The tracking request is ready to connect to live carrier and order data.'
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 21,
                                columnNumber: 530
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 474
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            setDone(true);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    type === 'password' ? 'Business email' : 'Order number',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        placeholder: type === 'password' ? 'buyer@company.com' : 'MS-10482'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 21,
                                        columnNumber: 855
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 21,
                                columnNumber: 797
                            }, this),
                            type === 'tracking' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Purchasing email",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/InfoPage.tsx",
                                        lineNumber: 21,
                                        columnNumber: 986
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 21,
                                columnNumber: 963
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn dark",
                                children: type === 'password' ? 'Send secure reset link' : 'View order status'
                            }, void 0, false, {
                                fileName: "[project]/src/views/InfoPage.tsx",
                                lineNumber: 21,
                                columnNumber: 1025
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 742
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: type === 'password' ? '/login' : '/account',
                        children: [
                            "← Return to ",
                            type === 'password' ? 'sign in' : 'buyer dashboard'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 1135
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 21,
                columnNumber: 137
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: type === 'password' ? 'Secure account access' : 'Distribution visibility'
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 1267
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: type === 'password' ? 'Reset links should be time-limited and delivered only through the verified account email.' : 'Approved customers can monitor processing, dispatch, carrier events and delivery documentation from one workspace.'
                    }, void 0, false, {
                        fileName: "[project]/src/views/InfoPage.tsx",
                        lineNumber: 21,
                        columnNumber: 1343
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/InfoPage.tsx",
                lineNumber: 21,
                columnNumber: 1260
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/InfoPage.tsx",
        lineNumber: 21,
        columnNumber: 102
    }, this);
}
_s4(UtilityForm, "2wZ/rT6yTSSvFnnqLQ0uErFITQY=");
_c8 = UtilityForm;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "InfoPage");
__turbopack_context__.k.register(_c1, "Listing");
__turbopack_context__.k.register(_c2, "Feature");
__turbopack_context__.k.register(_c3, "Contact");
__turbopack_context__.k.register(_c4, "Resources");
__turbopack_context__.k.register(_c5, "FAQ");
__turbopack_context__.k.register(_c6, "Wishlist");
__turbopack_context__.k.register(_c7, "Simple");
__turbopack_context__.k.register(_c8, "UtilityForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_055iv-_._.js.map