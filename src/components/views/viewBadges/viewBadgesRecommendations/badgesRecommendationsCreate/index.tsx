import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgesRecommendationsCreateForm } from "./badgesRecommendationsCreateForm";

export function BadgesRecommendationsCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3">
          <img
            className="h-5 w-5 mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          Create Recommendation
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">
            Add Recommendation
          </SheetTitle>
          <SheetDescription className="font-semibold text-foreground text-xs">
            Complete the information below to add recommendation.
          </SheetDescription>
        </SheetHeader>

        <BadgesRecommendationsCreateForm />
      </SheetContent>
    </Sheet>
  );
}
