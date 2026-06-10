import { useState } from 'react';
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <section id="newsletter" className="py-24 md:py-32 bg-sand/60">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="eyebrow mb-4">Join the house</p>
        <h2 className="section-title mb-4">Receive 10% off your first order.</h2>
        <p className="text-ink/60 mb-8">Plus first access to new collections, lookbooks, and private events.</p>
        {done ? (
          <p className="font-serif text-xl text-rose">Welcome to Vanya ✦ Check your inbox.</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="flex-1 px-5 py-3 bg-cream border border-sand focus:border-ink outline-none text-sm" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
