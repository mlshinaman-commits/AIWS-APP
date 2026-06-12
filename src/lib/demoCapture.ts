import { contactEmail } from "../content/site";

export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  role: string;
  hiringChallenge: string;
}

export interface CaptureResult {
  mode: "endpoint" | "email";
  mailtoHref?: string;
}

const requiredFields: (keyof DemoRequest)[] = ["name", "email", "company", "role", "hiringChallenge"];

export function validateDemoRequest(request: DemoRequest) {
  return requiredFields.every((field) => request[field].trim().length > 0) && request.email.includes("@");
}

export function buildDemoMailto(request: DemoRequest) {
  const subject = encodeURIComponent(`AIWS strategy briefing request from ${request.company}`);
  const body = encodeURIComponent(
    [
      `Name: ${request.name}`,
      `Email: ${request.email}`,
      `Company: ${request.company}`,
      `Role: ${request.role}`,
      "",
      "Hiring challenge:",
      request.hiringChallenge,
    ].join("\n")
  );

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

export async function submitDemoRequest(request: DemoRequest): Promise<CaptureResult> {
  if (!validateDemoRequest(request)) {
    throw new Error("Please complete every field with a valid email.");
  }

  const endpoint = import.meta.env.VITE_DEMO_FORM_ENDPOINT as string | undefined;
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...request, source: "aiws-website", submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) {
      throw new Error("The capture endpoint did not accept the request.");
    }

    return { mode: "endpoint" };
  }

  return { mode: "email", mailtoHref: buildDemoMailto(request) };
}
