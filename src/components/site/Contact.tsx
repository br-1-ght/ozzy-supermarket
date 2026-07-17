import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-3">
            Have a question or a bulk order?
          </h2>
          <p className="text-gray-300">
            Send us a message and our team will get back to you — usually within a few hours.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thanks! We'll be in touch shortly.");
            (e.target as HTMLFormElement).reset();
          }}
          className="bg-white rounded-2xl p-6 sm:p-8 text-ink space-y-4"
        >
          <div>
            <label htmlFor="c-name" className="text-xs font-semibold text-gray-600">Full Name</label>
            <input id="c-name" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm" />
          </div>
          <div>
            <label htmlFor="c-email" className="text-xs font-semibold text-gray-600">Email or Phone</label>
            <input id="c-email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm" />
          </div>
          <div>
            <label htmlFor="c-msg" className="text-xs font-semibold text-gray-600">Message</label>
            <textarea id="c-msg" rows={3} required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 mt-1 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white font-semibold py-3 rounded-lg text-sm hover:bg-brand-dark transition"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-600 text-sm text-center font-medium">Thanks! We'll be in touch shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
