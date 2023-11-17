import { Drawer } from "../drawer";
import TopBar from "../topBar";

type MainWrapProps = {
  children?: React.ReactNode;
};

export function MainWrap({ children }: MainWrapProps) {
  return (
    <div className="flex flex-row">
      <Drawer />
      <div className="w-full flex flex-col">
        <TopBar />
        <div className="flex flex-col h-full bg-cLightGreyBg px-6 py-4 ">
          {children}
        </div>
      </div>
    </div>
  );
}