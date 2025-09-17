import { ICONS } from "../assets";
import { Title } from "./Title";

export function Input({
  label,
  type = "text",
  placeholder,
  helper,
  icon,
  extra,
}) {
  return (
    <div className="mb-4 space-y-2">
      <Title title={label} />

      {type === "textarea" ? (
        <div className="relative">
          <textarea
            placeholder={placeholder}
            rows={4}
            className="w-full border border-[var(--border-primary)] rounded-lg px-3 py-2 focus:outline-none resize-none"
          />
          <div className="absolute right-3 bottom-5 flex items-center gap-2 border border-[#d9d9d9] p-2 rounded-full">
            <img src={ICONS.Ai} alt="icon" className="w-4 h-4" />
            <span className="text-xs font-medium text-[#A5A5A5]">
              Write with AI
            </span>
          </div>
        </div>
      ) : (
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            className="w-full border border-[var(--border-primary)] rounded-lg px-3 py-2 pr-10 focus:outline-none"
          />
          {icon && (
            <span className="absolute right-3 top-2.5 text-gray-400">
              <img src={icon} alt="icon" className="w-5 h-5" />
            </span>
          )}
        </div>
      )}

      {helper && <p className="text-sm text-[var(--helper)]">{helper}</p>}
      {extra}
    </div>
  );
}
