import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Variable Leak Preventer — Stop Sensitive Data in AI Prompts',
  description: 'Scan AI prompts for PII, API keys, and passwords before they reach any model. Real-time protection for AI developers and security teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7dc1039-ed41-4448-a0ad-a3e6d54e088d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
