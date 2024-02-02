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
    <div className="flex justify-between items-center p-4 shadow-sm w-full">
      <Drawer className="md:hidden" />
      <SearchBarChipTopbar
        placeholder="Discover work, badges & skills"
        handleOnChange={handleOnSeachChange}
      />
      <div className="flex items-center">
        <div className="relative cursor-pointer py-2">
          <img
            src="/calendar.svg"
            alt="calendarIcon"
            className="h-5 w-5 mx-3"
          />
        </div>
        <div className="relative cursor-pointer py-2">
          <img
            src="/sms.svg"
            alt="smsIcon"
            className="h-5 w-5 mx-3 cursor-pointer"
          />
          <NotificationCountChip count={8} className="top-0 right-0" />
        </div>

        <div className="relative cursor-pointer mr-3 py-2">
          <img
            src="/notification.svg"
            alt="notificationIcon"
            className="h-5 w-5 mx-3 cursor-pointer"
          />
          <NotificationCountChip count={23} className="top-0 right-0" />
        </div>

        <div className="flex items-center cursor-pointer">
          <img
            src="/avatar.png"
            alt="AvatarIcon"
            className="h-10 w-10 mx-2 rounded-full"
          />
          <div className="flex flex-col">
            <span className="mx-2 text-sm font-semibold">Theo Edwards</span>
            <span className="mx-2 text-sm text-mediumGrey">Administrator</span>
          </div>
          <img
            src="/arrowSquareDown.svg"
            alt="ArrowSquareDownIcon"
            className="h-5 w-5 mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
