import { ModeToggle } from "@/components/mode-toggle";
import { AuthSideSheet } from "../authSideSheet";

type AuthWrapProps = {
  children?: React.ReactNode;
};

export function AuthWrap({ children }: AuthWrapProps) {
  return (
    <div className="flex min-h-screen items-stretch align-middle ">
      <AuthSideSheet />
      <div className="w-full px-6 pb-10 pt-10 text-xs font-medium md:w-7/12 md:px-12 md:pt-28">
        <div className="mx-auto max-w-md rounded-lg p-8 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
