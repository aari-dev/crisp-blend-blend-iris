import { useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";

const CONTRACT = "TBA";

const LAUNCH_NOTE =
  "Super Indie ($SI) — contract TBA. Search Super Indie on Pump.fun and match the cape.";

const TICKER = [
  "Super Indie",
  "$SI",
  "The cape stays on",
  "For Indie",
  "Fair launch",
  "Solana",
  "A very good boy",
  "0% tax",
];

const QUIPS = [
  "Cape's on.",
  "Five more minutes.",
  "You're the good boy, actually.",
  "Don't move the cape.",
];

const FACTS = [
  {
    title: "The cape",
    copy: "Red, a little wrinkled, worn like it was his idea.",
    className: "bg-ember text-carbon",
  },
  {
    title: "The name",
    copy: "Indie at home. Super Indie on the ticker.",
    className: "bg-sunburst text-carbon",
  },
  {
    title: "The photo",
    copy: "Floor, fur, cape. That's the whole whitepaper.",
    className: "bg-lavender text-carbon",
  },
  {
    title: "The chain",
    copy: "Solana. Pump.fun. Fair launch when it goes live.",
    className: "bg-voltage-violet text-paper-white",
  },
];

const SHEET = [
  ["His name", "Indie"],
  ["Ticker", "$SI"],
  ["Full name", "Super Indie"],
  ["Uniform", "Red cape, floor shift"],
  ["Chain", "Solana"],
];

const STATS = [
  { label: "Supply", value: "1,000,000,000" },
  { label: "Buy / sell tax", value: "0% / 0%" },
  { label: "Launch", value: "Fair. No presale." },
  { label: "Liquidity", value: "Pump.fun curve" },
];

const STEPS = [
  {
    n: "01",
    title: "Get a wallet",
    copy: "Phantom or Solflare. Anything that can hold SOL.",
    className: "bg-paper-white",
  },
  {
    n: "02",
    title: "Fund it",
    copy: "A little SOL covers the swap and the network fee. Start smaller than your courage.",
    className: "bg-sunburst",
  },
  {
    n: "03",
    title: "Search the name",
    copy: "On Pump.fun, look for Super Indie. Match the cape, not a lookalike ticker.",
    className: "bg-mint-pop",
  },
  {
    n: "04",
    title: "Swap",
    copy: "You're buying a tribute, not a promise. Memecoins can go to zero.",
    className: "bg-paper-white",
  },
];

async function copyText(text: string) {
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
  return (
    <div className="marquee-wrap">
      <p className="sr-only">
        Super Indie, $SI. The cape stays on. For Indie. Fair launch on Solana.
      </p>
      <div className="marquee" aria-hidden="true">
        {row.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-carbon bg-paper-white">
      <div className="page flex items-center gap-3 py-3">
        <a className="logo-mark" href="#top" aria-label="Super Indie home">
          SI
        </a>
        <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto" aria-label="Page">
          <a className="nav-pill" href="#story">
            Story
          </a>
          <a className="nav-pill" href="#coin">
            Coin
          </a>
          <a className="nav-pill" href="#buy">
            Buy
          </a>
        </nav>
        <a className="btn-fill shrink-0" href="https://pump.fun/" target="_blank" rel="noreferrer">
          Buy $SI
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [quip, setQuip] = useState(0);

  return (
    <section className="relative overflow-hidden bg-sky-wash" id="top">
      <img className="hero-ribbon" src="/stickers/ribbon.png" alt="" />
      <img className="sticker sticker-paw" src="/stickers/paw.png" alt="" />
      <img className="sticker sticker-star" src="/stickers/star.png" alt="" />
      <img className="sticker sticker-bone" src="/stickers/bone.png" alt="" />
      <img className="sticker sticker-cape" src="/stickers/cape.png" alt="" />

      <div className="page relative z-10 pb-16 pt-8 md:pb-28 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <p className="kicker">For Indie</p>
            <div className="relative mt-5 inline-block max-w-full">
              <img className="sticker sticker-coin" src="/stickers/coin.png" alt="" />
              <h1 className="hero-title text-carbon">
                <span>SUPER</span>
                <span>INDIE</span>
              </h1>
            </div>
            <p className="lede mt-6 text-carbon">
              Indie already had the cape. $SI just puts it on the ticker.
            </p>
            <p className="body-copy mt-4 text-carbon">
              A cream-colored dog, a red cape that never sat quite straight, and a Solana
              coin named for the nap that outlasted the afternoon.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-fill" href="#buy">
                How to buy
              </a>
              <a className="btn-ghost" href="#story">
                Read the cape
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="dog-card"
              onClick={() => setQuip((n) => (n + 1) % QUIPS.length)}
              aria-label="Indie in his cape. Tap for another line from him."
            >
              <img
                src="/media/indie.jpg"
                alt="Indie, a cream-colored dog lying on a wood floor in a red cape"
              />
              <span className="quip">{QUIPS[quip]}</span>
              <span className="dog-meta">
                <strong>Indie</strong>
                <span>Tap him</span>
              </span>
            </button>
          </div>
        </div>

        <div className="mobile-stickers" aria-hidden="true">
          <img src="/stickers/paw.png" alt="" />
          <img src="/stickers/coin.png" alt="" />
          <img src="/stickers/bone.png" alt="" />
          <img src="/stickers/cape.png" alt="" />
          <img src="/stickers/star.png" alt="" />
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-paper-white" id="story">
      <div className="page py-16 md:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="section-title">
            HE WORE
            <br />
            THE CAPE
          </h2>
          <div className="grid gap-4">
            <p className="body-copy text-lg leading-snug">
              Indie was not a brand. He was the dog on the floor in a red cape, one ear
              folded, paws stretched out like the day could wait.
            </p>
            <p className="body-copy">
              The picture is the pitch. Soft fur, a cape that stayed on through the nap,
              and a face that looks like he knew something the rest of the room didn't.
              Super Indie doesn't try to replace him. It keeps the cape in the ticker.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <li key={fact.title} className={`fact-card ${fact.className}`}>
                <h3>{fact.title}</h3>
                <p>{fact.copy}</p>
              </li>
            ))}
          </ul>
          <dl className="sheet">
            {SHEET.map(([term, detail]) => (
              <div className="sheet-row" key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Coin() {
  return (
    <section className="relative overflow-hidden bg-concrete-gray" id="coin">
      <img className="section-ribbon" src="/stickers/ribbon.png" alt="" />
      <div className="page relative z-10 py-16 md:py-28">
        <p className="kicker bg-mint-pop">The coin</p>
        <h2 className="section-title mt-5">$SI</h2>
        <p className="lede mt-6">
          One billion. No tax. No presale story. Just a good boy and a launch on Pump.fun.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label} className="stat-card bg-paper-white">
              <p>{stat.label}</p>
              <strong className="block">{stat.value}</strong>
            </li>
          ))}
        </ul>
        <p className="body-copy mt-6">
          Those are the launch plans, not a live pool. Nothing here is financial advice,
          and the contract stays blank until $SI is actually live.
        </p>
      </div>
    </section>
  );
}

function Buy() {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  async function onCopy() {
    const text = CONTRACT === "TBA" ? LAUNCH_NOTE : CONTRACT;
    const ok = await copyText(text);
    setStatus(ok ? "copied" : "manual");
  }

  return (
    <section className="bg-lavender" id="buy">
      <div className="page py-16 md:py-28">
        <h2 className="section-title">
          HOW TO
          <br />
          GET $SI
        </h2>
        <ol className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className={`step-card ${step.className}`}>
              <p className="step-index">{step.n}</p>
              <p className="label mt-4">{step.title}</p>
              <p className="body-copy mt-2">{step.copy}</p>
            </li>
          ))}
        </ol>

        <div className="ca-card mt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="label">Contract</p>
            <p className="ca-value">{CONTRACT}</p>
            <p className="body-copy mt-3">
              Address lands here when the mint is real. Until then, search the name — don't
              trust a ticker that borrowed the cape.
            </p>
            {status === "manual" ? (
              <p className="body-copy mt-3 break-all">{LAUNCH_NOTE}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn-ghost" onClick={onCopy}>
              <Copy size={16} aria-hidden="true" />
              {status === "copied" ? "Copied" : "Copy launch note"}
            </button>
            <a
              className="btn-fill"
              href="https://pump.fun/"
              target="_blank"
              rel="noreferrer"
            >
              Open Pump.fun
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="sr-only" aria-live="polite">
            {status === "copied" ? "Launch note copied." : ""}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden bg-sky-wash">
      <div className="page pb-28 pt-12 md:pt-16">
        <p className="footer-title">
          SUPER
          <br />
          INDIE
        </p>
        <p className="lede mt-4">For Indie. The cape never came off.</p>
        <p className="body-copy mt-4 max-w-xl">
          Super Indie is a memecoin tribute. It can go to zero. When a contract shows up,
          check it yourself — this page says TBA until the real address exists.
        </p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-paper-white text-carbon">
      <Marquee />
      <Header />
      <main>
        <Hero />
        <Story />
        <Coin />
        <Buy />
      </main>
      <Footer />
    </div>
  );
}
