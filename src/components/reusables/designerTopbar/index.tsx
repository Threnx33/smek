import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useState } from "react";
import { Drawer } from "../drawer";
import { NotificationCountChip } from "../notificationCountChip";
import { UserInfoChip } from "../userInfoChip";

import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuSeparator,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { DesignerDrawer } from "../designerDrawer";
import { Redo, Redo2, Undo, Undo2 } from "lucide-react";
import { ArrowLeft } from "iconsax-react";

export const DesignerTopbar = () => {
  const [search, setSearch] = useState<string>();

  function handleOnSeachChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="shadow-b-sm flex w-full items-center border-b-[0.5px] px-2 py-4 md:px-4">
      {/* <DesignerDrawer className="shrink-0 lg:hidden" /> */}
      <div className="flex w-full items-center gap-4 px-1.5">
        <ArrowLeft className="h-5 w-5 cursor-pointer" />
        <SearchBarChip
          placeholder="Enter design name"
          handleOnChange={handleOnSeachChange}
        />
        <div className="ml-auto flex items-center gap-4">
          <Undo2 className="h-5 w-5 cursor-pointer text-cMediumGrey" />
          <Redo2 className="h-5 w-5 cursor-pointer text-cMediumGrey" />
          <Button>Save design</Button>
        </div>
      </div>
    </div>
  );
};
