import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RefundPolicy() {
  return (
    <>
      <Header />

      <main className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            Refund Policy
          </h1>

          <div className="w-20 h-px bg-gold mb-12"></div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl mb-3">Returns</h2>
              <p>
                Items may be returned within 7 days of delivery if they are
                unused and in original condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Refunds</h2>
              <p>
                Once the returned item is inspected, eligible refunds will be
                processed to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Exchanges</h2>
              <p>
                Exchanges may be offered based on product availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Non-Returnable Items</h2>
              <p>
                Certain items such as customized products may not be eligible
                for returns or refunds.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}