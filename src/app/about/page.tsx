export default function AboutPage() {
  return (
    <main className="section">
      <p className="section-title">About</p>
      <h1 className="mt-4 text-3xl font-semibold">Primcharlin</h1>
      <p className="about-summary mt-4 max-w-2xl text-base">
        I&apos;m a designer bridging branding, UI/UX, and front-end development
        to craft accessible, user-centered digital products. My work balances
        minimal aesthetics with human-first experiences.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="about-card rounded-3xl border p-6">
          <p className="about-card__label text-xs uppercase tracking-[0.2em]">
            Focus
          </p>
          <p className="about-card__text mt-4 text-sm">
            Brand systems, product UX/UI, and front-end collaboration.
          </p>
        </div>
        <div className="about-card rounded-3xl border p-6">
          <p className="about-card__label text-xs uppercase tracking-[0.2em]">
            Locations
          </p>
          <p className="about-card__text mt-4 text-sm">BKK / YVR</p>
        </div>
      </div>
    </main>
  );
}
