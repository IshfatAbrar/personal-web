import { portfolio } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-medium tracking-tight">
          {portfolio.name}
        </a>
        <nav className="flex gap-6">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
