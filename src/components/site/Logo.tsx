export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <svg width={compact ? 32 : 46} height={compact ? 32 : 46} viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r="48" fill="#0D0D0D" />
        <circle cx="50" cy="50" r="44" fill="#fff" />
        <path d="M64 22a32 32 0 100 56 25 25 0 110-56z" fill="#D62828" />
      </svg>
      <div className="leading-none">
        <div className="font-display font-black text-xl sm:text-2xl text-brand tracking-tight">OZZYY</div>
        <div className="font-display font-bold text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-700 -mt-1">
          SUPERSTORES
        </div>
      </div>
    </div>
  );
}
