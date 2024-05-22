import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { Separator } from "@/components/ui/separator";
import { setCanvasToAdd } from "@/redux/reducers/designer";
import { useDispatch } from "react-redux";
import { DesignerAttributesAdd } from "../designerAttributesAdd";

const designerDrawerExtendedItems: DesignerDrawerExtendedSectionProps[] = [
  {
    title: "Issuer",
    items: [
      { label: "Issuer Name", iconName: "addSquare" },
      { label: "Issuer Description", iconName: "addSquare" },
      { label: "Issuer ID", iconName: "addSquare" },
      { label: "Issuer Logo", iconName: "addSquare" },
    ],
  },
  {
    title: "Credential",
    items: [
      { label: "Credential Name", iconName: "addSquare" },
      { label: "Credential Description", iconName: "addSquare" },
      { label: "Issuer Date", iconName: "addSquare" },
      { label: "Expiry Date", iconName: "addSquare" },
    ],
  },
  {
    title: "Subject",
    items: [
      { label: "Subject ID", iconName: "addSquare" },
      { label: "Subject Name", iconName: "addSquare" },
      { label: "Subject Email", iconName: "addSquare" },
    ],
  },
];

type DesignerDrawerExtendedSectionProps = {
  title?: string;
  items: { label: string; iconName: string }[];
};

const DesignerDrawerExtendSection = ({
  title,
  items,
}: DesignerDrawerExtendedSectionProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-6">
      <div className="font-semibold">{title}</div>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3 cursor-pointer"
            onClick={() => {
              dispatch(
                setCanvasToAdd({
                  isText: true,
                  fontSize: "text-base",
                  imageUrl: null,
                })
              );
            }}
          >
            <div className="text-sm">{item.label}</div>{" "}
            <img
              className="h-5 w-5"
              src={`/${item.iconName}.svg`}
              alt={`${item.iconName} icon`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const DrawerExtendedAttributes = () => {
  return (
    <DesignerDrawerExtendWrap className="">
      <div className="mb-6 text-lg font-semibold">Attributes</div>
      {designerDrawerExtendedItems.map((section, i) => (
        <div className="flex flex-col" key={section.title}>
          {i !== 0 && <Separator className="my-6" />}
          <DesignerDrawerExtendSection key={section.title} {...section} />
        </div>
      ))}
      <Separator className="my-6" />
      <div className="flex flex-col gap-6">
        <div className="font-semibold">Custom Attributes</div>
        <DesignerAttributesAdd />
      </div>
    </DesignerDrawerExtendWrap>
  );
};
