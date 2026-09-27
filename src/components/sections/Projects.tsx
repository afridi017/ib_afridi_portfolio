import { ArrowUpRight, Bot, Github } from 'lucide-react';
import { aiProject, projects } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mt-20">
      <SectionHeading
        eyebrow={`Projects • ${projects.length} shipped`}
        title={
          <span id="projects-title">
            Flagship framework.
            <br />
            Polished drops.
          </span>
        }
        action={
          <a
            href="https://github.com/afridi017"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full border border-line bg-ink/5 px-4 font-mono text-[11px] font-semibold tracking-[0.1em] transition hover:border-line-strong md:inline-flex"
          >
            GITHUB
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        }
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3 md:auto-rows-[260px]">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.05}
            className={project.featured ? 'md:row-span-2' : ''}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-line p-6 text-white transition duration-300 hover:-translate-y-1.5 hover:border-brand/50"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              />
              <span aria-hidden="true" className="grid-code absolute inset-0 opacity-30" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-gradient-to-br from-white/[0.08] to-transparent blur-[20px]"
              />

              <span className="relative z-10 flex items-start justify-between">
                <span className="chip border-white/20 bg-white/10 text-white/80">
                  {project.kicker}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>

              <span className="relative z-10 mt-auto block">
                <span className="block font-display text-[24px] font-bold leading-[0.95] tracking-[-0.03em] md:text-[28px]">
                  {project.title}
                </span>
                <span className="mt-3 block text-[13px] leading-[1.5] text-white/70">
                  {project.description}
                </span>

                <span className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-2 py-1 font-mono text-[10px] text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </span>

                {project.featured && project.highlights ? (
                  <span className="mt-6 grid grid-cols-3 gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight.label}
                        className="rounded-[12px] border border-white/10 bg-white/[0.08] p-2.5"
                      >
                        <span className="block font-display text-[13px] font-bold">
                          {highlight.value}
                        </span>
                        <span className="block font-mono text-[8px] tracking-[0.14em] text-white/60">
                          {highlight.label.toUpperCase()}
                        </span>
                      </span>
                    ))}
                  </span>
                ) : null}
              </span>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[96px] font-black leading-none text-white/[0.06]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* AI automation banner */}
      <Reveal className="mt-4">
        <article className="surface flex h-full flex-col justify-between p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="chip">{aiProject.kicker}</p>
            <p className="flex items-center gap-2 font-mono text-[10px] text-ink/60">
              <Bot className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {aiProject.liveLabel.toUpperCase()}
            </p>
          </div>

          <div className="mt-6 grid items-end gap-6 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h3 className="font-display text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[26px]">
                {aiProject.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-ink/70">
                {aiProject.description}
              </p>
            </div>

            <div className="rounded-[14px] border border-line bg-ink/[0.06] p-3 font-mono text-[11px] leading-[1.6] text-ink/80">
              <p className="mb-2 text-[9px] tracking-[0.18em] text-ink/50">STACK</p>
              {aiProject.stack.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
