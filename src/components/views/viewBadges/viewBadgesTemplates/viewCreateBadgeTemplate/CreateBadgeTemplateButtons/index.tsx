import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function CreateBadgeTemplateButtons() {
  return (
    <div>
      <div className="hidden space-x-2 md:flex">
        <Link to="/badges/templates">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="outline">Save as draft</Button>
        <Button>Publish template</Button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto shrink-0 px-3 md:hidden">
            <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link to="/badges/templates">Cancel</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Save as draft</DropdownMenuItem>
          <DropdownMenuItem>Publish template</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
