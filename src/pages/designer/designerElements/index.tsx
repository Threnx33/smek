import DesignerMainWrap from "../designerMainWrap";
import { DrawerExtendedElements } from "./sections/drawerExtendedElements";
import { StageComponent } from "./sections/stage";

export default function DesignerElements() {
  return (
    <DesignerMainWrap drawerExtended={<DrawerExtendedElements />}>
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14 ">
        <StageComponent />
      </div>
    </DesignerMainWrap>
  );
}
