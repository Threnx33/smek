import { DesignerDrawer } from "@/components/reusables/designerDrawer";
import { DesignerTopbar } from "@/components/reusables/designerTopbar";

type ViewDesignerMainWrapProps = {
  children: React.ReactNode;
};

export default function ViewDesignerMainWrap({
  children,
}: ViewDesignerMainWrapProps) {
  return (
    <div className="flex flex-col">
      <DesignerTopbar />
      <div className="flex min-h-full flex-grow flex-row">
        <DesignerDrawer className="hidden lg:flex" />
        {children}
      </div>
    </div>
  );
}
