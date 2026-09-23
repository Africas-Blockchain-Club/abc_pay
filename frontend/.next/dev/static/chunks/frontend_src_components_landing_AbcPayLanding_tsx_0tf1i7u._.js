(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/landing/AbcPayLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AbcPayLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── Design tokens ─────────────────────────────────────────────────────────────
const C = {
    navy: "#0f1f3d",
    navyDark: "#070f1e",
    orange: "#e85d04",
    orangeLight: "#ff7a2f",
    white: "#ffffff",
    surface: "#f7f8fa",
    border: "#e2e6ed",
    muted: "#6b7a95",
    success: "#0dab76",
    successBg: "#e6f9f1",
    amber: "#d97706",
    amberBg: "#fef3c7",
    error: "#dc2626",
    errorBg: "#fee2e2",
    neutral: "#64748b",
    neutralBg: "#f1f5f9"
};
// ── SVG Icon system — 2px stroke, round caps, Lucide-style ────────────────────
const stroke = {
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
};
function Icon({ children, size = 20, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        ...stroke,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c = Icon;
function IconZAR({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 8h4.5a2.5 2.5 0 010 5H9m0-5v8m0-4.5h6"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = IconZAR;
function IconCoin({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12h6M12 9v6"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 8.5c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 1.5-3 1.5-3 .4-3 1.5 1.3 2 3 2 3-.9 3-2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c2 = IconCoin;
function IconPulse({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 12 18 12 15 20 9 4 6 12 2 12"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c3 = IconPulse;
function IconAfrica({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3C7 3 3.5 7 3.5 11c0 2.5 1 4.5 2 6 .8 1.2 1.5 2.5 1.5 4h2c0 0 .5-1 1-1s1 1 2 1 1-1 1-1h1c0-1.5.7-2.8 1.5-4 1-1.5 2-3.5 2-6 0-4-3.5-8-6.5-8z"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "10",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 10.5l4 2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = IconAfrica;
function IconTerminal({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 20h8M12 18v2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 10h4M7 13h6"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c5 = IconTerminal;
function IconQRScan({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7V4h3M17 4h3v3M4 17v3h3M20 17v3h-3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "7",
                width: "4",
                height: "4",
                rx: "0.5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "7",
                width: "4",
                height: "4",
                rx: "0.5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "13",
                width: "4",
                height: "4",
                rx: "0.5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 15h4v2M15 13v2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c6 = IconQRScan;
function IconWalletCheck({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 10h14"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c7 = IconWalletCheck;
function IconSettlement({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11V7a5 5 0 0110 0v4"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15v2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c8 = IconSettlement;
function IconShieldCheck({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l8 4v5c0 4.5-3.5 8.7-8 10-4.5-1.3-8-5.5-8-10V7l8-4z"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c9 = IconShieldCheck;
function IconReceipt({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4v16l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5V4H4z"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 9h8M8 13h5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c10 = IconReceipt;
function IconNodes({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "12",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "6",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "18",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11l10-4M7 13l10 4"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c11 = IconNodes;
function IconWallet({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 8a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 11h20"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "15",
                r: "1",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c12 = IconWallet;
function IconCheck({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12l5 5 9-10"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 141,
            columnNumber: 28
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 141,
        columnNumber: 10
    }, this);
}
_c13 = IconCheck;
function IconClock({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 144,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7v5l3 3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 144,
                columnNumber: 60
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 144,
        columnNumber: 10
    }, this);
}
_c14 = IconClock;
function IconChevron({ size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        size: size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 18l6-6-6-6"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 147,
            columnNumber: 28
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 147,
        columnNumber: 10
    }, this);
}
_c15 = IconChevron;
// ── Status badge ───────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
    const map = {
        success: {
            bg: C.successBg,
            color: C.success,
            dot: C.success,
            label: "Successful"
        },
        processing: {
            bg: C.amberBg,
            color: C.amber,
            dot: C.amber,
            label: "Processing"
        },
        expired: {
            bg: C.neutralBg,
            color: C.neutral,
            dot: C.neutral,
            label: "Expired"
        },
        failed: {
            bg: C.errorBg,
            color: C.error,
            dot: C.error,
            label: "Failed"
        }
    };
    const s = map[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full",
        style: {
            background: s.bg,
            color: s.color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                style: {
                    background: s.dot
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            s.label
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c16 = StatusBadge;
// ── Countdown ──────────────────────────────────────────────────────────────────
function CountdownBadge({ seconds }) {
    _s();
    const [rem, setRem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seconds);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownBadge.useEffect": ()=>{
            if (rem <= 0) return;
            const t = setTimeout({
                "CountdownBadge.useEffect.t": ()=>setRem({
                        "CountdownBadge.useEffect.t": (r)=>r - 1
                    }["CountdownBadge.useEffect.t"])
            }["CountdownBadge.useEffect.t"], 1000);
            return ({
                "CountdownBadge.useEffect": ()=>clearTimeout(t)
            })["CountdownBadge.useEffect"];
        }
    }["CountdownBadge.useEffect"], [
        rem
    ]);
    const m = Math.floor(rem / 60);
    const s = rem % 60;
    const urgent = rem < 30;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
        style: {
            background: urgent ? C.errorBg : C.amberBg,
            color: urgent ? C.error : "#92400e"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {
                size: 12
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            "Quote expires ",
            m,
            ":",
            s.toString().padStart(2, "0")
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(CountdownBadge, "wk2mwjey0gvRTcpXHXenDuKV9eo=");
_c17 = CountdownBadge;
// ── QR pattern (deterministic, decorative) ─────────────────────────────────────
const QR_GRID = Array.from({
    length: 10
}, (_, r)=>Array.from({
        length: 10
    }, (_, c)=>(r * 3 + c * 7 + r * c) % 3 !== 0));
function QRPattern() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
        style: {
            opacity: 0.18
        },
        children: [
            QR_GRID.map((row, r)=>row.map((on, c)=>on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: c * 12,
                        y: r * 12,
                        width: 10,
                        height: 10,
                        rx: 1.5,
                        fill: C.navy
                    }, `${r}-${c}`, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 195,
                        columnNumber: 14
                    }, this) : null)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "0",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: C.navy,
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "84",
                y: "0",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: C.navy,
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "84",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: C.navy,
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "8",
                width: "20",
                height: "20",
                rx: "2",
                fill: C.navy
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "92",
                y: "8",
                width: "20",
                height: "20",
                rx: "2",
                fill: C.navy
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "92",
                width: "20",
                height: "20",
                rx: "2",
                fill: C.navy
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_c18 = QRPattern;
// ── Merchant payment card (hero product visual) ────────────────────────────────
function MerchantCard() {
    _s1();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("500");
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("input");
    const [notif, setNotif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const usdc = (Number(amount) / 18.42).toFixed(2);
    const generate = ()=>{
        setStage("qr");
        setTimeout(()=>{
            setStage("success");
            setNotif(true);
            setTimeout(()=>setNotif(false), 3500);
        }, 3000);
    };
    const reset = ()=>{
        setStage("input");
        setNotif(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-sm mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-14 left-1/2 z-20 pointer-events-none transition-all duration-500",
                style: {
                    transform: `translateX(-50%) translateY(${notif ? 0 : -8}px)`,
                    opacity: notif ? 1 : 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg text-white whitespace-nowrap",
                    style: {
                        background: C.success
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        "R",
                        amount,
                        " payment received"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl shadow-2xl overflow-hidden",
                style: {
                    background: C.white,
                    border: `1px solid ${C.border}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3.5 flex items-center justify-between",
                        style: {
                            borderBottom: `1px solid ${C.border}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/abc-logo.jpg",
                                        alt: "ABC Pay",
                                        width: 190,
                                        height: 200,
                                        className: "h-6 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm",
                                        style: {
                                            color: C.navy
                                        },
                                        children: "ABC Pay"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full",
                                style: {
                                    background: C.successBg,
                                    color: C.success
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full",
                                        style: {
                                            background: C.success
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    "Live"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: [
                            stage === "input" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold uppercase tracking-widest mb-2",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: "Amount to receive"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-4 py-3 rounded-xl",
                                                style: {
                                                    border: `2px solid ${C.orange}`,
                                                    background: "#fff9f5"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-xl",
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: "R"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: amount,
                                                        onChange: (e)=>setAmount(e.target.value),
                                                        className: "flex-1 bg-transparent font-black text-2xl outline-none w-0 min-w-0",
                                                        style: {
                                                            color: C.navy
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium flex-shrink-0",
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: "ZAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl p-3.5 flex flex-col gap-2.5",
                                        style: {
                                            background: C.surface
                                        },
                                        children: [
                                            [
                                                "Customer pays",
                                                `≈ ${usdc} USDC`
                                            ],
                                            [
                                                "Network",
                                                "Polygon"
                                            ],
                                            [
                                                "Quote validity",
                                                "2 minutes"
                                            ]
                                        ].map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: k
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        style: {
                                                            color: C.navy
                                                        },
                                                        children: v
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2",
                                        style: {
                                            background: C.orange
                                        },
                                        onClick: generate,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQRScan, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            "Generate payment QR"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this),
                            stage === "qr" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium",
                                        style: {
                                            color: C.muted
                                        },
                                        children: "Waiting for payment…"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-48 h-48 rounded-xl flex items-center justify-center relative",
                                        style: {
                                            background: C.surface,
                                            border: `2px dashed ${C.border}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRPattern, {}, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full border-[3px] animate-spin",
                                                    style: {
                                                        borderColor: `${C.orange} transparent transparent transparent`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-black text-2xl",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: [
                                                    "R",
                                                    amount,
                                                    ".00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs mt-0.5",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: [
                                                    "≈ ",
                                                    usdc,
                                                    " USDC · Polygon"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountdownBadge, {
                                        seconds: 120
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            stage === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full flex items-center justify-center",
                                        style: {
                                            background: C.successBg
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.success
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                                size: 28
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 317,
                                                columnNumber: 52
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-black text-xl",
                                                style: {
                                                    color: C.success
                                                },
                                                children: "Payment received"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm mt-0.5",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: [
                                                    "R",
                                                    amount,
                                                    ".00 ZAR"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full rounded-xl p-3.5 text-sm flex flex-col gap-2",
                                        style: {
                                            background: C.surface
                                        },
                                        children: [
                                            [
                                                "Reference",
                                                "TXN-2481"
                                            ],
                                            [
                                                "Network",
                                                "Polygon"
                                            ],
                                            [
                                                "Settlement",
                                                "Processing ZAR"
                                            ]
                                        ].map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: k
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        style: {
                                                            color: k === "Settlement" ? C.success : C.navy
                                                        },
                                                        children: v
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-sm font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity",
                                        style: {
                                            color: C.orange
                                        },
                                        onClick: reset,
                                        children: [
                                            "New payment ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevron, {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 333,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s1(MerchantCard, "pIBzlzPi6opAQL6bPA21lr+fEAo=");
_c19 = MerchantCard;
// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav() {
    _s2();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const h = {
                "Nav.useEffect.h": ()=>setScrolled(window.scrollY > 20)
            }["Nav.useEffect.h"];
            window.addEventListener("scroll", h);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", h)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        style: {
            background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
            backdropFilter: "blur(14px)",
            borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/abc-logo.jpg",
                                alt: "ABC",
                                width: 190,
                                height: 200,
                                className: "h-9 w-auto",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-black text-lg tracking-tight",
                                        style: {
                                            color: C.navy
                                        },
                                        children: "ABC Pay"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-medium",
                                        style: {
                                            color: C.muted
                                        },
                                        children: "by Africa’s Blockchain Club"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8 text-sm font-medium",
                        style: {
                            color: C.navy
                        },
                        children: [
                            "How it works",
                            "For merchants",
                            "For customers",
                            "Security"
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${l.toLowerCase().replace(/ /g, "-")}`,
                                className: "hover:opacity-60 transition-opacity",
                                children: l
                            }, l, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "text-sm font-medium hover:opacity-60 transition-opacity",
                                style: {
                                    color: C.navy
                                },
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/merchant/qr-generate",
                                className: "px-4 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity",
                                style: {
                                    background: C.orange
                                },
                                children: "Start accepting payments"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden flex flex-col gap-1.5 p-2",
                        onClick: ()=>setOpen(!open),
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block w-5 h-0.5 rounded",
                                style: {
                                    background: C.navy
                                }
                            }, i, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 385,
                                columnNumber: 31
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-6 pb-5 flex flex-col gap-3 text-sm font-medium bg-white",
                style: {
                    color: C.navy
                },
                children: [
                    [
                        "How it works",
                        "For merchants",
                        "For customers",
                        "Security"
                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${l.toLowerCase().replace(/ /g, "-")}`,
                            className: "py-2.5 border-b",
                            style: {
                                borderColor: C.border
                            },
                            onClick: ()=>setOpen(false),
                            children: l
                        }, l, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: "py-2.5 border-b",
                        style: {
                            borderColor: C.border
                        },
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/merchant/qr-generate",
                        className: "mt-1 py-3.5 rounded-xl font-bold text-white text-center",
                        style: {
                            background: C.orange,
                            minHeight: 44
                        },
                        children: "Start accepting payments"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s2(Nav, "jAm7jTHG65/J2yarYImCswCRH6E=");
_c20 = Nav;
// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-28 pb-20 px-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                style: {
                    opacity: 0.03
                },
                preserveAspectRatio: "xMidYMid slice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "30%",
                        x2: "100%",
                        y2: "70%",
                        stroke: C.navy,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "20%",
                        y1: "0",
                        x2: "80%",
                        y2: "100%",
                        stroke: C.navy,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "60%",
                        y1: "0",
                        x2: "40%",
                        y2: "100%",
                        stroke: C.navy,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30%",
                        cy: "40%",
                        r: "4",
                        fill: C.navy
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "70%",
                        cy: "60%",
                        r: "4",
                        fill: C.navy
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "55%",
                        cy: "25%",
                        r: "3",
                        fill: C.navy
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-[1fr_420px] gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit",
                                    style: {
                                        background: "#fff4ee",
                                        color: C.orange,
                                        border: `1px solid #fcd5b0`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                            style: {
                                                background: C.orange
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        "An Africa’s Blockchain Club project"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl lg:text-[3.75rem] font-black leading-[1.04] tracking-tight",
                                    style: {
                                        color: C.navy
                                    },
                                    children: [
                                        "Accept stablecoins.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 429,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "Receive rand."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg leading-relaxed max-w-lg",
                                    style: {
                                        color: C.muted
                                    },
                                    children: "ABC Pay gives South African businesses a simple way to accept stablecoin payments and settle their sales in ZAR — no crypto expertise required."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/merchant/qr-generate",
                                            className: "px-6 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity",
                                            style: {
                                                background: C.orange,
                                                minHeight: 44
                                            },
                                            children: "Start accepting payments"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#how-it-works",
                                            className: "px-6 py-3 rounded-xl font-bold hover:opacity-80 transition-opacity",
                                            style: {
                                                background: C.white,
                                                border: `2px solid ${C.navy}`,
                                                color: C.navy,
                                                minHeight: 44
                                            },
                                            children: "See how it works"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-6 pt-1",
                                    style: {
                                        borderTop: `1px solid ${C.border}`,
                                        paddingTop: "1.25rem"
                                    },
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconZAR, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 451,
                                                columnNumber: 25
                                            }, this),
                                            label: "Settle in ZAR"
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPulse, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 452,
                                                columnNumber: 25
                                            }, this),
                                            label: "Track payments live"
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCoin, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 453,
                                                columnNumber: 25
                                            }, this),
                                            label: "Stablecoin enabled"
                                        }
                                    ].map(({ icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-medium",
                                            style: {
                                                color: C.muted
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.navy
                                                    },
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                label
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MerchantCard, {}, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_c21 = Hero;
// ── Feature strip ──────────────────────────────────────────────────────────────
function FeatureStrip() {
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconZAR, {
                size: 24
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 474,
                columnNumber: 13
            }, this),
            title: "ZAR settlement",
            desc: "Receive the rand value of completed payments."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCoin, {
                size: 24
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 475,
                columnNumber: 13
            }, this),
            title: "Stablecoin payments",
            desc: "Let customers pay using supported stablecoins."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPulse, {
                size: 24
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 476,
                columnNumber: 13
            }, this),
            title: "Live payment tracking",
            desc: "Follow a payment from request to confirmation."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAfrica, {
                size: 24
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 477,
                columnNumber: 13
            }, this),
            title: "Built for African commerce",
            desc: "Designed around local merchants and payment behaviour."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-14 px-6",
        style: {
            background: C.navy
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-px",
            style: {
                background: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden"
            },
            children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 p-6",
                    style: {
                        background: C.navy
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: {
                                background: "rgba(232,93,4,0.2)",
                                color: C.orange
                            },
                            children: f.icon
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 484,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-sm text-white",
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs mt-1 leading-relaxed",
                                    style: {
                                        color: "rgba(255,255,255,0.5)"
                                    },
                                    children: f.desc
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 488,
                            columnNumber: 13
                        }, this)
                    ]
                }, f.title, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 483,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 481,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
_c22 = FeatureStrip;
// ── How it works ───────────────────────────────────────────────────────────────
function HowItWorks() {
    const steps = [
        {
            n: "01",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTerminal, {
                size: 22
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 502,
                columnNumber: 22
            }, this),
            title: "Create payment",
            desc: "The merchant enters the ZAR amount. ABC Pay generates a secure payment request with a fixed quote."
        },
        {
            n: "02",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQRScan, {
                size: 22
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 503,
                columnNumber: 22
            }, this),
            title: "Display QR",
            desc: "A QR code is presented at the till or online checkout. The customer scans it with their wallet app."
        },
        {
            n: "03",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWalletCheck, {
                size: 22
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 504,
                columnNumber: 22
            }, this),
            title: "Customer approves",
            desc: "The customer reviews all payment details: merchant, amount, network, destination, and expiry."
        },
        {
            n: "04",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSettlement, {
                size: 22
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 505,
                columnNumber: 22
            }, this),
            title: "Receive confirmation",
            desc: "Both the customer and merchant see a clear payment result in this frontend demonstration."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        className: "py-20 px-6",
        style: {
            background: C.surface
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-bold uppercase tracking-widest mb-3",
                            style: {
                                color: C.orange
                            },
                            children: "How it works"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-black",
                            style: {
                                color: C.navy
                            },
                            children: "Four steps from payment request to ZAR."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 510,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:grid grid-cols-4 gap-6 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px",
                            style: {
                                background: C.border
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center z-10",
                                        style: {
                                            background: i === steps.length - 1 ? C.orange : C.white,
                                            border: `1px solid ${C.border}`,
                                            color: i === steps.length - 1 ? C.white : C.orange
                                        },
                                        children: s.icon
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-black tracking-widest",
                                        style: {
                                            color: C.orange
                                        },
                                        children: s.n
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-sm mb-1",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs leading-relaxed",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: s.desc
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.n, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex flex-col gap-0 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-5 top-10 bottom-10 w-px",
                            style: {
                                background: C.border
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this),
                        steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 pb-8 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10",
                                        style: {
                                            background: i === steps.length - 1 ? C.orange : C.white,
                                            border: `1px solid ${C.border}`,
                                            color: i === steps.length - 1 ? C.white : C.orange
                                        },
                                        children: s.icon
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-black tracking-widest mb-0.5",
                                                style: {
                                                    color: C.orange
                                                },
                                                children: s.n
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-sm mb-1",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs leading-relaxed",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: s.desc
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.n, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 509,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
_c23 = HowItWorks;
// ── Merchant dashboard ─────────────────────────────────────────────────────────
function MerchantDashboard() {
    const txns = [
        {
            ref: "TXN-2481",
            amount: "R 500.00",
            coin: "27.17 USDC",
            status: "success",
            time: "2 min ago"
        },
        {
            ref: "TXN-2480",
            amount: "R 1 200.00",
            coin: "65.22 USDC",
            status: "processing",
            time: "8 min ago"
        },
        {
            ref: "TXN-2479",
            amount: "R 350.00",
            coin: "19.02 USDC",
            status: "expired",
            time: "22 min ago"
        },
        {
            ref: "TXN-2478",
            amount: "R 4 800.00",
            coin: "260.87 USDC",
            status: "success",
            time: "1 hr ago"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl shadow-xl overflow-hidden",
        style: {
            border: `1px solid ${C.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 flex items-center justify-between",
                style: {
                    background: C.navy
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/abc-logo.jpg",
                                alt: "ABC Pay",
                                width: 190,
                                height: 200,
                                className: "h-6 w-auto brightness-0 invert"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-white",
                                children: "Merchant Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg text-white hover:opacity-90 transition-opacity",
                        style: {
                            background: C.orange,
                            minHeight: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTerminal, {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            "Create payment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 bg-white",
                style: {
                    borderBottom: `1px solid ${C.border}`
                },
                children: [
                    {
                        label: "Today's sales",
                        value: "R 6 850.00",
                        sub: "+12% vs yesterday",
                        good: true
                    },
                    {
                        label: "ZAR balance",
                        value: "R 22 400.00",
                        sub: "Available to withdraw",
                        good: true
                    },
                    {
                        label: "Transactions",
                        value: "14",
                        sub: "Today",
                        good: false
                    }
                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        style: {
                            borderRight: i < 2 ? `1px solid ${C.border}` : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                style: {
                                    color: C.muted
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-black text-base mt-0.5 tabular-nums",
                                style: {
                                    color: C.navy
                                },
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 595,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-0.5",
                                style: {
                                    color: s.good ? C.success : C.muted
                                },
                                children: s.sub
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-5 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold uppercase tracking-widest mb-3",
                        style: {
                            color: C.muted
                        },
                        children: "Recent transactions"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: txns.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between py-2.5",
                                style: {
                                    borderBottom: `1px solid ${C.border}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono font-semibold",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: t.ref
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs mt-0.5",
                                                style: {
                                                    color: C.muted
                                                },
                                                children: [
                                                    t.time,
                                                    " · ",
                                                    t.coin
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-sm tabular-nums",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: t.amount
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                status: t.status
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 611,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.ref, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 602,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 572,
        columnNumber: 5
    }, this);
}
_c24 = MerchantDashboard;
// ── Merchant section ───────────────────────────────────────────────────────────
function MerchantSection() {
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQRScan, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 626,
                columnNumber: 13
            }, this),
            title: "Generate payment QR codes",
            desc: "Create a payment request in seconds for any ZAR amount."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPulse, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 627,
                columnNumber: 13
            }, this),
            title: "Track payment status",
            desc: "Give merchants a clear waiting, success, failed, or expired state."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconReceipt, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 628,
                columnNumber: 13
            }, this),
            title: "Receipts and transaction history",
            desc: "Prepare transaction records once the payments API is implemented."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconZAR, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 629,
                columnNumber: 13
            }, this),
            title: "Prepare for rand settlement",
            desc: "Keep the merchant experience focused on the ZAR sale amount."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "for-merchants",
        className: "py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-[1fr_480px] gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-widest mb-3",
                                style: {
                                    color: C.orange
                                },
                                children: "For Merchants"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-black leading-tight mb-5",
                                style: {
                                    color: C.navy
                                },
                                children: [
                                    "Crypto payments without",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 638,
                                        columnNumber: 38
                                    }, this),
                                    "the crypto complexity."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed mb-10 max-w-lg",
                                style: {
                                    color: C.muted
                                },
                                children: "ABC Pay handles the payment and settlement experience so merchants do not need to manage blockchain transactions directly."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-2 gap-4",
                                children: features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 p-4 rounded-xl",
                                        style: {
                                            background: C.surface,
                                            border: `1px solid ${C.border}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: "#fff4ee",
                                                    color: C.orange
                                                },
                                                children: f.icon
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 647,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold",
                                                        style: {
                                                            color: C.navy
                                                        },
                                                        children: f.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs mt-0.5 leading-relaxed",
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: f.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 651,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.title, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MerchantDashboard, {}, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 660,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 659,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 634,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 633,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 632,
        columnNumber: 5
    }, this);
}
_c25 = MerchantSection;
// ── Customer phone ─────────────────────────────────────────────────────────────
function CustomerPhone() {
    _s3();
    const [paid, setPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[260px] rounded-[2rem] shadow-2xl overflow-hidden",
            style: {
                background: C.navy,
                padding: 3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[1.75rem] overflow-hidden bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-4 py-2 text-[10px] font-semibold text-white",
                        style: {
                            background: C.navy
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "9:41"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 677,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "10",
                                        viewBox: "0 0 14 10",
                                        fill: "white",
                                        opacity: "0.8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0",
                                                y: "3",
                                                width: "3",
                                                height: "7",
                                                rx: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 680,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "4",
                                                y: "2",
                                                width: "3",
                                                height: "8",
                                                rx: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "8",
                                                y: "1",
                                                width: "3",
                                                height: "9",
                                                rx: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "12",
                                                y: "0",
                                                width: "2",
                                                height: "10",
                                                rx: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "10",
                                        viewBox: "0 0 16 10",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.5",
                                                y: "0.5",
                                                width: "13",
                                                height: "9",
                                                rx: "1.5",
                                                stroke: "white",
                                                strokeOpacity: "0.6"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "2",
                                                width: "9",
                                                height: "6",
                                                rx: "0.5",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 687,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14.5 3.5v3a1.5 1.5 0 000-3z",
                                                fill: "white",
                                                fillOpacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 685,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 675,
                        columnNumber: 11
                    }, this),
                    !paid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-semibold",
                                        style: {
                                            color: C.muted
                                        },
                                        children: "Payment to"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 696,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-black text-base mt-0.5",
                                        style: {
                                            color: C.navy
                                        },
                                        children: "Shoprite Thokoza"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 697,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 695,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-3 flex flex-col gap-2 text-xs",
                                style: {
                                    background: C.surface
                                },
                                children: [
                                    [
                                        "Amount",
                                        "R 500.00"
                                    ],
                                    [
                                        "Pay with",
                                        "USDC"
                                    ],
                                    [
                                        "Network",
                                        "Polygon"
                                    ],
                                    [
                                        "You pay",
                                        "27.17 USDC"
                                    ],
                                    [
                                        "Destination",
                                        "0x3f8…2a9d"
                                    ]
                                ].map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.muted
                                                },
                                                children: k
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 708,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold tabular-nums",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 709,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 707,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 699,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountdownBadge, {
                                seconds: 90
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 713,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-3",
                                style: {
                                    background: C.surface,
                                    border: `1px solid ${C.border}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px]",
                                        style: {
                                            color: C.muted
                                        },
                                        children: "Wallet balance"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-black text-sm mt-0.5 tabular-nums",
                                        style: {
                                            color: C.navy
                                        },
                                        children: "142.30 USDC"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 716,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 714,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2",
                                style: {
                                    background: C.orange,
                                    minHeight: 44
                                },
                                onClick: ()=>setPaid(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWalletCheck, {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 722,
                                        columnNumber: 17
                                    }, this),
                                    "Approve payment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 718,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 694,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex flex-col items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full flex items-center justify-center",
                                style: {
                                    background: C.successBg
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.success
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 729,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 729,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 728,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-black text-lg",
                                        style: {
                                            color: C.success
                                        },
                                        children: "Payment Sent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 732,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: C.muted
                                        },
                                        children: "27.17 USDC · Polygon"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 733,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 731,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full rounded-xl p-3 text-xs flex flex-col gap-2",
                                style: {
                                    background: C.surface
                                },
                                children: [
                                    [
                                        "Merchant",
                                        "Shoprite Thokoza"
                                    ],
                                    [
                                        "Amount",
                                        "R 500.00"
                                    ],
                                    [
                                        "Reference",
                                        "TXN-2481"
                                    ]
                                ].map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.muted
                                                },
                                                children: k
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 742,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                style: {
                                                    color: C.navy
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 743,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 741,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 735,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity",
                                style: {
                                    color: C.orange
                                },
                                onClick: ()=>setPaid(false),
                                children: [
                                    "Try again ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevron, {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 749,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 747,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 727,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 674,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
_s3(CustomerPhone, "BqFdwhZ+4K+q9Rmt8jkBrQWiI1s=");
_c26 = CustomerPhone;
function CustomerSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "for-customers",
        className: "py-20 px-6",
        style: {
            background: C.surface
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-[480px_1fr] gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerPhone, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 764,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-widest mb-3",
                                style: {
                                    color: C.orange
                                },
                                children: "For Customers"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-black leading-tight mb-5",
                                style: {
                                    color: C.navy
                                },
                                children: "Scan. Review. Pay."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-relaxed mb-8",
                                style: {
                                    color: C.muted
                                },
                                children: "Use stablecoins you already hold to pay at any ABC Pay merchant. Every detail is shown before you approve — nothing hidden."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 768,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5",
                                children: [
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQRScan, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 773,
                                            columnNumber: 25
                                        }, this),
                                        title: "Scan the merchant's QR code",
                                        desc: "Open any compatible wallet app and point your camera at the payment QR."
                                    },
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShieldCheck, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 774,
                                            columnNumber: 25
                                        }, this),
                                        title: "Review all payment details",
                                        desc: "Merchant name, ZAR amount, stablecoin equivalent, network, and quote expiry — all confirmed before approval."
                                    },
                                    {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWalletCheck, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 775,
                                            columnNumber: 25
                                        }, this),
                                        title: "Approve the payment",
                                        desc: "Tap approve in the demo to see the intended customer confirmation experience."
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: "#fff4ee",
                                                    color: C.orange
                                                },
                                                children: s.icon
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 778,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-sm",
                                                        style: {
                                                            color: C.navy
                                                        },
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm mt-0.5 leading-relaxed",
                                                        style: {
                                                            color: C.muted
                                                        },
                                                        children: s.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 782,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.title, true, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 777,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 765,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 763,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 762,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 761,
        columnNumber: 5
    }, this);
}
_c27 = CustomerSection;
// ── Security section ───────────────────────────────────────────────────────────
function SecuritySection() {
    const items = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconNodes, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 799,
                columnNumber: 13
            }, this),
            label: "Merchant name"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconZAR, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 800,
                columnNumber: 13
            }, this),
            label: "Rand amount"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCoin, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 801,
                columnNumber: 13
            }, this),
            label: "Stablecoin amount"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAfrica, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 802,
                columnNumber: 13
            }, this),
            label: "Blockchain network"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWallet, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 803,
                columnNumber: 13
            }, this),
            label: "Destination wallet address"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconReceipt, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 804,
                columnNumber: 13
            }, this),
            label: "Payment reference"
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 805,
                columnNumber: 13
            }, this),
            label: "Quote expiry time"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "security",
        className: "py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-[1fr_480px] gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold uppercase tracking-widest mb-3",
                                style: {
                                    color: C.orange
                                },
                                children: "Security"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-black mb-5",
                                style: {
                                    color: C.navy
                                },
                                children: [
                                    "Clear information",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 814,
                                        columnNumber: 32
                                    }, this),
                                    "before every payment."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 813,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg leading-relaxed max-w-lg",
                                style: {
                                    color: C.muted
                                },
                                children: "Customers always see exactly what they’re approving. No hidden amounts, no ambiguous destinations, no surprises."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 816,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex items-center gap-2 p-4 rounded-xl text-sm",
                                style: {
                                    background: C.surface,
                                    border: `1px solid ${C.border}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.success
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShieldCheck, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 821,
                                            columnNumber: 50
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.muted
                                        },
                                        children: "Review the merchant, amount, network, and destination before approving every payment."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 811,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-3.5 rounded-xl",
                                style: {
                                    background: C.surface,
                                    border: `1px solid ${C.border}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                        style: {
                                            background: C.successBg,
                                            color: C.success
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 829,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: C.navy
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 833,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto",
                                        style: {
                                            color: C.success
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 834,
                                            columnNumber: 72
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 834,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 827,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 810,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 809,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 808,
        columnNumber: 5
    }, this);
}
_c28 = SecuritySection;
// ── Final CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6",
        style: {
            background: C.navy
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto text-center flex flex-col items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/abc-logo.jpg",
                    alt: "ABC",
                    width: 190,
                    height: 200,
                    className: "h-14 w-auto brightness-0 invert opacity-75"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 849,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-black text-white",
                    children: "Give your customers another way to pay."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 850,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base max-w-lg",
                    style: {
                        color: "rgba(255,255,255,0.55)"
                    },
                    children: "A practical payment experience for African merchants, ready for the next integration milestone."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 851,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/merchant/qr-generate",
                            className: "px-6 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity",
                            style: {
                                background: C.orange,
                                minHeight: 44
                            },
                            children: "Create merchant account"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 855,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/scan",
                            className: "px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-80",
                            style: {
                                background: "rgba(255,255,255,0.08)",
                                color: C.white,
                                border: "1px solid rgba(255,255,255,0.18)",
                                minHeight: 44
                            },
                            children: "Explore customer payments"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 859,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 854,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 848,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 847,
        columnNumber: 5
    }, this);
}
_c29 = FinalCTA;
// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 px-6",
        style: {
            background: C.navyDark
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8 mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/abc-logo.jpg",
                                            alt: "ABC Pay",
                                            width: 190,
                                            height: 200,
                                            className: "h-8 w-auto brightness-0 invert"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 877,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black text-white",
                                            children: "ABC Pay"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                            lineNumber: 878,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 876,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs leading-relaxed",
                                    style: {
                                        color: "rgba(255,255,255,0.4)"
                                    },
                                    children: "An Africa’s Blockchain Club project."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 880,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: "rgba(255,255,255,0.35)"
                                    },
                                    children: "Johannesburg, South Africa"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 875,
                            columnNumber: 11
                        }, this),
                        [
                            {
                                heading: "Product",
                                links: [
                                    {
                                        label: "How it works",
                                        href: "#how-it-works"
                                    },
                                    {
                                        label: "For merchants",
                                        href: "#for-merchants"
                                    },
                                    {
                                        label: "For customers",
                                        href: "#for-customers"
                                    },
                                    {
                                        label: "Security",
                                        href: "#security"
                                    }
                                ]
                            },
                            {
                                heading: "Build plan",
                                links: [
                                    {
                                        label: "Payment API",
                                        comingSoon: true
                                    },
                                    {
                                        label: "Quotes API",
                                        comingSoon: true
                                    },
                                    {
                                        label: "Customer scan",
                                        href: "/scan"
                                    }
                                ]
                            },
                            {
                                heading: "Prototype",
                                links: [
                                    {
                                        label: "Merchant workspace",
                                        href: "/merchant/qr-generate"
                                    },
                                    {
                                        label: "Customer approval",
                                        href: "/approve/demo"
                                    },
                                    {
                                        label: "Registration",
                                        href: "/register"
                                    }
                                ]
                            }
                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold uppercase tracking-widest text-white mb-4",
                                        children: col.heading
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 911,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2.5",
                                        children: col.links.map((l)=>l.href !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "text-xs transition-colors",
                                                style: {
                                                    color: "rgba(255,255,255,0.4)"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "#fff",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(255,255,255,0.4)",
                                                children: l.label
                                            }, l.label, false, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 915,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs",
                                                style: {
                                                    color: "rgba(255,255,255,0.4)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: l.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
                                                        style: {
                                                            background: "rgba(255,255,255,0.08)",
                                                            color: "rgba(255,255,255,0.5)"
                                                        },
                                                        children: "Coming soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, l.label, true, {
                                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                                lineNumber: 922,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                        lineNumber: 912,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.heading, true, {
                                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                                lineNumber: 910,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 874,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs",
                    style: {
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.3)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "© 2026 ABC Pay — an Africa’s Blockchain Club project"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Johannesburg, South Africa"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                            lineNumber: 939,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                    lineNumber: 936,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
            lineNumber: 873,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 872,
        columnNumber: 5
    }, this);
}
_c30 = Footer;
function AbcPayLanding() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "landing-page min-h-screen",
        style: {
            fontFamily: "'Inter', system-ui, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 950,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureStrip, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 952,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HowItWorks, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 953,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MerchantSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 954,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecuritySection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FinalCTA, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 957,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
                lineNumber: 958,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/landing/AbcPayLanding.tsx",
        lineNumber: 949,
        columnNumber: 5
    }, this);
}
_c31 = AbcPayLanding;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "IconZAR");
__turbopack_context__.k.register(_c2, "IconCoin");
__turbopack_context__.k.register(_c3, "IconPulse");
__turbopack_context__.k.register(_c4, "IconAfrica");
__turbopack_context__.k.register(_c5, "IconTerminal");
__turbopack_context__.k.register(_c6, "IconQRScan");
__turbopack_context__.k.register(_c7, "IconWalletCheck");
__turbopack_context__.k.register(_c8, "IconSettlement");
__turbopack_context__.k.register(_c9, "IconShieldCheck");
__turbopack_context__.k.register(_c10, "IconReceipt");
__turbopack_context__.k.register(_c11, "IconNodes");
__turbopack_context__.k.register(_c12, "IconWallet");
__turbopack_context__.k.register(_c13, "IconCheck");
__turbopack_context__.k.register(_c14, "IconClock");
__turbopack_context__.k.register(_c15, "IconChevron");
__turbopack_context__.k.register(_c16, "StatusBadge");
__turbopack_context__.k.register(_c17, "CountdownBadge");
__turbopack_context__.k.register(_c18, "QRPattern");
__turbopack_context__.k.register(_c19, "MerchantCard");
__turbopack_context__.k.register(_c20, "Nav");
__turbopack_context__.k.register(_c21, "Hero");
__turbopack_context__.k.register(_c22, "FeatureStrip");
__turbopack_context__.k.register(_c23, "HowItWorks");
__turbopack_context__.k.register(_c24, "MerchantDashboard");
__turbopack_context__.k.register(_c25, "MerchantSection");
__turbopack_context__.k.register(_c26, "CustomerPhone");
__turbopack_context__.k.register(_c27, "CustomerSection");
__turbopack_context__.k.register(_c28, "SecuritySection");
__turbopack_context__.k.register(_c29, "FinalCTA");
__turbopack_context__.k.register(_c30, "Footer");
__turbopack_context__.k.register(_c31, "AbcPayLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_landing_AbcPayLanding_tsx_0tf1i7u._.js.map