import { DesignerDrawer } from "@/components/reusables/designerDrawer";
import { DesignerTopbar } from "@/components/reusables/designerTopbar";

export default function ViewDesigner() {
  return (
    <div className="flex min-h-screen flex-row">
      <DesignerDrawer className="hidden lg:block" />
      <div className="flex w-full flex-col">
        <DesignerTopbar />
        <div className="flex flex-grow flex-col bg-cLightGreyBg px-3 py-2 md:px-6 md:py-4 ">
          da
        </div>
      </div>
    </div>
  );
}
