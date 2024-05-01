import { DesignerDrawer } from "@/components/reusables/designerDrawer";
import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { DesignerTopbar } from "@/components/reusables/designerTopbar";
import { Separator } from "@/components/ui/separator";

const designerDrawerExtendedItems: DesignerDrawerExtendedSectionProps[] = [
  {
    title: "Elements",
    items: [
      { label: "Add Image", iconName: "gallery-add" },
      { label: "Add QR Code", iconName: "scan-barcode" },
    ],
  },
  {
    title: "Text",
    items: [
      { label: "Add Heading 1", iconName: "general" },
      { label: "Add Heading 2", iconName: "general" },
      { label: "Add Heading 3", iconName: "general" },
      { label: "Add Text", iconName: "smallcaps" },
    ],
  },
  {
    title: "Custom Code",
    items: [{ label: "Add HTML Block", iconName: "scroll" }],
  },
];

type DesignerDrawerExtendedSectionProps = {
  title: string;
  items: { label: string; iconName: string }[];
};

const DesignerDrawerExtendSection = ({
  title,
  items,
}: DesignerDrawerExtendedSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="font-semibold">{title}</div>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <img
              className="h-5 w-5"
              src={`/designer/designerTemplates/${item.iconName}.svg`}
              alt={`${item.iconName} icon`}
            />
            <div className="tetxt-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ViewDesignerElements() {
  return (
    <div className="flex min-h-screen flex-col">
      <DesignerTopbar />
      <div className="flex min-h-full flex-grow flex-row">
        <DesignerDrawer className="hidden lg:flex" />
        <DesignerDrawerExtendWrap className="">
          {designerDrawerExtendedItems.map((section, i) => (
            <div className="flex flex-col" key={section.title}>
              {i !== 0 && <Separator className="my-6" />}
              <DesignerDrawerExtendSection key={section.title} {...section} />
            </div>
          ))}
        </DesignerDrawerExtendWrap>
        <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14">
          <img
            className="h-[590px] w-[480px]"
            src="/designer/templateImages/template5.png"
            alt="Designer Icon"
          />
        </div>
      </div>
    </div>
  );
}
