type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  glow?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  glow,
}: Props) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/80">
          {eyebrow}
        </span>
      )}
      <div className={glow ? "title-glow relative" : ""}>
        <h2 className="text-xl font-semibold text-primary md:text-2xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-xl text-sm text-muted md:text-[0.93rem]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

