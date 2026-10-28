
export default function ScanmijBedankt() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] px-5 py-16 text-[#171717]">
      <section className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white px-7 py-12 text-center shadow-lg sm:px-12">
        <div className="mb-6 text-5xl">📦</div>

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-700">
          SCANMIJ
        </p>

        <h1 className="mb-6 text-3xl font-extrabold sm:text-4xl">
          Bedankt voor je bestelling!
        </h1>

        <p className="mb-5 text-lg leading-8 text-gray-700">
          Je bent teruggekeerd van de beveiligde
          betaalomgeving van Mollie.
        </p>

        <div className="mb-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left">
          <h2 className="mb-3 text-lg font-bold">
            Betalingsstatus
          </h2>

          <p className="leading-7 text-gray-700">
            We verwerken je bestelling zodra Mollie
            bevestigt dat je betaling geslaagd is.
          </p>

          <p className="mt-3 leading-7 text-gray-700">
            Deze pagina bevestigt nog niet dat je
            betaling ontvangen is.
          </p>
        </div>

        <p className="mb-8 leading-7 text-gray-600">
          Je bestelling wordt pas verder verwerkt
          nadat de betaling bevestigd is.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-black px-8 py-4 font-bold text-white"
        >
          Terug naar SCANMIJ
        </a>

        <footer className="mt-10 text-sm text-gray-500">
          SCANMIJ • Veilig • Betrouwbaar • Zonder app
        </footer>
      </section>
    </main>
  );
}
