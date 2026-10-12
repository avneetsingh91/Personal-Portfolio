const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "18+", label: "Technologies" },
  { value: "36h", label: "Hackathon Sprint" },
  { value: "1", label: "National Hackathon Finalist" },
];

const Stats = () => {
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat, index) => (
        <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center hover:border-[var(--accent)]/50 transition-colors duration-300">
          <div className="text-lg md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            {stat.value}
          </div>
          <p className="mt-1 text-[11px] md:text-xs text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;