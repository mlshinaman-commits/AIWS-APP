import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type DemoRequest, submitDemoRequest } from "../lib/demoCapture";

const initialForm: DemoRequest = {
  name: "",
  email: "",
  company: "",
  role: "",
  hiringChallenge: "",
};

export default function DemoForm() {
  const [form, setForm] = useState<DemoRequest>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "email" | "error">("idle");
  const [message, setMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const update = (field: keyof DemoRequest, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setMailtoHref(null);

    try {
      const result = await submitDemoRequest(form);
      if (result.mode === "endpoint") {
        setStatus("success");
        setMessage("Request captured. AIWS will follow up with a strategy briefing path.");
        setForm(initialForm);
        return;
      }

      setStatus("email");
      setMailtoHref(result.mailtoHref ?? null);
      setMessage("Your briefing request is ready. Open the email draft to send it to AIWS.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form className="demo-form" onSubmit={(event) => void onSubmit(event)}>
      <div className="form-grid">
        <label>
          Name
          <input
            autoComplete="name"
            name="name"
            onChange={(event) => update("name", event.target.value)}
            required
            value={form.name}
          />
        </label>
        <label>
          Work email
          <input
            autoComplete="email"
            name="email"
            onChange={(event) => update("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label>
          Company
          <input
            autoComplete="organization"
            name="company"
            onChange={(event) => update("company", event.target.value)}
            required
            value={form.company}
          />
        </label>
        <label>
          Role
          <input
            autoComplete="organization-title"
            name="role"
            onChange={(event) => update("role", event.target.value)}
            required
            value={form.role}
          />
        </label>
      </div>
      <label>
        Highest-risk hiring challenge
        <textarea
          name="hiringChallenge"
          onChange={(event) => update("hiringChallenge", event.target.value)}
          required
          rows={4}
          value={form.hiringChallenge}
        />
      </label>
      <div className="form-actions">
        <button className="button button-dark" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Capturing..." : "Request strategy briefing"}
          <ArrowRight size={17} />
        </button>
        {mailtoHref && (
          <a className="button button-ghost light-ghost" href={mailtoHref}>
            Open email draft
          </a>
        )}
      </div>
      {message && (
        <p className={`form-message ${status === "error" ? "form-error" : ""}`} role="status">
          {status !== "error" && <CheckCircle2 size={16} />}
          {message}
        </p>
      )}
      <p className="form-note">
        Connect `VITE_DEMO_FORM_ENDPOINT` to your CRM or form service for direct capture; otherwise the form
        prepares a complete email handoff.
      </p>
    </form>
  );
}
