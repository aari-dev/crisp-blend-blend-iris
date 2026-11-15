import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Copy, r as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bz-RTDxb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CONTRACT = "TBA";
var LAUNCH_NOTE = "Super Indie ($SI) — contract TBA. Search Super Indie on Pump.fun and match the cape.";
var TICKER = [
	"Super Indie",
	"$SI",
	"The cape stays on",
	"For Indie",
	"Fair launch",
	"Solana",
	"A very good boy",
	"0% tax"
];
var QUIPS = [
	"Cape's on.",
	"Five more minutes.",
	"You're the good boy, actually.",
	"Don't move the cape."
];
var FACTS = [
	{
		title: "The cape",
		copy: "Red, a little wrinkled, worn like it was his idea.",
		className: "bg-ember text-carbon"
	},
	{
		title: "The name",
		copy: "Indie at home. Super Indie on the ticker.",
		className: "bg-sunburst text-carbon"
	},
	{
		title: "The photo",
		copy: "Floor, fur, cape. That's the whole whitepaper.",
		className: "bg-lavender text-carbon"
	},
	{
		title: "The chain",
		copy: "Solana. Pump.fun. Fair launch when it goes live.",
		className: "bg-voltage-violet text-paper-white"
	}
];
var SHEET = [
	["His name", "Indie"],
	["Ticker", "$SI"],
	["Full name", "Super Indie"],
	["Uniform", "Red cape, floor shift"],
	["Chain", "Solana"]
];
var STATS = [
	{
		label: "Supply",
		value: "1,000,000,000"
	},
	{
		label: "Buy / sell tax",
		value: "0% / 0%"
	},
	{
		label: "Launch",
		value: "Fair. No presale."
	},
	{
		label: "Liquidity",
		value: "Pump.fun curve"
	}
];
var STEPS = [
	{
		n: "01",
		title: "Get a wallet",
		copy: "Phantom or Solflare. Anything that can hold SOL.",
		className: "bg-paper-white"
	},
	{
		n: "02",
		title: "Fund it",
		copy: "A little SOL covers the swap and the network fee. Start smaller than your courage.",
		className: "bg-sunburst"
	},
	{
		n: "03",
		title: "Search the name",
		copy: "On Pump.fun, look for Super Indie. Match the cape, not a lookalike ticker.",
		className: "bg-mint-pop"
	},
	{
		n: "04",
		title: "Swap",
		copy: "You're buying a tribute, not a promise. Memecoins can go to zero.",
		className: "bg-paper-white"
	}
];
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const area = document.createElement("textarea");
			area.value = text;
			area.setAttribute("readonly", "");
			area.style.position = "fixed";
			area.style.left = "-9999px";
			document.body.appendChild(area);
			area.select();
			const ok = document.execCommand("copy");
			area.remove();
			return ok;
		} catch {
			return false;
		}
	}
}
function Marquee() {
	const row = [...TICKER, ...TICKER];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "marquee-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sr-only",
			children: "Super Indie, $SI. The cape stays on. For Indie. Fair launch on Solana."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee",
			"aria-hidden": "true",
			children: row.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "marquee-item",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "marquee-dot" })]
			}, `${item}-${index}`))
		})]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-carbon bg-paper-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page flex items-center gap-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "logo-mark",
					href: "#top",
					"aria-label": "Super Indie home",
					children: "SI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",
					"aria-label": "Page",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-pill",
							href: "#story",
							children: "Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-pill",
							href: "#coin",
							children: "Coin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-pill",
							href: "#buy",
							children: "Buy"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "btn-fill shrink-0",
					href: "https://pump.fun/",
					target: "_blank",
					rel: "noreferrer",
					children: ["Buy $SI", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 16,
						"aria-hidden": "true"
					})]
				})
			]
		})
	});
}
function Hero() {
	const [quip, setQuip] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-sky-wash",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "hero-ribbon",
				src: "/stickers/ribbon.png",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "sticker sticker-paw",
				src: "/stickers/paw.png",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "sticker sticker-star",
				src: "/stickers/star.png",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "sticker sticker-bone",
				src: "/stickers/bone.png",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "sticker sticker-cape",
				src: "/stickers/cape.png",
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page relative z-10 pb-16 pt-8 md:pb-28 md:pt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "sticker sticker-coin",
								src: "/stickers/coin.png",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "For Indie"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-title mt-5 text-carbon",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SUPER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INDIE" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede mt-6 text-carbon",
								children: "Indie already had the cape. $SI just puts it on the ticker."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-4 text-carbon",
								children: "A cream-colored dog, a red cape that never sat quite straight, and a Solana coin named for the nap that outlasted the afternoon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn-fill",
									href: "#buy",
									children: "How to buy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn-ghost",
									href: "#story",
									children: "Read the cape"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "dog-card",
						onClick: () => setQuip((n) => (n + 1) % QUIPS.length),
						"aria-label": "Indie in his cape. Tap for another line from him.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/indie.jpg",
								alt: "Indie, a cream-colored dog lying on a wood floor in a red cape"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quip",
								children: QUIPS[quip]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "dog-meta",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Indie" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tap him" })]
							})
						]
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-stickers",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stickers/paw.png",
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stickers/coin.png",
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stickers/bone.png",
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stickers/cape.png",
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/stickers/star.png",
							alt: ""
						})
					]
				})]
			})
		]
	});
}
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper-white",
		id: "story",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page py-16 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title",
					children: [
						"HE WORE",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"THE CAPE"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy text-lg leading-snug",
						children: "Indie was not a brand. He was the dog on the floor in a red cape, one ear folded, paws stretched out like the day could wait."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy",
						children: "The picture is the pitch. Soft fur, a cape that stayed on through the nap, and a face that looks like he knew something the rest of the room didn't. Super Indie doesn't try to replace him. It keeps the cape in the ticker."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: FACTS.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `fact-card ${fact.className}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: fact.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fact.copy })]
					}, fact.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "sheet",
					children: SHEET.map(([term, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: term }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: detail })]
					}, term))
				})]
			})]
		})
	});
}
function Coin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-concrete-gray",
		id: "coin",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "section-ribbon",
			src: "/stickers/ribbon.png",
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page relative z-10 py-16 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker bg-mint-pop",
					children: "The coin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title mt-5",
					children: "$SI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-6",
					children: "One billion. No tax. No presale story. Just a good boy and a launch on Pump.fun."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "stat-card bg-paper-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stat.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block",
							children: stat.value
						})]
					}, stat.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6",
					children: "Those are the launch plans, not a live pool. Nothing here is financial advice, and the contract stays blank until $SI is actually live."
				})
			]
		})]
	});
}
function Buy() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	async function onCopy() {
		const ok = await copyText(LAUNCH_NOTE);
		setStatus(ok ? "copied" : "manual");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-lavender",
		id: "buy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page py-16 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "section-title",
					children: [
						"HOW TO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"GET $SI"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `step-card ${step.className}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "step-index",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label mt-4",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-2",
								children: step.copy
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ca-card mt-8 md:grid-cols-[1fr_auto] md:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label",
								children: "Contract"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ca-value",
								children: CONTRACT
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-3",
								children: "Address lands here when the mint is real. Until then, search the name — don't trust a ticker that borrowed the cape."
							}),
							status === "manual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-3 break-all",
								children: LAUNCH_NOTE
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn-ghost",
								onClick: onCopy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									size: 16,
									"aria-hidden": "true"
								}), status === "copied" ? "Copied" : "Copy launch note"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "btn-fill",
								href: "https://pump.fun/",
								target: "_blank",
								rel: "noreferrer",
								children: ["Open Pump.fun", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 16,
									"aria-hidden": "true"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sr-only",
							"aria-live": "polite",
							children: status === "copied" ? "Launch note copied." : ""
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "overflow-hidden bg-sky-wash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page pb-28 pt-12 md:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "footer-title",
					children: [
						"SUPER",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"INDIE"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-4",
					children: "For Indie. The cape never came off."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-4 max-w-xl",
					children: "Super Indie is a memecoin tribute. It can go to zero. When a contract shows up, check it yourself — this page says TBA until the real address exists."
				})
			]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper-white text-carbon",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Buy, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
