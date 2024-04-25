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
import { Undo2 } from "lucide-react";

export const DesignerTopbar = () => {
  const [search, setSearch] = useState<string>();

  function handleOnSeachChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="flex w-full items-center px-2 py-4 shadow-sm md:px-4">
      {/* <DesignerDrawer className="shrink-0 lg:hidden" /> */}

      <div className="flex w-full items-center">
        <SearchBarChip
          placeholder="Discover work, badges & skills"
          handleOnChange={handleOnSeachChange}
        />
        <div className="ml-auto flex items-center">
          <div className="relative cursor-pointer py-2">
            <Undo2 />
          </div>
          <div className="relative cursor-pointer py-2">
            <img
              src="/sms.svg"
              alt="smsIcon"
              className="mx-3 h-5 w-5 cursor-pointer "
            />
            <NotificationCountChip count={8} className="right-0 top-0" />
          </div>

          <div className="relative mr-3 cursor-pointer py-2 ">
            <img
              src="/notification.svg"
              alt="notificationIcon"
              className="mx-3 h-5 w-5 cursor-pointer"
            />
            <NotificationCountChip count={23} className="right-0 top-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
