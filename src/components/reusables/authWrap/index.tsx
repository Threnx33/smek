import { ModeToggle } from "@/components/mode-toggle";
import { AuthSideSheet } from "../authSideSheet";

type AuthWrapProps = {
  children?: React.ReactNode;
};

export function AuthWrap({ children }: AuthWrapProps) {
  return (
    <div className="flex min-h-screen items-stretch align-middle ">
      <AuthSideSheet />
      <div className="w-full px-6 pb-10 pt-10 text-xs font-medium lg:w-7/12 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-lg rounded-lg p-8 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
