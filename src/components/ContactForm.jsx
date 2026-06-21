function ContactForm() {
  return (
    <form className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.9)]">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300">
          Name
          <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Email
          <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </label>
      </div>
      <label className="mt-6 block text-sm font-medium text-slate-300">
        Message
        <textarea rows="5" placeholder="Tell us about your project" className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
      </label>
      <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-brand-dark">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
