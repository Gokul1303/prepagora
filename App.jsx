import "./App.css";
import { ICONS } from "./assets";
import { sidebar_list, subSidebar_list } from "./constants/lists";

import Navbar from "./components/Navbar";
import SubSidebar from "./components/SubSidebar";
import ProductForm from "./modules/ProductForm/ProductForm";
import ProductPreview from "./components/ProductPreview";
import Sidebar from "./components/Sidebar";

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

        <div className="flex-1 flex flex-col overflow-auto">
          <div className="block md:hidden">
            <SubSidebar
              icon={ICONS.ArrowLeft}
              title="Add Product"
              list={subSidebar_list}
            />
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-x-auto">
            <div className="flex-1 min-w-[90%] lg:min-w-[60%] px-4">
              <ProductForm />
            </div>

            <div className="w-full lg:w-[35%] md:w-[60%] border-t md:border-t-0 md:border-l bg-white shrink-0">
              <ProductPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
