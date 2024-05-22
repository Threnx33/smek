import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VerificationCreateForm } from "./verificationCreateForm";

export function VerificationCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3 shrink-0">
          <img
            className="h-5 w-5 md:mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          <span className="hidden md:flex">Create Verification Template</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto p-2 sm:min-w-[34rem] sm:p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Create Verification Template
          </SheetTitle>
        </SheetHeader>

        <VerificationCreateForm />
      </SheetContent>
    </Sheet>
  );
}
