import { primaryCta } from "../content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">AIWS</p>
        <h2>Hiring velocity without identity risk.</h2>
      </div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a className="button button-light" href={primaryCta.href}>
          {primaryCta.label}
        </a>
        <a className="button button-ghost" href="/tempo-launch-film.html" style={{ color: "inherit", borderColor: "currentColor" }}>
          Watch Launch Film ↗
        </a>
      </div>
    </footer>
  );
}
