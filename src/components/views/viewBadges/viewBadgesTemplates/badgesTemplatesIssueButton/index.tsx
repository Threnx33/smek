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
import { BadgesTemplatesIssueForm } from "./badgesTemplatesIssueForm";

export function BadgesTemplatesIssueButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3">Issue Badge</Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">Issue Badge</SheetTitle>
          <SheetDescription className="font-semibold text-foreground text-xs">
            Complete the information below to issue this badge.
          </SheetDescription>
        </SheetHeader>

        <BadgesTemplatesIssueForm />

        <div className="flex mb-6 space-x-2">
          <Button variant="outline" className="p-3">
            <img className="h-5 w-5 mr-1" src="/link.svg" alt="exportIcon" />
            URL
          </Button>
          <Button variant="outline" className="p-3">
            <img className="h-5 w-5 mr-1" src="/text.svg" alt="textIcon" />
            Text
          </Button>
          <Button variant="outline" className="p-3">
            <img className="h-5 w-5 mr-1" src="/export.svg" alt="exportIcon" />
            Upload
          </Button>
          <Button variant="outline" className="p-2">
            <img
              className="h-5 w-5 mr-1"
              src="/personalCard.svg"
              alt="PersonalCardIcon"
            />
            ID
          </Button>
          <Button variant="outline" className="p-2.5">
            <img className="h-5 w-5 mr-1" src="/dots.svg" alt="dotsIcon" />
          </Button>
        </div>

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
