export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-8">
        <p className="text-sm text-muted">&copy; {year}</p>
      </div>
    </footer>
  );
}
