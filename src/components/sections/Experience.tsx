import { experience, profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mt-20">
      <Reveal className="surface p-6 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono-label">Experience • Timeline</p>
            <h2
              id="experience-title"
              className="mt-2 font-serif text-[40px] leading-[0.92] tracking-[-0.03em] md:text-[52px]"
            >
              Built in public.
              <br />
              Shipped fast.
            </h2>
          </div>

          <p className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-ink/5 px-4 font-mono text-[10px] font-semibold tracking-[0.18em] text-ink/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ok" aria-hidden="true" />
            PESHAWAR • REMOTE • OPEN TO WORK
          </p>
        </div>

        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-gradient-to-b from-brand/60 via-brand-cyan/40 to-transparent md:left-[120px] md:block"
          />

          <ol className="space-y-8">
            {experience.map((item) => (
              <li key={item.role} className="relative grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
                <div className="hidden md:block">
                  <p className="mt-1 font-mono text-[11px] font-semibold tracking-[0.12em] text-ink/70">
                    {item.period}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute left-[114px] top-[6px] h-3 w-3 rounded-full border-2 border-base bg-brand shadow-[0_0_0_6px_rgba(123,47,247,0.15)]"
                  />
                </div>

                <div className="rounded-[20px] border border-line bg-ink/[0.04] p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-[17px] font-bold leading-[1.25]">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] text-ink/60">{item.organisation}</p>
                    </div>
                    <p className="chip md:hidden">{item.period}</p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 text-[13px] leading-[1.5] text-ink/70">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-[0.14em] text-ink/40">
          {profile.location.city.toUpperCase()}, {profile.location.country.toUpperCase()} • UPDATED{' '}
          {new Date().getFullYear()}
        </p>
      </Reveal>
    </section>
  );
}
