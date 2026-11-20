type SectionHeadingProps = {
  headingId: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ headingId, number, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <p className="section-kicker">{number} / {eyebrow}</p>
        <h2 className="section-title" id={headingId}>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}