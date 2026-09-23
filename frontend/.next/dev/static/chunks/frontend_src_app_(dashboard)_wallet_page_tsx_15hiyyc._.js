(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/(dashboard)/wallet/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TRANSACTIONS = [
    {
        id: "txn-001",
        type: "receive",
        amount: "50.00",
        currency: "USDC",
        date: "2026-09-18 14:32",
        status: "success"
    },
    {
        id: "txn-002",
        type: "send",
        amount: "12.50",
        currency: "USDC",
        date: "2026-09-17 09:15",
        status: "success"
    },
    {
        id: "txn-003",
        type: "buy",
        amount: "100.00",
        currency: "USDC",
        date: "2026-09-16 18:45",
        status: "success"
    }
];
function QRIcon({ size = 120 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 120 120",
        style: {
            opacity: 0.15
        },
        children: [
            Array.from({
                length: 10
            }, (_, r)=>Array.from({
                    length: 10
                }, (_, c)=>(r * 3 + c * 7 + r * c) % 3 !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: c * 12,
                        y: r * 12,
                        width: 10,
                        height: 10,
                        rx: 1.5,
                        fill: "#0f1f3d"
                    }, `${r}-${c}`, false, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this) : null)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "0",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: "#0f1f3d",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "84",
                y: "0",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: "#0f1f3d",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "84",
                width: "36",
                height: "36",
                rx: "4",
                fill: "none",
                stroke: "#0f1f3d",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "8",
                width: "20",
                height: "20",
                rx: "2",
                fill: "#0f1f3d"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "92",
                y: "8",
                width: "20",
                height: "20",
                rx: "2",
                fill: "#0f1f3d"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "92",
                width: "20",
                height: "20",
                rx: "2",
                fill: "#0f1f3d"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = QRIcon;
function TypeIcon({ type }) {
    const colors = {
        receive: "#0dab76",
        send: "#e85d04",
        buy: "#6f42c1",
        sell: "#dc2626"
    };
    const labels = {
        receive: "↓",
        send: "↑",
        buy: "B",
        sell: "S"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 32,
            height: 32,
            borderRadius: 8,
            background: colors[type] + "18",
            color: colors[type],
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: "0.85rem",
            flexShrink: 0
        },
        children: labels[type]
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = TypeIcon;
function WalletPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const metamaskAddress = ("TURBOPACK compile-time truthy", 1) ? sessionStorage.getItem("abc_pay_metamask_address") : "TURBOPACK unreachable";
    const role = ("TURBOPACK compile-time truthy", 1) ? sessionStorage.getItem("abc_pay_role") : "TURBOPACK unreachable";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletPage.useEffect": ()=>{
            setLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])("/wallets/me").then(setData).catch({
                "WalletPage.useEffect": (err)=>setError(err.message)
            }["WalletPage.useEffect"]).finally({
                "WalletPage.useEffect": ()=>setLoading(false)
            }["WalletPage.useEffect"]);
        }
    }["WalletPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eyebrow",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "2.5rem",
                                            marginTop: 4
                                        },
                                        children: [
                                            "Welcome, ",
                                            role === "individual" ? "Individual" : "User"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button primary",
                                children: "Connect Wallet"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 16,
                            padding: "32px 24px",
                            borderColor: "#e85d04",
                            background: "#ffffff",
                            color: "#0f1f3d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#0f1f3d"
                                },
                                children: "Your Wallet"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    width: 140,
                                    height: 140
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRIcon, {
                                        size: 140
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            display: "grid",
                                            placeItems: "center",
                                            background: "rgba(255,255,255,0.85)",
                                            borderRadius: 12
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                background: "#e85d04",
                                                display: "grid",
                                                placeItems: "center",
                                                color: "#fff",
                                                fontWeight: 800,
                                                fontSize: "1.2rem"
                                            },
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.85rem",
                                            color: "#6b7a95"
                                        },
                                        children: "Wallet address"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        style: {
                                            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                                            background: "#f7f8fa",
                                            border: "1px solid #e2e6ed",
                                            padding: "6px 12px",
                                            borderRadius: 8,
                                            fontSize: "0.85rem",
                                            color: "#0f1f3d"
                                        },
                                        children: metamaskAddress ?? data?.wallet.publicAddress ?? "Not connected"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 24,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "1.8rem",
                                                    fontWeight: 800,
                                                    color: "#0f1f3d"
                                                },
                                                children: [
                                                    loading ? "—" : data?.wallet.balanceCached ?? "0",
                                                    " ",
                                                    data?.wallet.stablecoin ?? "USDC"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.8rem",
                                                    color: "#6b7a95"
                                                },
                                                children: "Available balance"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "1.8rem",
                                                    fontWeight: 800,
                                                    color: "#0f1f3d"
                                                },
                                                children: data?.wallet.chain ?? "EVM"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.8rem",
                                                    color: "#6b7a95"
                                                },
                                                children: "Network"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#0f1f3d",
                                    marginBottom: 12
                                },
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 12,
                                    flexWrap: "wrap"
                                },
                                children: [
                                    "Send",
                                    "Receive",
                                    "Buy",
                                    "Sell"
                                ].map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        style: {
                                            background: action === "Buy" ? "#e85d04" : "#f7f8fa",
                                            borderColor: action === "Buy" ? "#e85d04" : "#e2e6ed",
                                            color: action === "Buy" ? "#fff" : "#0f1f3d",
                                            fontWeight: 700,
                                            padding: "10px 20px"
                                        },
                                        children: action
                                    }, action, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#0f1f3d",
                            marginBottom: 12
                        },
                        children: "Recent Activity"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            background: "#ffffff",
                            borderColor: "#e2e6ed",
                            padding: "16px",
                            display: "grid",
                            gap: 12
                        },
                        children: TRANSACTIONS.map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "10px 0",
                                    borderBottom: "1px solid #f0f0f0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                        type: tx.type
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: "0.9rem",
                                                    color: "#0f1f3d"
                                                },
                                                children: [
                                                    tx.type.charAt(0).toUpperCase() + tx.type.slice(1),
                                                    " ",
                                                    tx.currency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.78rem",
                                                    color: "#6b7a95"
                                                },
                                                children: tx.date
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "right"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    color: tx.type === "send" ? "#e85d04" : "#0dab76"
                                                },
                                                children: [
                                                    tx.type === "send" ? "-" : "+",
                                                    " ",
                                                    tx.amount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.7rem",
                                                    fontWeight: 600,
                                                    color: tx.status === "success" ? "#0dab76" : "#6b7a95",
                                                    background: tx.status === "success" ? "#e6f9f1" : "#f1f5f9",
                                                    padding: "2px 8px",
                                                    borderRadius: 20,
                                                    display: "inline-block",
                                                    marginTop: 2
                                                },
                                                children: tx.status
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, tx.id, true, {
                                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "error",
                        style: {
                            marginTop: 16
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                        lineNumber: 260,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(dashboard)/wallet/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(WalletPage, "GraZEmz+GK7PhifmNjFZhdgaObE=");
_c2 = WalletPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QRIcon");
__turbopack_context__.k.register(_c1, "TypeIcon");
__turbopack_context__.k.register(_c2, "WalletPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_app_%28dashboard%29_wallet_page_tsx_15hiyyc._.js.map