import { DesignerDrawer } from "@/components/reusables/designerDrawer";
import { DesignerTopbar } from "@/components/reusables/designerTopbar";

type DesignerMainWrapProps = {
  children: React.ReactNode;
  drawerExtended: React.ReactNode;
};

export default function DesignerMainWrap({
  children,
  drawerExtended,
}: DesignerMainWrapProps) {
  const drawer = <DesignerDrawer drawerExtended={drawerExtended} />;

  return (
    <div className="flex min-h-screen flex-col">
      <DesignerTopbar drawer={drawer} />
      <div className="flex min-h-full flex-grow flex-row">
        <div className="hidden xl:block">{drawer}</div>
        {children}
      </div>
    </div>
  );
}
