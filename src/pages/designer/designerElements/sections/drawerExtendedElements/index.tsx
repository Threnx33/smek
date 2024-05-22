import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { Separator } from "@/components/ui/separator";

import {
  DesignerDrawerExtendSection,
  useDesignerDrawerExtendedItems,
} from "./designerDrawerExtendSection";

export const DrawerExtendedElements = () => {
  const designerDrawerExtendedItems = useDesignerDrawerExtendedItems();

  return (
    <DesignerDrawerExtendWrap className="">
      <div className="text-lg font-semibold">Elements</div>
      {designerDrawerExtendedItems.map((section, i) => (
        <div className="flex flex-col" key={i}>
          {i !== 0 && <Separator className="my-6" />}
          <DesignerDrawerExtendSection key={section.title} {...section} />
        </div>
      ))}
    </DesignerDrawerExtendWrap>
  );
};
