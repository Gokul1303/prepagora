import { ICONS } from "../../assets";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import FormFooter from "./FormFooter";

const formSections = [
  {
    title: "Product Information",
    fields: [
      {
        label: "Product Name",
        type: "text",
        placeholder: "Red Trouser with Blue Button",
      },
      {
        label: "Short Description",
        type: "textarea",
        placeholder: "Enter Text",
      },
      {
        label: "SKU/Model (Optional)",
        type: "text",
        placeholder: "Enter SKU/Model number",
      },
      {
        label: "Category",
        type: "text",
        placeholder: "Select Category",
        helper: "Select your product category",
        icon: ICONS.SearchLight,
      },
    ],
  },
  {
    label: "Product Images",
    custom: (
      <div className="flex flex-col items-center border-[1px] border-dashed border-[var(--border-secondary)]  rounded-lg p-6  text-[var(--file-texts)] space-y-3">
        <img src={ICONS.DocumentIcon} alt="DocumentIcon" />

        <p className="text-sm font-[550]">Drag & Drop file from computer</p>
        <p className="text-xs font-[450]">or</p>
        <button className="border border-[var(--file-texts)] px-4 py-1 rounded-full text-sm hover:bg-gray-50 text-sm font-[550]">
          Choose File
        </button>
        <p className="text-xs font-medium">
          Upload JPG, PNG (Max 5MB) for best quality.
        </p>
      </div>
    ),
  },
  {
    label: "Product Video (Optional)",
    custom: (
      <div className="flex flex-col items-center border-[1px] border-dashed border-[var(--border-secondary)]  rounded-lg p-6 text-center text-[var(--file-texts)] space-y-3">
        <img src={ICONS.DocumentIcon} alt="DocumentIcon" />
        <p className=" text-sm font-[550]">
          Drag & Drop a video here, or choose one of <br /> the options below
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <button className="border px-4 py-1 rounded-full text-sm font-[550] hover:bg-gray-50">
            Choose from your computer
          </button>
          <button className="border px-4 py-1 rounded-full text-sm font-[550] hover:bg-gray-50">
            Paste Video URL
          </button>
        </div>
        <p className="text-xs font-medium">
          Supports mov, mp4 (Max 10MB) for best quality.
        </p>
      </div>
    ),
  },
  {
    label: "Product Broucher (Optional)",
    custom: (
      <div className="flex flex-col items-center border-[1px] border-dashed border-[var(--border-secondary)]  rounded-lg p-6 text-center text-[var(--file-texts)] space-y-3">
        <img src={ICONS.DocumentIcon} alt="DocumentIcon" />
        <p className=" text-sm font-[550]">Drag & Drop file from computer</p>
        <p className="text-xs font-[450]">or</p>
        <button className="border border-[var(--file-texts)] px-4 py-1 rounded-full text-sm hover:bg-gray-50 text-sm font-[550]">
          Choose File
        </button>
        <p className="text-xs font-medium">
          Upload PDF(Max 5MB) for best quality.
        </p>
      </div>
    ),
  },
  {
    footer: [
      {
        label: "Country of Origin",
        type: "text",
        placeholder: "Select Country",
        icon: ICONS.Selector,
      },
    ],
  },
];

export default function ProductInformationForm() {
  return (
    <div className="max-w-5xl mx-auto   shadow-sm p-6 bg-white ">
      {formSections.map((section, i) => (
        <div key={i} className="mb-8 ">
          {section?.title && (
            <div className="flex items-center mb-4 gap-2">
              <img src={ICONS.Info} alt="Info" className="w-5 h-5" />
              <h2 className="text-md md:text-xl font-semibold text-[var(--title)]">
                {section?.title}
              </h2>
            </div>
          )}
          {section.custom && <Title title={section?.label} />}

          {section.fields &&
            section.fields.map((field, idx) => <Input key={idx} {...field} />)}

          {section.custom && <div className="mt-2">{section.custom}</div>}

          {section.footer &&
            section.footer.map((field, idx) => <Input key={idx} {...field} />)}
        </div>
      ))}
      <div>
        <FormFooter />
      </div>
    </div>
  );
}
