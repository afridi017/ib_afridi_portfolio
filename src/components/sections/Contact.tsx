import { useState, type FormEvent } from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState('');

  const update = (key: keyof FormState) => (value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in your name, email and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n\n— sent from ib-afridi.netlify.app`,
    );

    setStatus('Opening your mail app…');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-20">
      <Reveal className="surface grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
        {/* Details */}
        <div className="bg-brand-grad-soft p-7 md:p-10">
          <p className="mono-label">Contact • {profile.location.short}</p>
          <h2
            id="contact-title"
            className="mt-3 font-serif text-[38px] leading-[0.9] tracking-[-0.03em] md:text-[46px]"
          >
            Let&rsquo;s secure
            <br />
            the web.
          </h2>
          <p className="mt-4 max-w-[360px] text-[14px] leading-[1.6] text-ink/70">
            Open to Junior Pentester / SOC Analyst roles, freelance 3D web builds, and security tool
            collaborations. Ethical engagements only.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-[48px] items-center gap-3 rounded-[14px] border border-line bg-panel/70 px-4 transition hover:scale-[1.01]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-grad text-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[9px] tracking-[0.16em] text-ink/50">
                  EMAIL
                </span>
                <span className="block text-[13px] font-semibold">{profile.email}</span>
              </span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/afridi017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[48px] items-center gap-2 rounded-[14px] border border-line bg-panel/70 px-4 transition hover:border-line-strong"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="text-[13px] font-semibold">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ishaqafridi017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[48px] items-center gap-2 rounded-[14px] border border-line bg-panel/70 px-4 transition hover:border-line-strong"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="text-[13px] font-semibold">LinkedIn</span>
              </a>
            </div>

            <div className="rounded-[14px] border border-line bg-panel/60 p-4 font-mono text-[11px] leading-[1.6]">
              <p className="flex flex-wrap items-center gap-2 text-ink/70">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <a href={`tel:${profile.phoneHref}`} className="link-underline">
                  {profile.phone}
                </a>
                <span aria-hidden="true">•</span>
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location.short}
              </p>
              <p className="mt-2 text-ink/80">
                Portfolio: {profile.brandUrl.toLowerCase()}
                <br />
                Instagram: @ishaqafridi017
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-panel/60 p-7 md:p-10">
          <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" aria-hidden="true" />
            Send a message
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="contact-name"
                className="font-mono text-[10px] tracking-[0.16em] text-ink/60"
              >
                YOUR NAME
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => update('name')(event.target.value)}
                placeholder="Your full name"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-mono text-[10px] tracking-[0.16em] text-ink/60"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => update('email')(event.target.value)}
                placeholder="you@company.com"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="font-mono text-[10px] tracking-[0.16em] text-ink/60"
              >
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) => update('message')(event.target.value)}
                placeholder="Tell me about the role or project…"
                className="field h-auto resize-none py-3"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Open mail app
              <Send className="h-4 w-4" aria-hidden="true" />
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <p
              aria-live="polite"
              className="min-h-[16px] text-center font-mono text-[10px] text-ink/50"
            >
              {status || 'Uses your default mail client • No data stored • Ethical only'}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
