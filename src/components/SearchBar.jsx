import { ICONS } from "../assets";

export default function SearchBar({
  placeholder = "What are you looking for ?",
}) {
  return (
    <div className="flex items-center border border-red-500 rounded-full overflow-hidden w-full ">
      <img src={ICONS.Search} alt="Search" className="w-4 h-4 ml-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-2 py-2 text-sm outline-none placeholder:text-[#535353] placeholder:font-[450]"
      />
      <button className=" text-gray-500 hover:text-red-500">
        <img src={ICONS.Voice} alt="Photography" className="w-5 h-5" />
      </button>
      <button className="px-3 text-gray-500 hover:text-red-500">
        <img src={ICONS.Photography} alt="Photography" className="w-5 h-5" />
      </button>
    </div>
  );
}
