import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This route took a wrong turn.</h1>
        <p>The page may have moved, or the project is not ready to publish yet.</p>
        <Link className="button button-primary" href="/"><ArrowLeft aria-hidden="true" /> Return home</Link>
      </div>
    </section>
  );
}

