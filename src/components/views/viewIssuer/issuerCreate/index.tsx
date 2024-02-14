import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IssuerCreateForm } from "./issuerCreateForm";

export function IssuerCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex shrink-0 items-center">
          <img
            className="h-5 w-5 md:mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          <span className="hidden md:inline">Create Issuer Profile</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Create Issuer Profile
          </SheetTitle>
        </SheetHeader>

        <IssuerCreateForm />
      </SheetContent>
    </Sheet>
  );
}
