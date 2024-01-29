import { ModeToggle } from "@/components/mode-toggle";
import { AuthSideSheet } from "../authSideSheet";

type AuthWrapProps = {
  children?: React.ReactNode;
};

export function AuthWrap({ children }: AuthWrapProps) {
  return (
    <div className="flex align-middle min-h-screen items-stretch ">
      <AuthSideSheet />
      <div className="text-xs font-medium w-full pl-12 pt-28 pb-10 md:w-7/12">
        <div className="p-8 rounded-lg shadow-md max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
