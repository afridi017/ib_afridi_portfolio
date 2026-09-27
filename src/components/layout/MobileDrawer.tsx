import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { navItems, profile } from '@/data/profile';
import { useScrollLock } from '@/hooks/useScrollLock';

interface MobileDrawerProps {
  open: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function MobileDrawer({ open, activeSection, onClose, onNavigate }: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    panelRef.current?.focus();

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="absolute inset-y-3 left-3 flex w-[84%] max-w-[300px] animate-fade-in flex-col justify-between rounded-[24px] border border-line bg-panel p-5 outline-none"
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand-grad font-display font-black text-white">
                {profile.monogram}
              </span>
              <span className="font-display font-bold">{profile.name.toUpperCase()}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink/5"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Section navigation">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        onNavigate(item.id);
                        onClose();
                      }}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex h-11 items-center gap-3 rounded-xl px-4 text-[14px] font-medium transition ${
                        isActive ? 'bg-active text-onactive' : 'text-ink/75 hover:bg-ink/5'
                      }`}
                    >
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="font-mono text-[10px] text-ink/50">
          © {new Date().getFullYear()} {profile.name.toUpperCase()} • Security Researcher
        </p>
      </div>
    </div>
  );
}
