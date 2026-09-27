import { profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';
import { StatGrid } from '@/components/ui/StatGrid';

const TOOLS = ['Nmap', 'Wireshark', 'Burp Suite'];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mt-20 md:mt-28">
      <Reveal className="surface p-6 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mono-label">About • Builder of security tools</p>
            <h2
              id="about-title"
              className="mt-4 font-serif text-[40px] leading-[0.92] tracking-[-0.03em] md:text-[54px]"
            >
              Building secure tools with purpose.
            </h2>
            <div aria-hidden="true" className="mt-6 h-[3px] w-12 rounded-full bg-brand-grad" />
          </div>

          <div>
            <p className="text-[15.5px] leading-[1.7] text-ink/80">
              Highly motivated{' '}
              <strong className="font-semibold text-ink">
                Cybersecurity Specialist, Python Developer and Web Developer
              </strong>{' '}
              from {profile.location.city}. A rare combination of modern front-end craft and
              defensive/offensive security skills — with custom hacking-framework modules built from
              scratch and documented for other people to use.
            </p>

            <p className="mt-4 text-[15.5px] leading-[1.7] text-ink/60">
              Professional English diploma holder with a deep habit of continuous self-learning.
              Practical experience with{' '}
              {TOOLS.map((tool) => (
                <span key={tool} className="chip mx-0.5">
                  {tool}
                </span>
              ))}{' '}
              and Kali Linux, plus a dual-boot Windows 11 + Kali setup for legal security testing.
              Available for Junior Pentester / SOC Analyst roles.
            </p>

            <StatGrid />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
