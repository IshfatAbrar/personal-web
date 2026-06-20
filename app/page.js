import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
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

          <Section id="work" label="Work">
            <ul className="divide-y divide-border">
              {portfolio.projects.map((project) => {
                const content = (
                  <>
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-medium transition-colors group-hover:text-muted">
                        {project.title}
                      </h2>
                      {project.href && (
                        <span
                          aria-hidden="true"
                          className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          &rarr;
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );

                return (
                  <li key={project.title} className="group py-6 first:pt-0">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block space-y-2"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="space-y-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
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
