export function Title({ title, icon, rootClassName }) {
  return (
    <div className={`flex items-center mb-4 ${rootClassName}`}>
      {icon && <img src={icon} alt="icon" className="w-5 h-5 mr-2" />}
      <span className="!text-sm md:text-xl font-[550] text-[var(--title)]">
        {title}
      </span>
    </div>
  );
}
