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
};

export function BadgesTemplatesIssueButton({
  issuer,
  templateName,
}: BadgesTemplatesIssueButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mr-3">Issue {!issuer && "Certificate"}</Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">
            Issue Certificate
          </SheetTitle>
          <SheetDescription className="font-semibold text-foreground text-xs">
            Complete the information below to issue this certificate.
          </SheetDescription>
        </SheetHeader>

        <BadgesTemplatesIssueForm issuer={issuer} templateName={templateName} />
      </SheetContent>
    </Sheet>
  );
}
