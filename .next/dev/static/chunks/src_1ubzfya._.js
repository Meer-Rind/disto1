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
"[project]/src/views/QuickOrder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-62JRHF6Z.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.mjs [app-client] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Store.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function QuickOrder() {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            query: '',
            qty: 1
        },
        {
            id: 2,
            query: '',
            qty: 1
        },
        {
            id: 3,
            query: '',
            qty: 1
        }
    ]);
    const [uploaded, setUploaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { addCart, user, showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickOrder.useMemo[subtotal]": ()=>rows.reduce({
                "QuickOrder.useMemo[subtotal]": (a, r)=>a + (r.product ? r.product.price * r.product.casePack * r.qty : 0)
            }["QuickOrder.useMemo[subtotal]"], 0)
    }["QuickOrder.useMemo[subtotal]"], [
        rows
    ]);
    const update = (id, data)=>setRows((r)=>r.map((x)=>x.id === id ? {
                    ...x,
                    ...data
                } : x));
    const find = (id, q)=>{
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((x)=>x.sku.toLowerCase() === q.toLowerCase()) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((x)=>(x.name + ' ' + x.brand).toLowerCase().includes(q.toLowerCase()));
        update(id, {
            query: q,
            product: q.length > 2 ? p : undefined
        });
    };
    const submit = ()=>{
        const valid = rows.filter((r)=>r.product);
        if (!valid.length) return showToast('Add at least one valid SKU');
        valid.forEach((r)=>addCart(r.product, Math.max(r.product.moq, r.qty)));
        showToast(`${valid.length} product lines added to order`);
    };
    const download = ()=>{
        const blob = new Blob([
            'SKU,CASE_QUANTITY\nGU-4100,1\n'
        ], {
            type: 'text/csv'
        });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'meridian-quick-order-template.csv';
        a.click();
        URL.revokeObjectURL(a.href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "quick-order-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "quick-order-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "PROCUREMENT WORKSPACE"
                        }, void 0, false, {
                            fileName: "[project]/src/views/QuickOrder.tsx",
                            lineNumber: 3,
                            columnNumber: 1266
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Quick order by SKU"
                        }, void 0, false, {
                            fileName: "[project]/src/views/QuickOrder.tsx",
                            lineNumber: 3,
                            columnNumber: 1320
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Build large, repeat orders without browsing the full catalog. Enter product references, set case quantities or upload a prepared CSV file."
                        }, void 0, false, {
                            fileName: "[project]/src/views/QuickOrder.tsx",
                            lineNumber: 3,
                            columnNumber: 1347
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                            lineNumber: 3,
                                            columnNumber: 1503
                                        }, this),
                                        " Exact SKU and product matching"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                    lineNumber: 3,
                                    columnNumber: 1497
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                            lineNumber: 3,
                                            columnNumber: 1555
                                        }, this),
                                        " Case and MOQ validation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                    lineNumber: 3,
                                    columnNumber: 1549
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {}, void 0, false, {
                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                            lineNumber: 3,
                                            columnNumber: 1600
                                        }, this),
                                        " Account-pricing ready"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                    lineNumber: 3,
                                    columnNumber: 1594
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/QuickOrder.tsx",
                            lineNumber: 3,
                            columnNumber: 1492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/QuickOrder.tsx",
                    lineNumber: 3,
                    columnNumber: 1239
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/QuickOrder.tsx",
                lineNumber: 3,
                columnNumber: 1201
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quick-order-layout container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quick-order-tools",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Enter product references"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1751
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Search by exact SKU, product name or brand."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1784
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1746
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: download,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {}, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1867
                                            }, this),
                                            " Download CSV template"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1840
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 1711
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quick-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quick-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "SKU OR PRODUCT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1972
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "MATCHED PRODUCT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 1999
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "CASE QTY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2027
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "LINE TOTAL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2048
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 2071
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1944
                                    }, this),
                                    rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "quick-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                "Line ",
                                                                i + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                                            lineNumber: 3,
                                                            columnNumber: 2152
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                                    lineNumber: 3,
                                                                    columnNumber: 2182
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: r.query,
                                                                    onChange: (e)=>find(r.id, e.target.value),
                                                                    placeholder: "Enter SKU or product name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                                    lineNumber: 3,
                                                                    columnNumber: 2191
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                                            lineNumber: 3,
                                                            columnNumber: 2177
                                                        }, this),
                                                        r.query.length > 2 && !r.product && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {}, void 0, false, {
                                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                                    lineNumber: 3,
                                                                    columnNumber: 2336
                                                                }, this),
                                                                " No exact match yet"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                                            lineNumber: 3,
                                                            columnNumber: 2332
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2145
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "quick-match",
                                                    children: r.product ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: r.product.image
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                                lineNumber: 3,
                                                                columnNumber: 2425
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: r.product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                                                        lineNumber: 3,
                                                                        columnNumber: 2459
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: [
                                                                            r.product.sku,
                                                                            " · Case of ",
                                                                            r.product.casePack
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                                                        lineNumber: 3,
                                                                        columnNumber: 2482
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                                lineNumber: 3,
                                                                columnNumber: 2453
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2423
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "waiting",
                                                        children: "Awaiting product reference"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2554
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2383
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "quick-qty",
                                                    min: "1",
                                                    type: "number",
                                                    value: r.qty,
                                                    onChange: (e)=>update(r.id, {
                                                            qty: Math.max(1, +e.target.value)
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2620
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: r.product ? `$${(r.product.price * r.product.casePack * r.qty).toFixed(2)}` : '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2747
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setRows((x)=>x.filter((a)=>a.id !== r.id)),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                                        lineNumber: 3,
                                                        columnNumber: 2888
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/QuickOrder.tsx",
                                                    lineNumber: 3,
                                                    columnNumber: 2829
                                                }, this)
                                            ]
                                        }, r.id, true, {
                                            fileName: "[project]/src/views/QuickOrder.tsx",
                                            lineNumber: 3,
                                            columnNumber: 2107
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 1915
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "add-row",
                                onClick: ()=>setRows((r)=>[
                                            ...r,
                                            {
                                                id: Date.now(),
                                                query: '',
                                                qty: 1
                                            }
                                        ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3012
                                    }, this),
                                    " Add another product line"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 2920
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "csv-upload",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {}, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3081
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Upload a completed SKU list"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3095
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "CSV file with SKU and CASE_QUANTITY columns · frontend preview validation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3090
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            uploaded || 'Choose CSV file',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".csv",
                                                onChange: (e)=>setUploaded(e.target.files?.[0]?.name || '')
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/QuickOrder.tsx",
                                                lineNumber: 3,
                                                columnNumber: 3257
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3221
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3053
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/QuickOrder.tsx",
                        lineNumber: 3,
                        columnNumber: 1705
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Quick order summary"
                            }, void 0, false, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3376
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Matched product lines"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3409
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: rows.filter((r)=>r.product).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3443
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3404
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total cases"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3495
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: rows.filter((r)=>r.product).reduce((a, r)=>a + r.qty, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3519
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3490
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Account pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3589
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: user.status === 'approved' ? user.tier : 'Sign in required'
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3584
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3685
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quick-total",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Merchandise estimate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3719
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "$",
                                            subtotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3752
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3690
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Final availability, tier pricing, tax and freight are confirmed through checkout."
                            }, void 0, false, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3787
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn dark full",
                                onClick: submit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {}, void 0, false, {
                                        fileName: "[project]/src/views/QuickOrder.tsx",
                                        lineNumber: 3,
                                        columnNumber: 3926
                                    }, this),
                                    " Add matched lines to order"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3875
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$62JRHF6Z$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                to: "/shop",
                                children: "Browse the complete catalog →"
                            }, void 0, false, {
                                fileName: "[project]/src/views/QuickOrder.tsx",
                                lineNumber: 3,
                                columnNumber: 3976
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/QuickOrder.tsx",
                        lineNumber: 3,
                        columnNumber: 3369
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/QuickOrder.tsx",
                lineNumber: 3,
                columnNumber: 1659
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/QuickOrder.tsx",
        lineNumber: 3,
        columnNumber: 1167
    }, this);
}
_s(QuickOrder, "Os21jDv0Lwue+Ui8t83nIjSOoOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = QuickOrder;
var _c;
__turbopack_context__.k.register(_c, "QuickOrder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ubzfya._.js.map