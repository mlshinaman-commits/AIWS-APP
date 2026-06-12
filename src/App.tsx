import { ArrowRight, CheckCircle2, Fingerprint, Network, Radar, ShieldAlert, Sparkles } from "lucide-react";
import MetricCard from "./components/MetricCard";
import SectionHeading from "./components/SectionHeading";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  implementationSteps,
  primaryCta,
  products,
  proofMetrics,
  researchReports,
  verificationLayers,
} from "./content/site";

export default function App() {
  return (
    <div className="app-shell" id="top">
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Trusted hiring infrastructure for AI-era operations</p>
            <h1 id="hero-title">Hire at AI speed. Verify every human.</h1>
            <p className="hero-lede">
              Generative AI made fake candidates cheap to build and hard to catch. AIWS gives enterprise teams
              AI-powered recruiting, workforce intelligence, and Fraud Shield verification in one governed system.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight size={17} />
              </a>
              <a className="button button-ghost" href="#fraud-shield">
                See Fraud Shield
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="AIWS funnel control room preview">
            <div className="panel-topline">
              <span>AIWS live funnel</span>
              <strong>Trust score 94</strong>
            </div>
            <div className="orbit-card">
              <span className="pulse-dot" />
              <div>
                <p>Candidate verified across 11 layers</p>
                <strong>0 frauds reached payroll</strong>
              </div>
            </div>
            <div className="signal-grid">
              <div>
                <Fingerprint size={20} />
                <span>ID + liveness</span>
              </div>
              <div>
                <Radar size={20} />
                <span>Media forensics</span>
              </div>
              <div>
                <Network size={20} />
                <span>Graph signals</span>
              </div>
              <div>
                <ShieldAlert size={20} />
                <span>Review queue</span>
              </div>
            </div>
            <div className="funnel-bars" aria-hidden="true">
              {[94, 81, 68, 52, 43, 31].map((height, index) => (
                <span key={height} style={{ height: `${height}%`, transitionDelay: `${index * 80}ms` }} />
              ))}
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="AIWS proof metrics">
          {proofMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section className="split-section" id="platform">
          <SectionHeading
            eyebrow="Platform"
            title='Everything between "we need people" and "they are verified and producing."'
            copy="Four products work alone or as one system on a shared data layer: recruiting execution, workforce intelligence, pipeline building, and fraud prevention."
          />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <p className="eyebrow">{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fraud-section" id="fraud-shield">
          <div>
            <SectionHeading
              eyebrow="Fraud Shield"
              title="Eleven layers between fraud and your payroll."
              copy="Verification starts before the hiring decision is shaped and continues through onboarding and workforce re-checks."
            />
            <div className="fraud-callout">
              <Sparkles size={18} />
              <span>Explainable 0-100 trust scores with legal-ready evidence trails for every flag.</span>
            </div>
          </div>
          <ol className="layer-list">
            {verificationLayers.map((layer, index) => (
              <li key={layer}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {layer}
              </li>
            ))}
          </ol>
        </section>

        <section className="outcomes-section" id="outcomes">
          <SectionHeading
            eyebrow="Implementation"
            title="Live in weeks, not quarters."
            copy="A buyer-safe methodology with fixed milestones, weekly executive reporting, and a named accountable lead."
          />
          <div className="timeline">
            {implementationSteps.map((step) => (
              <article key={step.phase}>
                <span>{step.window}</span>
                <h3>{step.phase}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="research">
          <div className="research-copy">
            <p className="eyebrow">Research desk</p>
            <h2>The benchmarks the industry quotes.</h2>
            <p>
              AIWS packages fraud rates, workforce movement, and recruiting performance into board-ready reports
              that help buyers make decisions before the market catches up.
            </p>
          </div>
          <div className="report-list">
            {researchReports.map((report) => (
              <a href={primaryCta.href} key={report}>
                <CheckCircle2 size={18} />
                <span>{report}</span>
                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </section>

        <section className="cta-section" id="strategy-briefing">
          <p className="eyebrow">Board-ready by design</p>
          <h2>See your own hiring funnel through Fraud Shield.</h2>
          <p>
            Bring your highest-risk role family. AIWS will map the funnel, estimate cost and fraud exposure, and
            show where verification belongs before trust becomes access.
          </p>
          <a className="button button-dark" href={primaryCta.href}>
            {primaryCta.label}
            <ArrowRight size={17} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
