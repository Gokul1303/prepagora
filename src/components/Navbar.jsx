import { ICONS } from "../assets";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="w-full px-3 flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <img src={ICONS.Logo} alt="Pepagora" className="h-6" />

          <button className="flex items-center gap-2">
            <img src={ICONS.Menu} alt="" className="w-4 h-4" />
            <span className="text-[#113311] text-sm font-medium hidden sm:block">
              All Categories
            </span>
          </button>
        </div>

        <div className="hidden md:hidden lg:flex flex-1 px-4">
          <SearchBar />
        </div>

        <div className="hidden md:hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={ICONS.Globe} alt="Globe" className="w-5 h-5" />
            <span className="text-sm font-medium text-[var(--header-text)]">
              EN
            </span>
            <img src={ICONS.Chevron} alt="Chevron" className="w-2 h-2" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <span role="img" aria-label="India">
              🇮🇳
            </span>
            <span className="text-sm font-medium text-[var(--header-text)]">
              IN
            </span>
            <img src={ICONS.Chevron} alt="Chevron" className="w-2 h-2" />
          </div>

          <button className="text-gray-600 hover:text-black lg:border-l border-[var(--border)]">
            <img src={ICONS.Bell} alt="Bell" className="w-5 h-5 ml-2" />
          </button>

          <button className="bg-[#32383E] text-white text-sm font-medium px-4 py-1.5 rounded-full">
            Post Buying Requirement
          </button>

          <img src={ICONS.Rfq} alt="Rfq" className="w-10 h-10" />
        </div>

        <div className="">
          <button className="text-gray-600 hover:text-black">
            <img src={ICONS.User} alt="User" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
