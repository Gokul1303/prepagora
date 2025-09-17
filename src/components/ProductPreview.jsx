import { ICONS } from "../assets";

export default function ProductPreview() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white  rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <img
              src={ICONS.DocumentIcon}
              alt="DocumentIcon"
              className="w-6 h-6 mr-2"
            />
            <h2 className="text-sm font-medium text-[#181D27]">
              Product information
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="w-full bg-gray-200 h-1.5 rounded-full">
              <div className="bg-[#89C949] h-1.5 rounded-full w-[20%]" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Completed 10%</p>
          </div>
        </div>

        {/* Preview Section */}
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <img src={ICONS.Close} alt="Close" />
              </button>
              <h2 className="text-lg font-semibold leading-[1%]">Preview</h2>
            </div>
            <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100">
              <img src={ICONS.Expand} alt="Expand" />
            </button>
          </div>

          {/* Main Preview Image */}
          <div className="">
            <img
              src={ICONS.Thumbnail1}
              alt="Product"
              className="max-h-full max-w-full"
            />
            <img
              src={ICONS.Thumbnail2}
              alt="Product"
              className="max-h-full max-w-full mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
