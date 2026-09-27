import { services } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mt-20">
      <SectionHeading
        align="center"
        eyebrow="What I do • Core capabilities"
        title={<span id="services-title">Security-first builder. Design-obsessed.</span>}
        description="From Python security tooling to Three.js experiences — polished, production-grade work that balances offensive research with modern web craft."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.number} delay={index * 0.06}>
            <article className="surface group relative h-full overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[180px] w-[180px] rounded-full bg-brand-grad opacity-20 blur-[40px] transition-opacity group-hover:opacity-40"
              />

              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-[14px] border border-line bg-ink/[0.06]">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className="font-mono text-[12px] font-semibold text-ink/30"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[20px] font-bold leading-[1.15] tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-ink/65">{service.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="chip">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
