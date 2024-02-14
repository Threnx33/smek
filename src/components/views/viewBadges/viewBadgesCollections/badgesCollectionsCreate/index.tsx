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
        <Button className="mr-3 shrink-0">
          <img
            className="h-5 w-5 xl:mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          <span className="hidden xl:flex">Create Collection</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto sm:w-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Add Collection
          </SheetTitle>
          <SheetDescription className="text-xs font-normal text-foreground">
            Complete the information below to add collection.
          </SheetDescription>
        </SheetHeader>

        <BadgesCollectionsCreateForm />
      </SheetContent>
    </Sheet>
  );
}
