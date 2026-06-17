import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="bg-cream min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-12">
            Last Updated: June 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl mb-3">Information We Collect</h2>
              <p>
                We may collect personal information such as your name,
                email address, phone number, and other details when you
                contact us through our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">How We Use Information</h2>
              <p>
                Information submitted through our website is used to
                respond to inquiries, improve our services, and provide
                customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to
                improve browsing experience and website performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Data Security</h2>
              <p>
                We take reasonable precautions to protect your personal
                information from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy,
                please contact us through our Contact Page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}