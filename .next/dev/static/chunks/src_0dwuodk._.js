(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/views/Application.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Application
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const steps = [
    'Business',
    'Contact',
    'Address',
    'Credentials',
    'Review'
];
function Application() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        country: 'United States',
        type: 'Independent retailer'
    });
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const field = (name, label, type = 'text')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: type,
                    value: data[name] || '',
                    onChange: (e)=>setData({
                            ...data,
                            [name]: e.target.value
                        }),
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/views/Application.tsx",
                    lineNumber: 3,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/Application.tsx",
            lineNumber: 3,
            columnNumber: 294
        }, this);
    if (done) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "application success-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                    fileName: "[project]/src/views/Application.tsx",
                    lineNumber: 3,
                    columnNumber: 487
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 481
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Application received."
            }, void 0, false, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 502
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Thank you, ",
                    data.contact || 'business applicant',
                    ". Your application has been saved locally for this demonstration. A real workflow would now begin business verification."
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 532
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                className: "btn dark",
                to: "/",
                children: "Return home"
            }, void 0, false, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 706
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Application.tsx",
        lineNumber: 3,
        columnNumber: 439
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "application container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "application-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "BECOME A WHOLESALE CUSTOMER"
                    }, void 0, false, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 845
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Let’s get to know your business."
                    }, void 0, false, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 899
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Complete the application below. Your information helps us verify eligibility and provide the right account experience."
                    }, void 0, false, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 940
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 811
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stepper",
                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (i === step ? 'active ' : '') + (i < step ? 'complete' : ''),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: i < step ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                    fileName: "[project]/src/views/Application.tsx",
                                    lineNumber: 3,
                                    columnNumber: 1200
                                }, this) : i + 1
                            }, void 0, false, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 1186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: s
                            }, void 0, false, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 1220
                            }, this)
                        ]
                    }, s, true, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 1114
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 1071
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "application-form",
                onSubmit: (e)=>{
                    e.preventDefault();
                    if (step < 4) setStep(step + 1);
                    else {
                        localStorage.setItem('ms-application', JSON.stringify(data));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendAdminRow"])('applications', [
                            data.legal || 'New business',
                            data.contact || 'Applicant',
                            new Date().toLocaleDateString('en-US', {
                                month: 'short',
                                day: '2-digit'
                            }),
                            data.resale ? 'Credentials supplied' : 'Pending documents',
                            'Pending'
                        ]);
                        setDone(true);
                        showToast('Application submitted');
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            'Tell us about your business',
                            'Primary contact',
                            'Business address',
                            'Wholesale credentials',
                            'Review your application'
                        ][step]
                    }, void 0, false, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 1675
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            'We partner with qualified retailers, salons and ecommerce businesses.',
                            'Who should we contact about this account?',
                            'Where is your business located?',
                            'Provide the details used to verify wholesale eligibility.',
                            'Confirm your information before submitting.'
                        ][step]
                    }, void 0, false, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 1810
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-grid",
                        children: [
                            step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    field('legal', 'Legal business name'),
                                    field('dba', 'DBA / trading name'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Business type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: data.type,
                                                onChange: (e)=>setData({
                                                        ...data,
                                                        type: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Independent retailer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Application.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2294
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Salon / spa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Application.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2331
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Ecommerce retailer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Application.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2359
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Multi-location retailer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Application.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2394
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/Application.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2434
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2215
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 2195
                                    }, this),
                                    field('website', 'Business website'),
                                    field('years', 'Years in business', 'number')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 2120
                            }, this),
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    field('contact', 'Full name'),
                                    field('position', 'Position / title'),
                                    field('email', 'Business email', 'email'),
                                    field('phone', 'Phone', 'tel')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 2570
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    field('address', 'Street address'),
                                    field('city', 'City'),
                                    field('state', 'State'),
                                    field('zip', 'ZIP code'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Country",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "United States"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/Application.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2856
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2848
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 2834
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 2726
                            }, this),
                            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    field('tax', 'Federal tax ID'),
                                    field('resale', 'Resale certificate number'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "full upload",
                                        children: [
                                            "Resale certificate document",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Document upload placeholder · PDF, JPG or PNG"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3054
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3112
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 2996
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "check full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3170
                                            }, this),
                                            " I confirm this application is for a legitimate business purchase."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 2918
                            }, this),
                            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "review full",
                                children: Object.entries(data).map(([k, v])=>v && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: k.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3372
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/Application.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3404
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3359
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 3292
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 2082
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-actions",
                        children: [
                            step > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn outline",
                                onClick: ()=>setStep(step - 1),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3550
                                    }, this),
                                    " Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 3474
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn dark",
                                children: [
                                    step === 4 ? 'Submit application' : 'Continue',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                        fileName: "[project]/src/views/Application.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3649
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/Application.tsx",
                                lineNumber: 3,
                                columnNumber: 3577
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/Application.tsx",
                        lineNumber: 3,
                        columnNumber: 3435
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/Application.tsx",
                lineNumber: 3,
                columnNumber: 1244
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/Application.tsx",
        lineNumber: 3,
        columnNumber: 772
    }, this);
}
_s(Application, "yi2znK+nvkZrF6AUqPjnPv/Nkkg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Application;
var _c;
__turbopack_context__.k.register(_c, "Application");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0dwuodk._.js.map