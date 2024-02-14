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

type BadgesRecommendationsCreateProps = {
  className?: string;
  variant?: "desktop" | "mobile";
};

export function BadgesRecommendationsCreate({
  className,
  variant,
}: BadgesRecommendationsCreateProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {variant !== "mobile" ? (
          <Button className={`mr-3 ${className}`}>
            <img
              className="mr-2 h-5 w-5"
              src="/addSquareWhite.svg"
              alt="addSquareWhiteIcon"
            />
            Create Recommendation
          </Button>
        ) : (
          <div className="flex space-x-2 py-1 pr-2">
            <img
              className="mr-2 h-5 w-5"
              src="/addSquare.svg"
              alt="addSquareIcon"
            />
            Create Recommendation
          </div>
        )}
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto sm:w-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Add Recommendation
          </SheetTitle>
          <SheetDescription className="text-xs font-normal text-foreground">
            Complete the information below to add recommendation.
          </SheetDescription>
        </SheetHeader>

        <BadgesRecommendationsCreateForm />
      </SheetContent>
    </Sheet>
  );
}
