import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import EntryList from "./components/EntryList";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="mb-24 space-y-4">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {portfolio.name}
          </h1>
          <p className="text-lg text-muted">{portfolio.title}</p>
          <p className="max-w-md leading-relaxed text-muted">
            {portfolio.tagline}
          </p>
        </div>

        <div className="space-y-20">
          <Section id="about" label="About">
            <p className="leading-relaxed text-muted">{portfolio.about}</p>
          </Section>

          <Section id="experience" label="Experience">
            <EntryList items={portfolio.experience} collapsible />
          </Section>

          <Section id="publications" label="Publications">
            <EntryList items={portfolio.publications} />
          </Section>

          <Section id="projects" label="Projects">
            <EntryList items={portfolio.projects} collapsible />
          </Section>

          <Section id="contact" label="Contact">
            <div className="space-y-4">
              <p className="leading-relaxed text-muted">
                Open to new opportunities and collaborations. Feel free to reach
                out.
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted"
              >
                {portfolio.email}
              </a>
              <ul className="flex gap-6 pt-2">
                {portfolio.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
