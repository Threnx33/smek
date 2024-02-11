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

type BadgesTemplatesIssueButtonProps = {
  issuer?: string;
  templateName?: string;
  className?: string;
  variant?: "desktop" | "mobile";
};

export function BadgesTemplatesIssueButton({
  issuer,
  templateName,
  className,
  variant,
}: BadgesTemplatesIssueButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          {variant !== "mobile" ? (
            <Button className={`mr-3 ${className}`}>
              Issue {!issuer && "Badge"}
            </Button>
          ) : (
            <div className="flex space-x-2 py-1 pr-2">
              <img
                className="h-5 w-5"
                src="/addSquare.svg"
                alt="addSquareIcon"
              />
              <span>Issue Badge</span>
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold">
            Issue Badge
          </SheetTitle>
          <SheetDescription className="text-xs font-normal text-foreground">
            Complete the information below to issue this badge.
          </SheetDescription>
        </SheetHeader>

        <BadgesTemplatesIssueForm issuer={issuer} templateName={templateName} />
      </SheetContent>
    </Sheet>
  );
}
