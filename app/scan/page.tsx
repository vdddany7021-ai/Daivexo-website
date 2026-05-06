import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Found It? Scan | DAIVEXO",
  description: "Premium QR labels that connect the physical to the digital. Discover art. Authenticate ownership. Experience luxury.",
}

export default function ScanPage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/dark-gold-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Centered text overlay */}
      <div className="text-center">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight">
          <span className="block text-foreground">FOUND IT?</span>
          <span className="block text-primary mt-4">SCAN</span>
        </h1>
      </div>
    </main>
  )
}
