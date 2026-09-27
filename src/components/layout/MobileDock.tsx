import { dockItems } from '@/data/profile';

interface MobileDockProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

export function MobileDock({ activeSection, onNavigate }: MobileDockProps) {
  return (
    <nav
      aria-label="Quick section navigation"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-panel/90 p-1.5 shadow-card backdrop-blur-2xl md:hidden"
    >
      {dockItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onNavigate?.(item.id)}
            aria-label={item.label}
            aria-current={isActive ? 'true' : undefined}
            title={item.label}
            className={`grid h-11 w-11 place-items-center rounded-full transition ${
              isActive ? 'bg-active text-onactive' : 'text-ink/60 hover:text-ink'
            }`}
          >
            <item.icon className="h-[16px] w-[16px]" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
