import { RootState } from "@/redux";
import { setPrintCanvas } from "@/redux/reducers/designer";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DesignerMainWrap from "../designerMainWrap";
import { DrawerExtendedSettings } from "./drawerExtendedSettings";

export default function DesignerSettings() {
  const [orientation, setOrientation] = useState("landscape");
  const { printCanvas } = useSelector((state: RootState) => state.designer);
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const printCanvasImg = async () => {
      if (imgRef.current === null) return;
      const img = await html2canvas(imgRef.current, { scale: 4 });
      const dataUrl = img.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "design.png";
      link.click();
      dispatch(setPrintCanvas(false));
    };

    if (printCanvas) {
      printCanvasImg();
    }
  }, [printCanvas]);

  return (
    <DesignerMainWrap
      drawerExtended={
        <DrawerExtendedSettings
          orientation={orientation}
          setOrientation={setOrientation}
        />
      }
    >
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 lg:p-10">
        <img
          ref={imgRef}
          className={`${orientation === "landscape" ? "h-[480px] w-[590px]" : "h-[590px] w-[480px]"}`}
          src="/designer/templateImages/portraitWhite.png"
          alt="Designer Icon"
        />
      </div>
    </DesignerMainWrap>
  );
}
