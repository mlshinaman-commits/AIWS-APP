import { ShieldCheck } from "lucide-react";
import { navItems, primaryCta } from "../content/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="AIWS home">
        <span className="brand-mark" aria-hidden="true">
          <ShieldCheck size={18} strokeWidth={2.4} />
        </span>
        <span>
          <strong>AIWS</strong>
          <small>IntelliSource AI Workforce Solutions</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={primaryCta.href}>
        {primaryCta.label}
      </a>
    </header>
  );
}
