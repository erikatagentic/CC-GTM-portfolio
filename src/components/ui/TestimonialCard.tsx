import { Panel } from "./Panel";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <Panel variant="bordered">
      <div className="flex flex-col gap-3">
        <span className="text-4xl text-mars-base/30 leading-none font-serif">&ldquo;</span>
        <p className="italic text-text-primary font-[family-name:var(--font-body)] leading-relaxed -mt-6 pl-6">
          {quote}
        </p>
        <span className="text-sm text-gold-muted font-[family-name:var(--font-ui)]">
          &mdash; {name}, {title} at {company}
        </span>
      </div>
    </Panel>
  );
}
