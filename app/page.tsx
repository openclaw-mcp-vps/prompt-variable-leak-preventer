export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Sensitive Data from Leaking into AI Prompts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan every prompt for API keys, passwords, and PII before it reaches any AI model. Built for developers and security teams who can't afford a breach.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $25/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔑</div>
            <h3 className="font-semibold text-white mb-1">API Key Detection</h3>
            <p className="text-sm text-[#8b949e]">Catches AWS, OpenAI, Stripe, and 50+ key formats before they leave your app.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🧑‍💼</div>
            <h3 className="font-semibold text-white mb-1">PII Scanning</h3>
            <p className="text-sm text-[#8b949e]">Detects names, emails, SSNs, phone numbers, and credit card data in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Zero Latency</h3>
            <p className="text-sm text-[#8b949e]">Runs client-side and via API — no added round-trips to slow down your product.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt scans",
              "API access + browser extension",
              "50+ secret & key patterns",
              "PII detection (GDPR-ready)",
              "Slack & webhook alerts",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Protecting Prompts
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it integrate with my existing AI workflow?</h3>
            <p className="text-sm text-[#8b949e]">Drop in our JavaScript SDK or use the REST API. A browser extension is also available for no-code integration with ChatGPT, Claude, and other web UIs.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does my prompt data get stored or logged?</h3>
            <p className="text-sm text-[#8b949e]">No. Scans run locally in the browser or ephemerally on our API — we never persist your prompt content. Your data stays yours.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when a leak is detected?</h3>
            <p className="text-sm text-[#8b949e]">The prompt is blocked and you receive an alert with the exact match highlighted. You can configure auto-redaction to strip secrets and continue, or hard-block until reviewed.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Prompt Variable Leak Preventer. All rights reserved.
      </footer>
    </main>
  )
}
