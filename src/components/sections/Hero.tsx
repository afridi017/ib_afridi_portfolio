import { useState } from 'react';
import { ArrowUpRight, Cpu, Download, MapPin, Shield, Sparkles, Terminal } from 'lucide-react';
import { marqueeItems, profile, socials, stats } from '@/data/profile';
import { usePointerTilt } from '@/hooks/usePointerTilt';
import { Marquee } from '@/components/ui/Marquee';
import { Reveal } from '@/components/ui/Reveal';

const CODE_LINES = [
  'import nmap',
  'import socket',
  '# IAPF — IB Afridi Pentest Framework',
  'def scan(target):',
  '    scanner = nmap.PortScanner()',
  "    scanner.scan(target, '1-1024')",
  '    return scanner.all_hosts()',
  '# 13 modules loaded ✓',
  '# Multi-threaded ✓',
  '# Auto-report ✓',
];

const MODULE_BARS = [38, 72, 54, 92, 66, 44, 78, 60, 88, 50, 70, 64, 82];

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const { ref: tiltRef, tilt } = usePointerTilt<HTMLDivElement>(18);
  const quickStats = stats.slice(0, 3);
  const resumeHref = profile.resumeUrl || `mailto:${profile.email}?subject=Resume request`;

  return (
    <section id="home" aria-labelledby="home-title" className="pt-4 md:pt-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="inline-flex h-8 items-center gap-2 rounded-full border border-line bg-ink/5 px-3 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ok" aria-hidden="true" />
            {profile.availability.label.toUpperCase()}
          </p>

          <p className="mono-label mt-6">{profile.eyebrow}</p>

          <h1
            id="home-title"
            className="mt-3 font-serif text-[56px] font-normal leading-[0.88] tracking-[-0.04em] md:text-[78px] lg:text-[86px]"
          >
            {profile.heroTitle.first}
            <br />
            <span className="bg-brand-text bg-clip-text text-transparent">
              {profile.heroTitle.second}
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[15.5px] font-normal leading-[1.6] text-ink/75 md:text-[17px]">
            I build <strong className="font-semibold text-ink">security tooling with Python</strong>
            , run offensive research in isolated labs, and ship modern web experiences.{' '}
            <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/15 px-2 py-0.5 text-[12px] font-semibold">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              21+ modules
            </span>{' '}
            • 13-module flagship framework for Kali Linux. Based in {profile.location.city}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View my work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={resumeHref} className="btn-ghost">
              <Download className="h-4 w-4" aria-hidden="true" />
              {profile.resumeUrl ? 'Download resume' : 'Request resume'}
            </a>
          </div>

          <ul className="mt-7 flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="icon-button"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="ml-2 font-mono text-[11px] text-ink/60">
              github.com/afridi017 • {profile.brandUrl.toLowerCase()}
            </li>
          </ul>

          <dl className="mt-10 grid max-w-[420px] grid-cols-3 gap-3 rounded-[18px] border border-line bg-ink/[0.04] p-2">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-[12px] bg-ink/[0.05] p-3 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[18px] font-bold leading-none">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] tracking-[0.14em] text-ink/60">
                    {stat.label.toUpperCase()}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Visual */}
        <Reveal delay={0.12} className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="page-glow pointer-events-none absolute h-[520px] w-[520px] rounded-full opacity-60 blur-[50px]"
          />

          <span className="absolute left-[2%] top-[8%] z-20 animate-float">
            <span className="flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 font-mono text-[11px] font-semibold shadow-card backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full bg-brand-grad text-[10px] text-white"
              >
                ◍
              </span>
              21+ MODULES BUILT
            </span>
          </span>

          <span className="absolute right-[-2%] top-[16%] z-20 animate-float-mid md:right-[4%]">
            <span className="flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 font-mono text-[11px] font-semibold shadow-card backdrop-blur-xl">
              <Shield className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
              KALI LINUX READY
            </span>
          </span>

          <span className="absolute bottom-[18%] left-[-2%] z-20 animate-float-slow md:left-[4%]">
            <span className="flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-2 font-mono text-[11px] font-semibold shadow-card backdrop-blur-xl">
              ETHICAL HACKER • PAK
            </span>
          </span>

          <div style={{ perspective: '1100px' }} className="w-full max-w-[380px]">
            <div
              ref={tiltRef}
              style={{
                transform: `rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg) translateY(${tilt.translateY}px)`,
                transformStyle: 'preserve-3d',
              }}
              className="surface overflow-hidden transition-transform duration-200 ease-out"
            >
              <div className="flex h-10 items-center justify-between border-b border-line px-5">
                <span className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-ink/70">
                  IB AFRIDI — SECURITY RESEARCHER
                </span>
                <Shield className="h-4 w-4 text-ink/60" aria-hidden="true" />
              </div>

              <div className="p-4">
                <div className="grid-code relative h-[360px] overflow-hidden rounded-[22px] border border-line bg-ink/[0.06]">
                  <div
                    aria-hidden="true"
                    className="code-overlay absolute inset-0 select-none p-4 font-mono text-[9px] leading-[1.7]"
                  >
                    {CODE_LINES.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>

                  <div className="absolute inset-0 grid place-items-center p-3">
                    <div className="relative">
                      {!imageFailed ? (
                        <div className="h-[300px] w-[200px] overflow-hidden rounded-[16px] border-[6px] border-white/90 bg-brand-grad p-[2px] shadow-glow-lg">
                          <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-base">
                            <img
                              src={profile.photoUrl}
                              alt={`${profile.legalName}, cybersecurity specialist`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover object-top"
                              onError={() => setImageFailed(true)}
                            />
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-black/80 to-transparent"
                            />
                            <span className="absolute inset-x-0 bottom-2 text-center font-mono text-[8px] font-semibold tracking-[0.2em] text-white/90">
                              PESHAWAR • KPK • ETHICAL HACKER
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="h-[210px] w-[170px] rounded-[22px] bg-brand-grad p-[2px] shadow-glow-lg">
                          <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[20px] bg-base">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-brand-grad-soft"
                            />
                            <span className="relative bg-gradient-to-br from-ink to-ink/60 bg-clip-text font-display text-[64px] font-extrabold leading-none tracking-[-0.06em] text-transparent">
                              {profile.monogram}
                            </span>
                            <span className="absolute bottom-3 text-center font-mono text-[8px] tracking-[0.2em] text-ink/70">
                              {profile.location.short.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      )}

                      <span
                        aria-hidden="true"
                        className="absolute -bottom-3 -right-3 grid h-10 w-10 place-items-center rounded-full border border-line bg-base shadow-xl"
                      >
                        <Terminal className="h-5 w-5 text-brand-cyan" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-3">
                  <div className="rounded-[16px] border border-line bg-ink/[0.05] p-3">
                    <p className="mb-2 font-mono text-[9px] tracking-[0.18em] text-ink/50">
                      MODULES LOADOUT
                    </p>
                    <div className="flex h-[36px] items-end gap-[3px]" aria-hidden="true">
                      {MODULE_BARS.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="flex-1 rounded-full bg-brand-grad"
                          style={{ height: `${height}%`, opacity: 0.6 + (height / 100) * 0.4 }}
                        />
                      ))}
                    </div>
                    <p className="mt-2 font-mono text-[9px] text-ink/50">
                      13/13 ACTIVE • NMAP BACKEND
                    </p>
                  </div>

                  <div className="flex flex-col justify-between rounded-[16px] bg-brand-grad p-3 text-white">
                    <p className="font-mono text-[9px] tracking-[0.18em] text-white/80">MOTTO</p>
                    <p className="mt-1 font-display text-[12px] font-bold leading-[1.2]">
                      “{profile.motto}”
                    </p>
                    <p className="mt-2 flex items-center gap-1 font-mono text-[9px] text-white/80">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {profile.location.short.toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="flex -space-x-1" aria-hidden="true">
                    {[Shield, Terminal, Cpu].map((Icon, index) => (
                      <span
                        key={index}
                        className="grid h-7 w-7 place-items-center rounded-full border border-line bg-base"
                      >
                        <Icon className="h-3.5 w-3.5 text-ink/80" />
                      </span>
                    ))}
                  </span>
                  <span className="font-mono text-[10px] text-ink/60">{profile.brandUrl}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Marquee items={marqueeItems} />
    </section>
  );
}
