import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnalyticsFilterForm } from "./analyticsFilterForm";

interface AnalyticsFilterButtonProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function AnalyticsFilterButton({
  className,
  variant,
}: AnalyticsFilterButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {variant !== "mobile" ? (
          <Button variant="outline" className={`${className}`}>
            <img className="mr-2 h-5 w-5" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </Button>
        ) : (
          <div className="flex space-x-2 py-1 pr-2">
            <img className="mr-2 h-5 w-5" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </div>
        )}
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold ">Filters</SheetTitle>
        </SheetHeader>

        <AnalyticsFilterForm />
      </SheetContent>
    </Sheet>
  );
}
