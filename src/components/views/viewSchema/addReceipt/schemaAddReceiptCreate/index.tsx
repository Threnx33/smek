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
import { SchemaAddReceiptCreateForm } from "./schemaAddReceiptCreateForm";
import { Table as ReactTable } from "@tanstack/react-table";

type SchemaAddReceiptCreateButtonProps<TData> = {
  className?: string;
  variant?: "desktop" | "mobile";
};

export function SchemaAddReceiptCreateButton<TData>({
  className,
  variant,
}: SchemaAddReceiptCreateButtonProps<TData>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className={`${className}`}>
          <span>Add Manually</span>
        </Button>
      </SheetTrigger>
      <SheetContent className=" overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Add Receipt
          </SheetTitle>
        </SheetHeader>

        <SchemaAddReceiptCreateForm />
      </SheetContent>
    </Sheet>
  );
}
