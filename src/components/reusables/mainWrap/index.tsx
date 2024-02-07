import { Drawer } from "../drawer";
import TopBar from "../topBar";

type MainWrapProps = {
  children?: React.ReactNode;
};

export function MainWrap({ children }: MainWrapProps) {
  return (
    <div className="flex min-h-screen flex-row">
      <Drawer className="hidden lg:block" />
      <div className="flex w-full flex-col">
        <TopBar />
        <div className="flex h-full flex-col bg-cLightGreyBg px-3 py-2 md:px-6 md:py-4 ">
          {children}
        </div>
      </div>
    </div>
  );
}
