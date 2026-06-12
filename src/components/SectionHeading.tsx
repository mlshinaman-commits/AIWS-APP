interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy: string;
}

export default function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
