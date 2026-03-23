const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribble", href: "https://dribbble.com" },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-title">Let&apos;s get in touch</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="contact-card rounded-3xl border p-8">
          <p className="text-2xl font-light">
            Interested in collaborating or starting a project?
          </p>
          <p className="contact-card__note mt-4 text-sm">
            Send a note and let&apos;s build something thoughtful together.
          </p>
          <a
            href="mailto:hello@primcharlin.work"
            className="stataproject-button"
          >
            Start a project
          </a>
        </div>
        <div className="grid gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="contact-social flex items-center justify-between rounded-2xl border px-6 py-4 text-sm uppercase tracking-[0.2em] transition"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
              <span className="text-xs">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
