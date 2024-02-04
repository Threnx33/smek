import { useState } from "react";
import { NotificationCountChip } from "../notificationCountChip";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";
import { Drawer } from "../drawer";
import { UserInfoChip } from "../userInfoChip";

const TopBar = () => {
  const [search, setSearch] = useState<string>();

  function handleOnSeachChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="flex w-full items-center p-4 shadow-sm">
      <Drawer className="mx-2 md:hidden" />

      <div className="flex w-full items-center justify-between">
        <SearchBarChipTopbar
          placeholder="Discover work, badges & skills"
          handleOnChange={handleOnSeachChange}
        />

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
      </div>
    </div>
  );
};

export default TopBar;
