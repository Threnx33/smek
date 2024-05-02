import { DesignerDrawer } from "@/components/reusables/designerDrawer";
import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { DesignerTopbar } from "@/components/reusables/designerTopbar";
import { Separator } from "@/components/ui/separator";
import ViewDesignerMainWrap from "../viewDesignerMainWrap";

type DesignerDrawerExtendedSectionProps = {
  title: string;
  children: React.ReactNode;
};

const DesignerDrawerExtendSection = ({
  title,
  children,
}: DesignerDrawerExtendedSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="font-semibold">{title}</div>
      {children}
    </div>
  );
};

export default function ViewDesignerSettings() {
  return (
    <ViewDesignerMainWrap>
      <DesignerDrawerExtendWrap className="">
        <div className="text-lg font-semibold">Settings</div>
        <DesignerDrawerExtendSection title="Size">
          <div className="flex items-center gap-3"></div>
        </DesignerDrawerExtendSection>
      </DesignerDrawerExtendWrap>
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14">
        <img
          className="h-[590px] w-[480px]"
          src="/designer/templateImages/template5.png"
          alt="Designer Icon"
        />
      </div>
    </ViewDesignerMainWrap>
  );
}
