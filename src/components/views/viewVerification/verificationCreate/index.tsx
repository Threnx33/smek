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
        <Button className="mr-3">
          <img
            className="h-5 w-5 mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          Create Verification Template
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[34rem] overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-semibold text-2xl ">
            Create Verification Template
          </SheetTitle>
        </SheetHeader>

        <VerificationCreateForm />
      </SheetContent>
    </Sheet>
  );
}
