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

const TopBar = () => {
  const [search, setSearch] = useState<string>();

  function handleOnSeachChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="flex w-full items-center px-2 py-4 shadow-sm md:px-4">
      <Drawer className="shrink-0 lg:hidden" />

      <div className="flex w-full items-center justify-between">
        <SearchBarChip
          placeholder="Discover work, badges & skills"
          handleOnChange={handleOnSeachChange}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="hidden items-center md:flex">
              <div className="relative cursor-pointer py-2">
                <img
                  src="/calendar.svg"
                  alt="calendarIcon"
                  className="mx-3 h-5 w-5"
                />
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

              <UserInfoChip />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItemNoPropagation>
              <div className={`px- flex cursor-pointer items-center`}>
                <img
                  src="/avatar.png"
                  alt="AvatarIcon"
                  className="h-10 w-10 rounded-full"
                />
                <div className="mx-2 flex flex-col">
                  <span className="text-sm font-semibold">Theo Edwards</span>
                  <span className="text-xs text-cMediumGrey">
                    theoedwards@gmail.com
                  </span>
                </div>
              </div>
            </DropdownMenuItemNoPropagation>
            <Separator />

            <DropdownMenuItemNoPropagation>
              <div className="flex space-x-2 px-2 py-1">
                <img
                  className="h-5 w-5"
                  src="/setting.svg"
                  alt="SettingsIcon"
                />
                <span>Settings</span>
              </div>
            </DropdownMenuItemNoPropagation>

            <DropdownMenuItemNoPropagation>
              <Link to="/preferences/team-preferences">
                <div className="flex space-x-2 px-2 py-1">
                  <img
                    className="h-5 w-5"
                    src="/peopleBlack.svg"
                    alt="PeopleIcon"
                  />
                  <span>Team settings</span>
                </div>
              </Link>
            </DropdownMenuItemNoPropagation>

            <DropdownMenuItemNoPropagation>
              <div className="flex space-x-2 px-2 py-1">
                <img className="h-5 w-5" src="/logout.svg" alt="LogoutIcon" />
                <span>Sign out</span>
              </div>
            </DropdownMenuItemNoPropagation>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
