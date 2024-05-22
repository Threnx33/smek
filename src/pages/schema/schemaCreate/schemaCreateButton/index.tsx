import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type SchemaCreateButtonProps = {
  className?: string;
  variant?: "mobile" | "desktop";
};

export default function SchemaCreateButton({
  className,
  variant,
}: SchemaCreateButtonProps) {
  return (
    <Link to="create">
      {variant !== "mobile" ? (
        <Button className={`mr-3 ${className}`}>
          <img
            className="mr-2 h-5 w-5"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          Create New Schema
        </Button>
      ) : (
        <div className="flex space-x-2 py-1 pr-2">
          <img className="h-5 w-5" src="/addSquare.svg" alt="addSquareIcon" />
          <span>Create New Schema</span>
        </div>
      )}
    </Link>
  );
}
