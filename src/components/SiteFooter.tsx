import { primaryCta } from "../content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">AIWS</p>
        <h2>Hiring velocity without identity risk.</h2>
      </div>
      <a className="button button-light" href={primaryCta.href}>
        {primaryCta.label}
      </a>
    </footer>
  );
}
