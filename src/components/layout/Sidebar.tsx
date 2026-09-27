import { profile, navItems, socials } from '@/data/profile';

interface SidebarProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed inset-y-6 left-6 z-40 hidden w-[210px] flex-col justify-between rounded-[26px] border border-line bg-panel/85 p-[18px] shadow-card backdrop-blur-xl md:flex">
      <div>
        <a
          href="#home"
          onClick={() => onNavigate?.('home')}
          className="mb-10 flex items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-grad font-display text-[15px] font-black text-white shadow-glow">
            {profile.monogram}
          </span>
          <span className="leading-[1.1]">
            <span className="block font-display text-[13px] font-extrabold tracking-[-0.02em]">
              {profile.name.toUpperCase()}
            </span>
            <span className="mt-[2px] block font-mono text-[9px] tracking-[0.2em] text-ink/60">
              SECURITY • 2026
            </span>
          </span>
        </a>

        <nav aria-label="Section navigation">
          <ul className="space-y-[2px]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => onNavigate?.(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex h-9 items-center justify-between rounded-[12px] px-3 text-[12.5px] font-medium tracking-[-0.01em] transition ${
                      isActive
                        ? 'bg-active text-onactive shadow-lg'
                        : 'text-ink/60 hover:bg-ink/[0.06] hover:text-ink'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        isActive ? 'bg-brand' : 'bg-transparent group-hover:bg-ink/30'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <div className="mb-4 rounded-[16px] border border-line bg-ink/[0.05] p-3">
          <p className="mb-2 font-mono text-[9px] tracking-[0.2em] text-ink/50">STATUS</p>
          <p className="flex items-center gap-2 text-[11px] font-semibold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ok shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
            {profile.availability.status}
          </p>
          <p className="mt-1 font-mono text-[10px] leading-[1.3] text-ink/60">
            {profile.availability.role}
          </p>
        </div>

        <ul className="flex gap-2">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                title={social.label}
                className="icon-button"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-mono text-[9px] leading-[1.4] text-ink/40">
          {profile.location.short}
          <br />© {new Date().getFullYear()} {profile.name.toUpperCase()}
        </p>
      </div>
    </aside>
  );
}
