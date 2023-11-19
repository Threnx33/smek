import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgesTemplatesFilterForm } from "./badgesTemplatesFilterForm";

export function BadgesTemplatesFilterButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <img className="h-5 w-5 mr-2" src="/filter.svg" alt="FilterIcon" />
          <span>Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">Filters</SheetTitle>
        </SheetHeader>

        <BadgesTemplatesFilterForm />

        <SheetFooter>
          <SheetClose asChild>
            <div className="space-x-2">
              <Button variant="outline">Reset</Button>
              <Button type="submit">Apply</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
