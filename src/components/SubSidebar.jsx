export default function SubSidebar({ title, icon, list }) {
  return (
    <aside className="w-full h-full bg-white lg:p-8 opacity-100">
      {/* Header */}
      <div className="flex items-center md:pt-4">
        <img src={icon} alt="icons" className="w-8" />
        <h2 className="pl-2 text-xl md:text-2xl font-semibold text-[var(--h2-title)]">
          {title}
        </h2>
      </div>

      {/* --- Desktop / Tablet View --- */}
      <div className="hidden md:block p-2 space-y-4 mt-2">
        {list.map((step) => (
          <div
            key={step?.id}
            className={`lg:px-7 lg:py-4 md:px-2 md:py-3 flex flex-col rounded-3xl border shadow-[0px_0.5px_1px_0px_#00000040] cursor-pointer ${
              step.id === 1 ? "border-[var(--title)]" : "border-[var(--border)]"
            }`}
          >
            <div className="flex items-center">
              {step?.icon && (
                <img src={step?.icon} alt="icon" className="w-4 mr-2" />
              )}
              <span
                className={`font-[550] text-base tracking-[1.5%] ${
                  step.id === 1
                    ? "text-[var(--title)]"
                    : "text-[var(--content)]"
                }`}
              >
                {step?.title}
              </span>
            </div>
            <span className="text-sm font-[400] text-[var(--content)] tracking-[2%]">
              {step?.content}
            </span>
          </div>
        ))}
      </div>

      {/* --- Mobile View --- */}
      <div className="flex md:hidden overflow-x-auto mt-2 border-b">
        {list.map((step) => (
          <button
            key={step?.id}
            className={`
              flex-1 text-center py-2 px-3 font-medium whitespace-nowrap
              ${
                step.id === 1
                  ? "text-[var(--title)] border-b-2 border-[var(--title)]"
                  : "text-[var(--content)]"
              }
            `}
          >
            {step?.title}
          </button>
        ))}
      </div>
    </aside>
  );
}
