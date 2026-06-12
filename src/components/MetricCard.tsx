interface MetricCardProps {
  value: string;
  label: string;
  detail: string;
}

export default function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <article className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{detail}</p>
    </article>
  );
}
