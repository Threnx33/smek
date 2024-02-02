import { useState } from "react";
import { NotificationCountChip } from "../notificationCountChip";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";
import { Drawer } from "../drawer";

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

      <div className="flex items-center justify-between">
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

          <div className="flex cursor-pointer items-center">
            <img
              src="/avatar.png"
              alt="AvatarIcon"
              className="mx-2 h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="mx-2 text-sm font-semibold">Theo Edwards</span>
              <span className="text-mediumGrey mx-2 text-sm">
                Administrator
              </span>
            </div>
            <img
              src="/arrowSquareDown.svg"
              alt="ArrowSquareDownIcon"
              className="mx-2 h-5 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
