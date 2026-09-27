import { stats, type Stat } from '@/data/profile';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);

  return (
    <div className="rounded-[18px] border border-line bg-ink/[0.04] p-4">
      <p className="font-display text-[28px] font-extrabold leading-none">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase leading-[1.3] tracking-[0.14em] text-ink/60">
        {stat.label}
      </p>
    </div>
  );
}

export function StatGrid() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div ref={ref} className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} active={inView} />
      ))}
    </div>
  );
}
