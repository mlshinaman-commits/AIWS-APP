import { customerProof } from "../content/site";

export default function CustomerProof() {
  return (
    <div className="customer-proof" aria-label="Customer proof">
      {customerProof.map((proof) => (
        <article key={proof.segment}>
          <p className="eyebrow">{proof.segment}</p>
          <strong>{proof.result}</strong>
          <span>{proof.detail}</span>
        </article>
      ))}
    </div>
  );
}
