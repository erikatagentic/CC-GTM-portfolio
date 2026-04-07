import { Panel } from "./Panel";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <Panel variant="bordered" className="h-full">
      <div className="flex flex-col gap-3 h-full">
        <span className="text-4xl text-mars-base/30 leading-none font-serif">&ldquo;</span>
        <p className="italic text-text-primary font-[family-name:var(--font-body)] leading-relaxed -mt-6 pl-6 flex-1">
          {quote}
        </p>
        <span className="text-sm text-gold-muted font-[family-name:var(--font-ui)] mt-auto">
          &mdash; {name}, {title} at {company}
        </span>
      </div>
    </Panel>
  );
}
