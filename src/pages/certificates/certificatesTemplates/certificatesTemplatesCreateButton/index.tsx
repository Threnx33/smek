import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CertificatesTemplatesCreateButtonProps = {
  className?: string;
  variant?: "mobile" | "desktop";
};

export default function CertificatesTemplatesCreateButton({
  className,
  variant,
}: CertificatesTemplatesCreateButtonProps) {
  return (
    <Link to="create">
      {variant !== "mobile" ? (
        <Button className={`mr-3 ${className}`}>
          <img
            className="mr-2 h-5 w-5"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          Create Template
        </Button>
      ) : (
        <div className="flex space-x-2 py-1 pr-2">
          <img className="h-5 w-5" src="/addSquare.svg" alt="addSquareIcon" />
          <span>Create Template</span>
        </div>
      )}
    </Link>
  );
}
