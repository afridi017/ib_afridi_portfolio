import { recognition } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Recognition() {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="mt-20">
      <SectionHeading
        eyebrow="Recognition • Built before degree"
        title={<span id="recognition-title">Proof of work. Not promises.</span>}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {recognition.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="h-full">
            <article className="surface group relative h-full overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand-grad-soft opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-line bg-ink/[0.06]">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="chip">{item.meta}</span>
                </div>

                <h3 className="mt-5 font-display text-[16px] font-bold leading-[1.25] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.6] text-ink/65">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
