import { useMemo, useState } from 'react';
import { navItems } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import { HeaderControls } from '@/components/layout/HeaderControls';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileDock } from '@/components/layout/MobileDock';
import { MobileDrawer } from '@/components/layout/MobileDrawer';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Recognition } from '@/components/sections/Recognition';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  const { theme, cycleTheme, label, themes, labels } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const { activeSection, setActiveSection } = useActiveSection(sectionIds, 'home');

  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];

  return (
    <div className="min-h-screen overflow-x-hidden bg-base font-sans text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-active focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-onactive"
      >
        Skip to content
      </a>

      <HeaderControls
        theme={theme}
        themeLabel={label}
        nextThemeLabel={labels[nextTheme]}
        onCycleTheme={cycleTheme}
        onOpenMenu={() => setDrawerOpen(true)}
      />

      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      <MobileDrawer
        open={drawerOpen}
        activeSection={activeSection}
        onClose={() => setDrawerOpen(false)}
        onNavigate={setActiveSection}
      />

      <MobileDock activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-28 pt-6 md:ml-[250px] md:mr-0 md:max-w-[1180px] md:px-8 md:pb-10 md:pt-8 lg:px-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Recognition />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
