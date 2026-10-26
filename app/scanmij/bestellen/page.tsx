
"use client";

import { useEffect, useState } from "react";

type Product = {
  naam: string;
  prijs: number;
  key: string;
};

type CartItem = Product & {
  aantal: number;
};

const products: Product[] = [
  { naam: "Startpack", prijs: 16.95, key: "start" },
  { naam: "Family Pack", prijs: 27.95, key: "family" },
  { naam: "Pro Pack", prijs: 44.95, key: "pro" },
  { naam: "100 QR-stickers", prijs: 220, key: "b2b100" },
  { naam: "250 QR-stickers", prijs: 487.5, key: "b2b250" },
  { naam: "500 QR-stickers", prijs: 850, key: "b2b500" },
];

const euro = (value: number) =>
  new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(value);

export default function ScanmijBestellen() {
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("bancontact");
  const [message, setMessage] = useState("");

  const [customer, setCustomer] = useState({
    voornaam: "",
    naam: "",
    email: "",
    gsm: "",
    adres: "",
    opmerking: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pack = (params.get("pack") || params.get("type") || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    const aliases: Record<string, string> = {
      startpack: "start",
      familypack: "family",
      propack: "pro",
    };

    const key = aliases[pack] || pack;
    const product = products.find((item) => item.key === key);

    if (product) {
      setCart([{ ...product, aantal: 1 }]);
    }
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.prijs * item.aantal,
    0
  );

  function addProduct() {
    const product = products.find((item) => item.key === selected);

    if (!product || !Number.isInteger(quantity) || quantity < 1) {
      setMessage("Kies een pakket en geef een geldig aantal in.");
      return;
    }

    setCart((previous) => {
      const existing = previous.find(
        (item) => item.key === product.key
      );

      if (existing) {
        return previous.map((item) =>
          item.key === product.key
            ? { ...item, aantal: item.aantal + quantity }
            : item
        );
      }

      return [...previous, { ...product, aantal: quantity }];
    });

    setSelected("");
    setQuantity(1);
    setMessage("");
  }

  function updateCustomer(
    field: keyof typeof customer,
    value: string
  ) {
    setCustomer((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) {
      setMessage("Voeg minstens één pakket toe aan je bestelling.");
      return;
    }

    setMessage(
      "De bestelpagina is voorbereid. De beveiligde Mollie-betaling wordt nog gekoppeld."
    );
  }

  return (
    <main className="scanmij-order">
      <div className="order-container">
        <a className="back-link" href="/">
          ← Terug naar SCANMIJ
        </a>

        <section className="order-card">
          <header className="order-header">
            <span className="order-badge">
              SCANMIJ • VEILIG BESTELLEN
            </span>

            <h1>Bestellen</h1>

            <p>
              Kies je pakket, vul je gegevens in en betaal
              binnenkort veilig via Mollie.
            </p>
          </header>

          <form onSubmit={submitOrder}>
            <div className="form-grid">
              <label>
                Voornaam
                <input
                  required
                  value={customer.voornaam}
                  onChange={(e) =>
                    updateCustomer("voornaam", e.target.value)
                  }
                />
              </label>

              <label>
                Naam
                <input
                  required
                  value={customer.naam}
                  onChange={(e) =>
                    updateCustomer("naam", e.target.value)
                  }
                />
              </label>

              <label>
                E-mailadres
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) =>
                    updateCustomer("email", e.target.value)
                  }
                />
              </label>

              <label>
                Gsm-nummer
                <input
                  type="tel"
                  required
                  value={customer.gsm}
                  onChange={(e) =>
                    updateCustomer("gsm", e.target.value)
                  }
                />
              </label>
            </div>

            <label>
              Adres
              <input
                required
                value={customer.adres}
                onChange={(e) =>
                  updateCustomer("adres", e.target.value)
                }
              />
            </label>

            <div className="product-panel">
              <h2>Pakketten en volumepakketten</h2>

              <div className="product-controls">
                <label>
                  Kies een pakket
                  <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <option value="">-- Kies een pakket --</option>
                    {products.map((product) => (
                      <option key={product.key} value={product.key}>
                        {product.naam} - {euro(product.prijs)}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Aantal pakketten
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Number(e.target.value))
                    }
                  />
                </label>

                <button
                  className="add-button"
                  type="button"
                  onClick={addProduct}
                >
                  Toevoegen
                </button>
              </div>

              <div className="cart">
                {cart.length === 0 ? (
                  <p>Nog geen pakketten toegevoegd.</p>
                ) : (
                  cart.map((item) => (
                    <div className="cart-item" key={item.key}>
                      <div>
                        <strong>{item.naam}</strong>
                        <small>
                          {item.aantal} × {euro(item.prijs)}
                        </small>
                      </div>

                      <strong>
                        {euro(item.prijs * item.aantal)}
                      </strong>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() =>
                          setCart((previous) =>
                            previous.filter(
                              (product) =>
                                product.key !== item.key
                            )
                          )
                        }
                      >
                        Verwijderen
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <label>
              Extra opmerking
              <textarea
                rows={4}
                placeholder="Eventuele extra informatie..."
                value={customer.opmerking}
                onChange={(e) =>
                  updateCustomer("opmerking", e.target.value)
                }
              />
            </label>

            <div className="order-total">
              <h2>Totaal: {euro(total)}</h2>
              <p>
                Je kunt gewone pakketten en volumepakketten
                combineren in één bestelling.
              </p>
            </div>

            <div className="payment-section">
              <h2>Kies je betaalmethode</h2>

              <div className="payment-grid">
                {[
                  ["bancontact", "Bancontact"],
                  ["belfius", "Belfius"],
                  ["kbc", "KBC / CBC"],
                  ["other", "Andere methode"],
                ].map(([value, label]) => (
                  <label
                    key={value}
                    className={
                      paymentMethod === value
                        ? "payment-option active"
                        : "payment-option"
                    }
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={paymentMethod === value}
                      onChange={() => setPaymentMethod(value)}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <p className="trust">
              🔒 Veilig betalen via Mollie • Geen abonnement •
              Eénmalige aankoop
            </p>

            <button type="submit" className="checkout-button">
              Ga veilig naar betaling
            </button>

            {message && (
              <p className="order-message" role="status">
                {message}
              </p>
            )}
          </form>

          <footer>
            SCANMIJ • Veilig • Betrouwbaar • Zonder app
          </footer>
        </section>
      </div>

      <style jsx>{`
        .scanmij-order {
          min-height: 100vh;
          background: #f6f6f6;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
          padding: 30px 18px 60px;
        }

        .order-container {
          max-width: 980px;
          margin: auto;
        }

        .back-link {
          display: inline-block;
          color: #222;
          text-decoration: none;
          background: white;
          border: 1px solid #ddd;
          border-radius: 30px;
          padding: 12px 18px;
          margin-bottom: 18px;
          font-weight: bold;
        }

        .order-card {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 22px;
          padding: 40px 36px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        .order-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .order-badge {
          display: inline-block;
          background: #fff8df;
          color: #7b5a00;
          border: 1px solid #efd995;
          border-radius: 30px;
          padding: 9px 14px;
          font-size: 12px;
          font-weight: bold;
        }

        h1 {
          font-size: clamp(40px, 7vw, 64px);
          margin: 20px 0 14px;
          font-weight: 900;
        }

        .order-header p {
          color: #666;
          line-height: 1.7;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 20px;
          font-size: 15px;
        }

        input:not([type="radio"]),
        select,
        textarea {
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 15px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          background: white;
          color: #171717;
          font: inherit;
          font-weight: normal;
          box-sizing: border-box;
        }

        .product-panel {
          background: #fafafa;
          border: 1px solid #e3e3e3;
          border-radius: 16px;
          padding: 20px;
          margin: 10px 0 25px;
        }

        .product-panel h2,
        .payment-section h2 {
          font-size: 22px;
          margin: 0 0 20px;
        }

        .product-controls {
          display: grid;
          grid-template-columns: 1.6fr 0.6fr auto;
          align-items: end;
          gap: 14px;
        }

        .product-controls label {
          margin-bottom: 0;
        }

        .add-button,
        .checkout-button {
          border: 0;
          border-radius: 10px;
          background: #111;
          color: white;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .cart {
          margin-top: 22px;
          background: white;
          border: 1px solid #e3e3e3;
          border-radius: 12px;
          padding: 16px;
        }

        .cart p {
          color: #777;
          margin: 0;
        }

        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 14px 0;
          border-bottom: 1px solid #eee;
        }

        .cart-item:last-child {
          border-bottom: 0;
        }

        .cart-item small {
          display: block;
          margin-top: 6px;
          color: #777;
        }

        .remove-button {
          border: 1px solid #efcaca;
          background: #fff4f4;
          color: #a52222;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
        }

        .order-total {
          text-align: center;
          background: #fff9e5;
          border: 1px solid #efd995;
          border-radius: 16px;
          padding: 28px 20px;
          margin: 25px 0;
        }

        .order-total h2 {
          font-size: clamp(28px, 5vw, 40px);
          margin: 0 0 12px;
        }

        .order-total p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .payment-section {
          margin: 25px 0;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .payment-option {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          padding: 15px 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          margin: 0;
        }

        .payment-option.active {
          background: #fff8df;
          border-color: #d8b94f;
        }

        .trust {
          background: #eef8f2;
          color: #22623c;
          text-align: center;
          border-radius: 12px;
          padding: 16px;
          font-weight: bold;
          line-height: 1.5;
        }

        .checkout-button {
          width: 100%;
          padding: 22px;
          font-size: 19px;
          margin-top: 12px;
        }

        .order-message {
          background: #fff8df;
          padding: 16px;
          border-radius: 10px;
          text-align: center;
          line-height: 1.6;
        }

        footer {
          margin-top: 25px;
          text-align: center;
          color: #777;
          font-size: 14px;
        }

        @media (max-width: 760px) {
          .order-card {
            padding: 28px 18px;
          }

          .form-grid,
          .product-controls {
            grid-template-columns: 1fr;
          }

          .payment-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cart-item {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </main>
  );
}
