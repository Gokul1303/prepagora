export default function Sidebar({ list }) {
  return (
    <aside className="w-16 bg-white h-full flex flex-col">
      <ul className="p-3 space-y-3 flex-1">
        {list.slice(0, list.length - 2).map((step) => (
          <li
            key={step?.id}
            className={`p-2  hover:bg-gray-100 cursor-pointer ${
              [2, 7].includes(step.id)
                ? "border-b pb-3 border-[var(--border)]"
                : "rounded-md"
            }`}
          >
            <img src={step.icon} alt="icons" />
          </li>
        ))}
      </ul>

      <ul className="p-3 flex flex-col justify-between h-24">
        {list.slice(-2).map((step) => (
          <li
            key={step?.id}
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <img src={step.icon} alt="icons" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
