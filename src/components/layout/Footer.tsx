import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.14em] text-ink/50">
      <p>
        © {new Date().getFullYear()} {profile.name.toUpperCase()} • BUILT WITH SECURITY, CODE &amp;
        3D • {profile.location.city.toUpperCase()}, {profile.location.country.toUpperCase()}
      </p>
      <p className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-ok" aria-hidden="true" />“
        {profile.motto}”
      </p>
    </footer>
  );
}
