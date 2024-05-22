import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CertificatesTemplatesIssueForm } from "./certificatesTemplatesIssueForm";

type CertificatesTemplatesIssueButtonProps = {
  issuer?: string;
  templateName?: string;
  className?: string;
  variant?: "desktop" | "mobile";
};

export function CertificatesTemplatesIssueButton({
  issuer,
  templateName,
  className,
  variant,
}: CertificatesTemplatesIssueButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          {variant !== "mobile" ? (
            <Button className={`mr-3 ${className}`}>
              Issue {!issuer && "Certificate"}
            </Button>
          ) : (
            <div className="flex space-x-2 py-1 pr-2">
              <img
                className="h-5 w-5"
                src="/addSquare.svg"
                alt="addSquareIcon"
              />
              <span>Issue Certificate</span>
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto p-2 sm:p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold">
            Issue Certificate
          </SheetTitle>
          <SheetDescription className="text-xs font-normal text-foreground">
            Complete the information below to issue this certificate.
          </SheetDescription>
        </SheetHeader>

        <CertificatesTemplatesIssueForm
          issuer={issuer}
          templateName={templateName}
        />
      </SheetContent>
    </Sheet>
  );
}
