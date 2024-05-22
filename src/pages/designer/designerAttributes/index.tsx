import { StageComponent } from "../designerElements/sections/stage";
import DesignerMainWrap from "../designerMainWrap";
import { DrawerExtendedAttributes } from "./drawerExtendedAttributes";

export default function DesignerAttributes() {
  return (
    <DesignerMainWrap drawerExtended={<DrawerExtendedAttributes />}>
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14">
        <StageComponent />
      </div>
    </DesignerMainWrap>
  );
}
