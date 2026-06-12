export const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Fraud Shield", href: "#fraud-shield" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Research", href: "#research" },
  { label: "Demo", href: "#demo" },
] as const;

export const proofMetrics = [
  { value: "50%", label: "lower RPO cost target", detail: "AI does the heavy lifting; expert recruiters supervise." },
  { value: "0", label: "confirmed frauds to payroll", detail: "Flags resolve before access, payroll, or production systems." },
  { value: "<2%", label: "candidate friction", detail: "Risk-based checks preserve speed for legitimate applicants." },
] as const;

export const products = [
  {
    eyebrow: "01 / Execute",
    title: "AI-Powered RPO",
    copy:
      "Agentic sourcing, outreach, screening, and scheduling run around the clock, supervised by expert recruiters who keep quality high.",
  },
  {
    eyebrow: "02 / Decide",
    title: "AI Workforce Intelligence",
    copy:
      "Executive dashboards combine hiring analytics, labor-market signals, and attrition risk so workforce decisions run on evidence.",
  },
  {
    eyebrow: "03 / Build",
    title: "AI Talent Communities",
    copy:
      "Past applicants, silver medalists, and alumni become segmented communities with nurture, engagement scoring, and readiness prediction.",
  },
  {
    eyebrow: "04 / Defend",
    title: "AI Fraud Shield",
    copy:
      "Layered verification catches deepfakes, proxy interviews, synthetic identities, and credential fraud before trust becomes access.",
  },
] as const;

export const verificationLayers = [
  "Government ID and biometric liveness",
  "Voice-face correspondence",
  "Interview media forensics",
  "Credential registry validation",
  "Employment record matching",
  "Work-sample ownership signals",
  "Device, network, and timezone forensics",
  "Synthetic identity graph analysis",
  "AI-assistance and answer provenance",
  "Legal-ready evidence trail",
  "Continuous workforce verification",
] as const;

export const implementationSteps = [
  {
    phase: "Discover",
    window: "Weeks 1-3",
    copy: "Baseline the funnel, quantify fraud exposure, map systems, and lock the executive scorecard.",
  },
  {
    phase: "Stabilize",
    window: "Weeks 4-10",
    copy: "Launch AI-RPO on priority roles, turn on Fraud Shield, and report weekly against buyer-safe milestones.",
  },
  {
    phase: "Scale",
    window: "Weeks 11+",
    copy: "Expand across business units, activate communities, and move workforce intelligence into planning cycles.",
  },
] as const;

export const researchReports = [
  "2026 AI Hiring Fraud Report",
  "Workforce Intelligence Index",
  "AI Recruiting Benchmark Report",
] as const;

export const primaryCta = {
  label: "Book a strategy briefing",
  href: "#demo",
} as const;

export const contactEmail = "hello@intellisource.ai";

export const customerProof = [
  {
    segment: "Manufacturing design partner",
    result: "42% faster shortlist creation",
    detail: "Priority maintenance and operations roles moved from manual sourcing to AI-assisted recruiter review.",
  },
  {
    segment: "Remote technical hiring",
    result: "Every confirmed proxy interview stopped",
    detail: "Fraud Shield routed flagged interviews to review before offer approval or system access.",
  },
  {
    segment: "Enterprise implementation",
    result: "Weekly executive scorecard live in week 3",
    detail: "Baseline cost, time-to-fill, quality, and trust metrics were locked before scale-up.",
  },
] as const;
