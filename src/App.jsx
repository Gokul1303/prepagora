import "./App.css";
import { ICONS } from "./assets";
import { sidebar_list, subSidebar_list } from "./constants/lists";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SubSidebar from "./components/SubSidebar";
import ProductForm from "./modules/ProductForm/ProductForm";
import ProductPreview from "./components/ProductPreview";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-16">
          <Sidebar list={sidebar_list} />
        </div>

        <div className="hidden md:block w-[25%]">
          <SubSidebar
            icon={ICONS.ArrowLeft}
            title="Add Product"
            list={subSidebar_list}
          />
        </div>

        <div className="flex-1 flex overflow-auto">
          <div className="flex-1 lg:px-4">
            <ProductForm />
          </div>

          <div className="hidden xl:block w-80 border-l bg-white">
            <ProductPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
