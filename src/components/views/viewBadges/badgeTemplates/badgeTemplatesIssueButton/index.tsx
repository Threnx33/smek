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
import { BadgeTemplatesIssueForm } from "./badgeTemplatesIssueForm";
// import { BadgeTemplatesIssueForm } from "./badgeTemplatesIssueForm";

export function BadgeTemplatesIssueButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3">Issue Badge</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-9">
          <SheetTitle className="font-bold text-2xl mb-6">
            Issue Badge
          </SheetTitle>
          <SheetDescription className="font-semibold text-foreground text-xs">
            Complete the information below to issue this badge.
          </SheetDescription>
        </SheetHeader>

        <BadgeTemplatesIssueForm />
        <SheetFooter>
          <SheetClose asChild>
            <div className="space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Issue</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
