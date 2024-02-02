import { ModeToggle } from "@/components/mode-toggle";
import { AuthSideSheet } from "../authSideSheet";

type AuthWrapProps = {
  children?: React.ReactNode;
};

export function AuthWrap({ children }: AuthWrapProps) {
  return (
    <div className="flex align-middle min-h-screen items-stretch ">
      <AuthSideSheet />
      <div className="text-xs font-medium w-full px-6 pt-16 pb-10 md:w-7/12 md:px-12 md:pt-28">
        <div className="p-8 rounded-lg shadow-md max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
