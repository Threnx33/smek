import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgesCollectionsCreateForm } from "./badgesCollectionsCreateForm";

export function BadgesCollectionsCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3">
          <img
            className="h-5 w-5 mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          Create Collection
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-semibold text-2xl ">
            Add Collection
          </SheetTitle>
          <SheetDescription className="font-normal text-foreground text-xs">
            Complete the information below to add collection.
          </SheetDescription>
        </SheetHeader>

        <BadgesCollectionsCreateForm />
      </SheetContent>
    </Sheet>
  );
}
