export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <p>© {year} Shehan Jayasinghe. All rights reserved.</p>
        <a href="#home" className="transition-colors hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
