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
import { BadgeTemplatesFilterForm } from "@/components/views/viewBadges/badgeTemplatesFilter";

export function FilterButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <img className="h-5 w-5 mr-2" src="/filter.svg" alt="FilterIcon" />
          <span>Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <BadgeTemplatesFilterForm />
        <SheetFooter>
          <SheetClose asChild>
            <div>
              <Button variant="outline">Reset</Button>
              <Button type="submit">Apply</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
