import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Table as ReactTable } from "@tanstack/react-table";
import { CertificatesTemplatesFilterForm } from "./certificatesTemplatesFilterForm";

type CertificatesTemplatesFilterButtonProps<TData> = {
  table: ReactTable<TData>;
  className?: string;
  variant?: "desktop" | "mobile";
};

export function CertificatesTemplatesFilterButton<TData>({
  table,
  className,
  variant,
}: CertificatesTemplatesFilterButtonProps<TData>) {
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
            <img className="h-5 w-5" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </div>
        )}
      </SheetTrigger>
      <SheetContent className=" overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">Filters</SheetTitle>
        </SheetHeader>

        <CertificatesTemplatesFilterForm table={table} />
      </SheetContent>
    </Sheet>
  );
}
