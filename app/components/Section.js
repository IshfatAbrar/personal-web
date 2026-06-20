export default function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
        {label}
      </p>
      {children}
    </section>
  );
}
