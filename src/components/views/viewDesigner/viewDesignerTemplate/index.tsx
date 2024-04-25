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
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
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

export default function ViewDesignerTemplates() {
  return (
    <div className="flex min-h-screen flex-col">
      <DesignerTopbar />
      <div className="flex flex-row">
        <DesignerDrawer className="hidden lg:block" />
        <DesignerDrawerExtendWrap>
          {designerDrawerExtendedItems.map((section, i) => (
            <div className="flex flex-col" key={section.title}>
              {i !== 0 && <Separator className="my-6" />}
              <DesignerDrawerExtendSection key={section.title} {...section} />
            </div>
          ))}
        </DesignerDrawerExtendWrap>
        <div className="flex flex-grow flex-col bg-cLightGreyBg px-3 py-2 md:px-6 md:py-4">
          da
        </div>
      </div>
    </div>
  );
}
