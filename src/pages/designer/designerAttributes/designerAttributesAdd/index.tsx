import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DesignerAttributesAddForm } from "./designerAttributesAddForm";

type DesignerAttributesAddProps = {
  className?: string;
};

export function DesignerAttributesAdd({
  className,
}: DesignerAttributesAddProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add custom attribute</Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto ">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Add Custom Attribute
          </SheetTitle>
        </SheetHeader>

        <DesignerAttributesAddForm />
      </SheetContent>
    </Sheet>
  );
}
