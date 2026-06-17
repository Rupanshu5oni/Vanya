import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Header />

      <main className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            Terms & Conditions
          </h1>

          <div className="w-20 h-px bg-gold mb-12"></div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl mb-3">Website Usage</h2>
              <p>
                By accessing this website, you agree to use it only for lawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Products & Information</h2>
              <p>
                We strive to ensure all product descriptions and pricing are accurate,
                however errors may occasionally occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Intellectual Property</h2>
              <p>
                All website content, images, logos, and designs belong to Vanya
                and may not be copied without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Limitation of Liability</h2>
              <p>
                Vanya shall not be held liable for any damages resulting from
                the use of this website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}