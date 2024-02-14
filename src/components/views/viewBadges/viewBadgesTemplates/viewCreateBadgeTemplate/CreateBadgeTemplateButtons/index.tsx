import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

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
          <DropdownMenuItemNoPropagation>
            <Link to="/badges/templates">Cancel</Link>
          </DropdownMenuItemNoPropagation>
          <DropdownMenuItemNoPropagation>
            Save as draft
          </DropdownMenuItemNoPropagation>
          <DropdownMenuItemNoPropagation>
            Publish template
          </DropdownMenuItemNoPropagation>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
