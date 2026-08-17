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
"[project]/src/components/ReviewSystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.mjs [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.mjs [app-client] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/reviews.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
function ReviewSystem({ product }) {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('relevant');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submissions, setSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [votes, setVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [reported, setReported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const reviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReviewSystem.useMemo[reviews]": ()=>{
            let a = [
                ...submissions,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockReviews"])(product.id)
            ].filter({
                "ReviewSystem.useMemo[reviews].a": (r)=>filter === 'verified' ? r.verified : filter === 'photos' ? r.hasPhotos : true
            }["ReviewSystem.useMemo[reviews].a"]);
            if (sort === 'newest') a.sort({
                "ReviewSystem.useMemo[reviews]": (x, y)=>+new Date(y.date) - +new Date(x.date)
            }["ReviewSystem.useMemo[reviews]"]);
            if (sort === 'highest') a.sort({
                "ReviewSystem.useMemo[reviews]": (x, y)=>y.rating - x.rating
            }["ReviewSystem.useMemo[reviews]"]);
            if (sort === 'helpful') a.sort({
                "ReviewSystem.useMemo[reviews]": (x, y)=>y.helpful - x.helpful
            }["ReviewSystem.useMemo[reviews]"]);
            return a;
        }
    }["ReviewSystem.useMemo[reviews]"], [
        product.id,
        filter,
        sort,
        submissions
    ]);
    const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$reviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ratingBreakdown"])(product.reviews);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "review-system container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "BUYER FEEDBACK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 892
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Product ratings and reviews"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 939
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Review architecture is production-ready. Displayed historical entries and aggregate totals are clearly identified demonstration data."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 975
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 887
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn outline",
                        onClick: ()=>setForm(!form),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {}, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1182
                            }, this),
                            " Write a review"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 1121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 879
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "review-overview",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-total",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: product.rating
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1288
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "★★★★★"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1311
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    product.reviews.toLocaleString(),
                                    " sample ratings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1329
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Aggregate preview metric—not verified customer activity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1395
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 1258
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-breakdown",
                        children: breakdown.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('all'),
                                        children: [
                                            r.stars,
                                            " star"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1542
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            style: {
                                                width: `${r.percent}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReviewSystem.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1607
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1604
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: r.count.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1648
                                    }, this)
                                ]
                            }, r.stars, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1523
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 1471
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-topics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Buyer feedback topics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1732
                            }, this),
                            [
                                'Product information',
                                'Case packaging',
                                'Ordering clarity',
                                'Documentation',
                                'Account support'
                            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        x,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: [
                                                92 - i * 3,
                                                "% positive*"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ReviewSystem.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1883
                                        }, this)
                                    ]
                                }, x, true, {
                                    fileName: "[project]/src/components/ReviewSystem.tsx",
                                    lineNumber: 2,
                                    columnNumber: 1866
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "*Demonstration topic analysis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 1926
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 1701
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 1225
            }, this),
            form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewForm, {
                product: product,
                onSubmit: (r)=>{
                    setSubmissions((s)=>[
                            r,
                            ...s
                        ]);
                    setForm(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 1983
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "review-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: filter === 'all' ? 'active' : '',
                                onClick: ()=>setFilter('all'),
                                children: "All reviews"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 2112
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: filter === 'verified' ? 'active' : '',
                                onClick: ()=>setFilter('verified'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2298
                                    }, this),
                                    " Verified purchaser"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 2210
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: filter === 'photos' ? 'active' : '',
                                onClick: ()=>setFilter('photos'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2424
                                    }, this),
                                    " With photos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 2340
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 2107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Sort by",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sort,
                                onChange: (e)=>setSort(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "relevant",
                                        children: "Most relevant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2536
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Newest"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2583
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "highest",
                                        children: "Highest rated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2621
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "helpful",
                                        children: "Most helpful"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2667
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 2477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 2463
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 2074
            }, this),
            reviews.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "professional-review-list",
                children: reviews.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: r.buyerType[0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2836
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: r.buyerType
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2865
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: r.location
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2885
                                    }, this),
                                    r.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 2929
                                            }, this),
                                            " Verified purchaser"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2925
                                    }, this),
                                    r.sample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "DEMO REVIEW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2973
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 2829
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    '★'.repeat(r.rating),
                                                    '☆'.repeat(5 - r.rating)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3035
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                children: new Date(r.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3094
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3006
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: r.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3203
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: r.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3221
                                    }, this),
                                    r.hasPhotos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-photo-placeholder",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3292
                                            }, this),
                                            " Photo-review interface preview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-vote",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Was this helpful?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3371
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: votes[r.id] === 'up' ? 'active' : '',
                                                onClick: ()=>setVotes((v)=>({
                                                            ...v,
                                                            [r.id]: 'up'
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 3500
                                                    }, this),
                                                    " ",
                                                    r.helpful + (votes[r.id] === 'up' ? 1 : 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3401
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: votes[r.id] === 'down' ? 'active' : '',
                                                onClick: ()=>setVotes((v)=>({
                                                            ...v,
                                                            [r.id]: 'down'
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 3660
                                                    }, this),
                                                    " ",
                                                    r.unhelpful + (votes[r.id] === 'down' ? 1 : 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3557
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: reported.includes(r.id),
                                                onClick: ()=>setReported((x)=>[
                                                            ...x,
                                                            r.id
                                                        ]),
                                                children: reported.includes(r.id) ? 'Reported' : 'Report'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3723
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ReviewSystem.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3342
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 2,
                                columnNumber: 3000
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 2809
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 2751
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reviews-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "☆"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 3925
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "No reviews match this filter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 3939
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Try another filter or submit the first review for this view."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 3976
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn dark",
                        onClick: ()=>setForm(true),
                        children: "Write a review"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 4043
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 3894
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Review integrity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 4138
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Only feedback connected to an eligible transaction should receive a verified-purchaser badge in production. Demonstration reviews are labeled and must be replaced or removed before public launch."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 2,
                        columnNumber: 4161
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 2,
                columnNumber: 4130
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReviewSystem.tsx",
        lineNumber: 2,
        columnNumber: 821
    }, this);
}
_s(ReviewSystem, "1D2ctax5+VJbwjTBO5AVrB4bsDE=");
_c = ReviewSystem;
function ReviewForm({ product, onSubmit }) {
    _s1();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "review-form",
        onSubmit: (e)=>{
            e.preventDefault();
            const review = {
                id: `local-${Date.now()}`,
                productId: product.id,
                rating,
                title,
                body,
                date: new Date().toISOString(),
                verified: false,
                helpful: 0,
                unhelpful: 0,
                buyerType: 'Local preview submission',
                location: 'Frontend session',
                sample: true,
                hasPhotos: false
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendAdminRow"])('reviews', [
                product.name,
                `${rating} stars`,
                'Frontend buyer',
                'Pending',
                'Review'
            ]);
            onSubmit(review);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "REVIEW PREVIEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 624
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Share product feedback"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 671
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "This frontend submission stays in the current session and is visibly treated as demonstration content."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 702
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 619
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Overall rating",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-star-input",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: n <= rating ? 'active' : '',
                                onClick: ()=>setRating(n),
                                children: "★"
                            }, n, false, {
                                fileName: "[project]/src/components/ReviewSystem.tsx",
                                lineNumber: 3,
                                columnNumber: 893
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 838
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 817
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Review title",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        maxLength: 80
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 1029
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 1010
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Your review",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        rows: 5,
                        value: body,
                        onChange: (e)=>setBody(e.target.value),
                        maxLength: 800
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 1140
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 1122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "review-upload",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {}, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 1277
                    }, this),
                    " Add product photos",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        multiple: true,
                        accept: "image/*"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReviewSystem.tsx",
                        lineNumber: 3,
                        columnNumber: 1308
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 1244
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn dark",
                    children: "Submit preview review"
                }, void 0, false, {
                    fileName: "[project]/src/components/ReviewSystem.tsx",
                    lineNumber: 3,
                    columnNumber: 1367
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ReviewSystem.tsx",
                lineNumber: 3,
                columnNumber: 1362
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReviewSystem.tsx",
        lineNumber: 3,
        columnNumber: 196
    }, this);
}
_s1(ReviewForm, "oEiqDoHbbBB3srQpG+ijMfqU78c=");
_c1 = ReviewForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReviewSystem");
__turbopack_context__.k.register(_c1, "ReviewForm");
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
"[project]/src/data/reviews.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMockReviews",
    ()=>getMockReviews,
    "ratingBreakdown",
    ()=>ratingBreakdown
]);
const templates = [
    [
        'Clear case information',
        'The case configuration and product specifications were easy to review before building the order.',
        'Independent retailer',
        'New York'
    ],
    [
        'Professional product presentation',
        'Images, ordering details and commercial information were organized clearly for our buying workflow.',
        'Multi-location buyer',
        'Texas'
    ],
    [
        'Useful for assortment planning',
        'The MOQ, unit count and comparison tools helped our team evaluate the product alongside similar options.',
        'Ecommerce retailer',
        'California'
    ],
    [
        'Good documentation workflow',
        'We were able to identify which commercial documents should be requested before confirming the purchase.',
        'Specialty retailer',
        'Florida'
    ],
    [
        'Straightforward replenishment',
        'Saved-product and reorder tools make it easier to return to products our team is monitoring.',
        'Operations buyer',
        'Illinois'
    ],
    [
        'Helpful account support structure',
        'The product question and supplier-contact options create a clear path for commercial follow-up.',
        'Wholesale buyer',
        'New Jersey'
    ]
];
const getMockReviews = (productId)=>templates.map((t, i)=>({
            id: `demo-${productId}-${i}`,
            productId,
            rating: i === 4 ? 4 : 5,
            title: t[0],
            body: t[1],
            date: new Date(2026, 6 - i, 12 + i).toISOString(),
            verified: i !== 3,
            helpful: 12 + i * 9 + productId % 7,
            unhelpful: i % 2,
            buyerType: t[2],
            location: t[3],
            sample: true,
            hasPhotos: i === 1 || i === 4
        }));
const ratingBreakdown = (total)=>{
    const values = [
        .78,
        .15,
        .045,
        .015,
        .01
    ];
    let used = 0;
    return values.map((v, i)=>{
        const count = i === 4 ? total - used : Math.round(total * v);
        used += count;
        return {
            stars: 5 - i,
            count,
            percent: Math.round(v * 100)
        };
    });
};
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
"[project]/src/views/ProductPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReviewSystem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$productSelectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/productSelectors.ts [app-client] (ecmascript)");
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
;
;
;
;
function ProductPage() {
    _s();
    const [commerce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCommerceSettings"]);
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((x)=>x.slug === slug);
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Overview');
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { user, addCart, toggleSave, saved, showToast, viewProduct, toggleCompare, compare } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            if (p) viewProduct(p.id);
        }
    }["ProductPage.useEffect"], [
        p?.id
    ]);
    if (!p) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Product not found"
        }, void 0, false, {
            fileName: "[project]/src/views/ProductPage.tsx",
            lineNumber: 2,
            columnNumber: 477
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/ProductPage.tsx",
        lineNumber: 2,
        columnNumber: 454
    }, this);
    const tiers = [
        [
            `1–4 cases`,
            p.price
        ],
        [
            `5–9 cases`,
            p.price * .96
        ],
        [
            `10+ cases`,
            p.price * .92
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "market-pdp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "breadcrumbs container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 681
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: "/shop",
                        children: "Beauty & Personal Care"
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 708
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        to: `/shop?category=${p.category}`,
                        children: p.category
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 757
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 821
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 642
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-assurance-bar container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 897
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Business-verified access"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 911
                            }, this),
                            "Protected wholesale information"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 891
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {}, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 986
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Distribution-ready inventory"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 994
                            }, this),
                            "Case-level fulfillment workflow"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 980
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 1073
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Commercial support"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 1089
                            }, this),
                            "Product and order assistance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 1067
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 842
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pdp container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "thumbs",
                                children: p.gallery.map((src, x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: photo === x ? 'active' : '',
                                        onClick: ()=>setPhoto(x),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: `${p.name} view ${x + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/ProductPage.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1343
                                        }, this)
                                    }, src + x, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1263
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 1215
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main-product real-pdp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: p.tags[0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1445
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.gallery[photo],
                                        alt: `${p.brand} ${p.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1485
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "gallery-share",
                                        onClick: async ()=>{
                                            await navigator.clipboard?.writeText(window.location.href);
                                            showToast('Product link copied');
                                        },
                                        "aria-label": "Copy product link",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {}, void 0, false, {
                                            fileName: "[project]/src/views/ProductPage.tsx",
                                            lineNumber: 2,
                                            columnNumber: 1721
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1543
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gallery-caption",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Image ",
                                                    photo + 1,
                                                    " of ",
                                                    p.gallery.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 1772
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Reference imagery · verify licensed assets before launch"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 1822
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1739
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 1406
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 1190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pdp-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdp-flags",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ready to ship"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1956
                                    }, this),
                                    p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 2001
                                            }, this),
                                            " Verified inventory"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 1995
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 1929
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                className: "pdp-brand-link",
                                to: '/brand/' + p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        brand: p.brand,
                                        variant: "compact",
                                        showName: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2145
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Wholesale showroom →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2200
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2048
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2240
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sku",
                                children: [
                                    "SKU ",
                                    p.sku,
                                    " · ",
                                    p.category,
                                    " · ",
                                    p.size
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2257
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdp-rating",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: p.rating
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2345
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "★★★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#reviews",
                                        children: [
                                            p.reviews.toLocaleString(),
                                            " sample ratings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2380
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: [
                                            p.orders.toLocaleString(),
                                            " demo orders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2446
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2317
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-summary",
                                children: "Wholesale inventory prepared for approved business customers with case-level ordering, commercial documentation and domestic fulfillment support."
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2500
                            }, this),
                            user.status === 'approved' || commerce.guestPricing === 'visible' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tier-panel",
                                children: [
                                    tiers.map(([range, price])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: [
                                                        "$",
                                                        price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/ProductPage.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 2818
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: range
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/ProductPage.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 2844
                                                }, this)
                                            ]
                                        }, range, true, {
                                            fileName: "[project]/src/views/ProductPage.tsx",
                                            lineNumber: 2,
                                            columnNumber: 2801
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Wholesale unit price · final tier applied in cart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2872
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2745
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price-lock",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2971
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Wholesale pricing is protected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 2990
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Sign in or apply for an approved business account to see case pricing."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3027
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: "/login",
                                                children: "Sign in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3104
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: "/apply",
                                                children: "Apply now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3136
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 2985
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 2943
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "commercial-facts",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "MINIMUM ORDER"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3222
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    p.moq,
                                                    " ",
                                                    p.moq === 1 ? 'case' : 'cases'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3250
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3217
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "CASE CONFIGURATION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3302
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    p.casePack,
                                                    " units"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3335
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3297
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "AVAILABLE QUANTITY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3371
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: p.stock ? p.stock + ' cases' : 'Confirm with team'
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3404
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3366
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "REFERENCE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3468
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: p.sku
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3492
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3463
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 3183
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "option-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3546
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: ([
                                            'Fragrance',
                                            'Skincare',
                                            'Makeup',
                                            'Hair Care',
                                            'Personal Care',
                                            'Beauty Tools',
                                            'Gift Sets'
                                        ].includes(p.category) ? [
                                            '30 ml',
                                            '50 ml',
                                            '75 ml',
                                            '100 ml'
                                        ] : [
                                            'Single retail pack',
                                            '2-pack',
                                            '6-piece assortment',
                                            '12-piece display'
                                        ]).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedSize(s),
                                                className: s === (selectedSize || p.size) ? 'active' : '',
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3789
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3557
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 3518
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "option-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Case pack"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3943
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "active",
                                                onClick: ()=>showToast(`Case pack selected: ${p.casePack} units`),
                                                children: [
                                                    p.casePack,
                                                    " units / case"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 3964
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>showToast('Mixed-case request added to your product inquiry'),
                                                children: "Request mixed case"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4092
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 3959
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 3915
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "shipping",
                                className: "fulfillment-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4267
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Ship from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4282
                                                    }, this),
                                                    "United States warehouse"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4276
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4262
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4339
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Estimated dispatch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4353
                                                    }, this),
                                                    "2–5 business days"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4347
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4334
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4413
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Lead time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4428
                                                    }, this),
                                                    "Confirmed with order"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4422
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4408
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 4215
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "pdp-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        children: [
                                            "Product specifications ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4549
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4517
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spec-mini",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Brand",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: p.brand
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4611
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4600
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Product type",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: p.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4652
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4634
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Size",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: p.size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4688
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4678
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "MOQ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: [
                                                            p.moq,
                                                            " case"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 4719
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4710
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4573
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 4483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 1903
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        id: "supplier",
                        className: "supplier-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "supplier-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "MS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4846
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: "/supplier/meridian",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: p.supplier
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/ProductPage.tsx",
                                                    lineNumber: 2,
                                                    columnNumber: 4896
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4866
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Professional wholesale distributor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 4922
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 4861
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 4814
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "supplier-badges",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5022
                                            }, this),
                                            " Verified supplier profile"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5016
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5075
                                            }, this),
                                            " Business credentials reviewed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5069
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 4983
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "supplier-metrics",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "29+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Years experience*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5175
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5160
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "≤ 4h"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5218
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "Response time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5229
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "98%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5268
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "On-time target*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5278
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5263
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5126
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "*Configurable operational data pending final company verification."
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5320
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Order quantity"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5393
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "supplier-qty",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQty(Math.max(p.moq, qty - 1)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {}, void 0, false, {
                                            fileName: "[project]/src/views/ProductPage.tsx",
                                            lineNumber: 2,
                                            columnNumber: 5504
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5452
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            qty,
                                            " ",
                                            qty === 1 ? 'case' : 'cases',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    qty * p.casePack,
                                                    " units"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 5557
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5521
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQty(qty + 1),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                            fileName: "[project]/src/views/ProductPage.tsx",
                                            lineNumber: 2,
                                            columnNumber: 5637
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5601
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5422
                            }, this),
                            (user.status === 'approved' || commerce.guestPricing === 'visible') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-total",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Merchandise total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5751
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "$",
                                            (p.price * p.casePack * qty).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 5781
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5723
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn dark full",
                                disabled: !p.stock,
                                onClick: ()=>addCart(p, qty),
                                children: "Add to order"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5833
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn inquiry full",
                                onClick: ()=>showToast('Inquiry request started'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6025
                                    }, this),
                                    " Contact supplier"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 5937
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sample-btn full",
                                onClick: ()=>showToast('Sample request added to inquiry'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6166
                                    }, this),
                                    " Request a sample"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 6067
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-tools",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: saved.includes(p.id) ? 'active' : '',
                                        onClick: ()=>toggleSave(p.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 6312
                                            }, this),
                                            " ",
                                            saved.includes(p.id) ? 'Saved' : 'Save'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: compare.includes(p.id) ? 'active' : '',
                                        onClick: ()=>toggleCompare(p.id),
                                        children: "⇄ Compare"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6367
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 6200
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "buyer-protection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6514
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Buyer protection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 6534
                                            }, this),
                                            "Secure account checkout · Documented order terms · Support through fulfillment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 6528
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 6480
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 4767
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 1155
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pdp-tabbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        'Overview',
                        'Specifications',
                        'Supplier',
                        'Shipping',
                        'Reviews'
                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: tab === x ? 'active' : '',
                            onClick: ()=>{
                                setTab(x);
                                const target = {
                                    Overview: 'overview',
                                    Specifications: 'specifications',
                                    Supplier: 'supplier',
                                    Shipping: 'shipping',
                                    Reviews: 'reviews'
                                };
                                document.getElementById(target[x])?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            },
                            children: [
                                x,
                                x === 'Reviews' && ` (${p.reviews})`
                            ]
                        }, x, true, {
                            fileName: "[project]/src/views/ProductPage.tsx",
                            lineNumber: 2,
                            columnNumber: 6791
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/views/ProductPage.tsx",
                    lineNumber: 2,
                    columnNumber: 6694
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 6666
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "overview",
                className: "detail-content container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Product overview"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 7227
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    p.name,
                                    " is listed for qualified wholesale purchasing in original case quantities. This product page centralizes commercial information, pack configuration, fulfillment expectations and account-protected pricing."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 7252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-highlights",
                                children: [
                                    'Case-packed wholesale inventory',
                                    'Domestic fulfillment workflow',
                                    'Volume pricing for approved accounts',
                                    'Brand documentation where available'
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 7673
                                            }, this),
                                            x
                                        ]
                                    }, x, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 7659
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 7471
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "specifications",
                                children: "Key specifications"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 7699
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spec-table",
                                children: [
                                    [
                                        'Brand',
                                        p.brand
                                    ],
                                    [
                                        'Product name',
                                        p.name
                                    ],
                                    [
                                        'Category',
                                        p.category
                                    ],
                                    [
                                        'Reference SKU',
                                        p.sku
                                    ],
                                    [
                                        'Net size',
                                        p.size
                                    ],
                                    [
                                        'Units per case',
                                        String(p.casePack)
                                    ],
                                    [
                                        'Minimum order',
                                        `${p.moq} case${p.moq > 1 ? 's' : ''}`
                                    ],
                                    [
                                        'Stock status',
                                        p.stock ? 'Available' : 'Unavailable'
                                    ],
                                    [
                                        'Inventory location',
                                        p.origin
                                    ],
                                    [
                                        'Customization',
                                        'Not available for branded goods'
                                    ]
                                ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: a
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8137
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: b
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8153
                                            }, this)
                                        ]
                                    }, a, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8124
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 7746
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "detail-subhead",
                                children: "Commercial documents"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 8177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "document-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showToast('Specification sheet request added'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8333
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Product specification sheet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8354
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Available to approved accounts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8388
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8349
                                            }, this),
                                            "Download"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8264
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showToast('Packaging document request added'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "DOC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8524
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Case and packaging details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8545
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Version 2.1 · Demo document"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8578
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8540
                                            }, this),
                                            "Download"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8456
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>showToast('Compliance document request added'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "COA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8712
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Compliance documentation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8733
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Request where applicable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/ProductPage.tsx",
                                                        lineNumber: 2,
                                                        columnNumber: 8764
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8728
                                            }, this),
                                            "Request"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8643
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 8233
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "detail-subhead",
                                children: "Packaging and logistics"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 8831
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logistics-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "UNIT SIZE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8927
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: p.size
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8951
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8922
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "CASE PACK"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 8977
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    p.casePack,
                                                    " units"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9001
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 8972
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "MOQ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9037
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    p.moq,
                                                    " case"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9055
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9032
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "LEAD TIME"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9085
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: p.leadTime
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9109
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9080
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "SHELF LIFE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9139
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: p.shelfLife
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9164
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "BARCODE DATA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9195
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Account access"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9222
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 8890
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trademark-note",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9287
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Brand and authorization notice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 9304
                                            }, this),
                                            "Brand names and trademarks belong to their respective owners. Display of a product does not itself imply endorsement, exclusivity or an authorized distributor relationship. Relationship badges must be enabled only after documentation is verified."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9301
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9255
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 7218
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Service information"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9614
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9645
                                    }, this),
                                    " Shipping quote calculated during checkout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9642
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9702
                                    }, this),
                                    " Returns subject to account policy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9699
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9755
                                    }, this),
                                    " Protected wholesale pricing"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9752
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 9804
                                    }, this),
                                    " Account team assistance"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9801
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 9607
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 7158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "product-qa container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "PRODUCT QUESTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9913
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Questions from wholesale buyers"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 9963
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Get clarification before adding the product to your assortment."
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 10003
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn outline",
                                onClick: ()=>showToast('Question form opened'),
                                children: "Ask a product question"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 10073
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 9908
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            [
                                'Can I order a sample before purchasing cases?',
                                p.sample ? 'Sample requests are available for this listing, subject to account eligibility and inventory.' : 'Samples are not currently enabled for this listing.'
                            ],
                            [
                                'Are product and batch documents available?',
                                p.documents ? 'Commercial documents can be requested by approved buyers where applicable.' : 'Contact the account team to confirm document availability.'
                            ],
                            [
                                'Can I mix different sizes in one case?',
                                'Standard orders use the case configuration shown above. Mixed-case requests can be submitted through an RFQ.'
                            ]
                        ].map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        children: [
                                            q,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ProductPage.tsx",
                                                lineNumber: 2,
                                                columnNumber: 10800
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 10788
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: a
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ProductPage.tsx",
                                        lineNumber: 2,
                                        columnNumber: 10824
                                    }, this)
                                ]
                            }, q, true, {
                                fileName: "[project]/src/views/ProductPage.tsx",
                                lineNumber: 2,
                                columnNumber: 10771
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 10190
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 9866
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                product: p
            }, void 0, false, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 10862
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section warm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eyebrow: "CONTINUE SOURCING",
                        title: "Related products",
                        description: "Products selected by category, brand relevance and marketplace activity.",
                        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$productSelectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelated"])(p, 8),
                        viewAll: `/shop?category=${encodeURIComponent(p.category)}`
                    }, void 0, false, {
                        fileName: "[project]/src/views/ProductPage.tsx",
                        lineNumber: 2,
                        columnNumber: 10950
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/ProductPage.tsx",
                    lineNumber: 2,
                    columnNumber: 10923
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 10889
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: "RECOMMENDED FOR YOUR ASSORTMENT",
                    title: "You may also consider",
                    items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$productSelectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommended"])(p, 8),
                    viewAll: "/shop"
                }, void 0, false, {
                    fileName: "[project]/src/views/ProductPage.tsx",
                    lineNumber: 2,
                    columnNumber: 11247
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/ProductPage.tsx",
                lineNumber: 2,
                columnNumber: 11208
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/ProductPage.tsx",
        lineNumber: 2,
        columnNumber: 614
    }, this);
}
_s(ProductPage, "gg4MNfyEmMQl/eOO6+Ia3IoL9C8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1fi60v1._.js.map