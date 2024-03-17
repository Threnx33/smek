import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoChip } from "../../reusables/logoChip";
import { DrawerList } from "./drawerList";
import { Button } from "@/components/ui/button";
import { UserInfoChip } from "../userInfoChip";
import { Separator } from "@/components/ui/separator";
import { NotificationCountChip } from "../notificationCountChip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItemNoPropagation } from "../dropdownMenuItemNoPropagation";
import { Link } from "react-router-dom";

type DrawerProps = {
  className?: string;
};

export function Drawer({ className }: DrawerProps) {
  const mobileTopBarItems = [
    { label: "Calendar", iconName: "calendar", notificationCount: 0 },
    { label: "Messages", iconName: "sms", notificationCount: 8 },
    { label: "Notifications", iconName: "notification", notificationCount: 23 },
  ];

  return (
    <div className={className}>
      {/*Desktop drawer*/}
      <div className="min-h-full overflow-auto shadow-sm">
        <div className="hidden min-h-screen min-w-[16rem] lg:block">
          <LogoChip className="flex flex-row justify-center p-6 align-middle" />
          <DrawerList />
        </div>
      </div>

      {/*Mobile drawer*/}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mr-3">
              <img
                className="h-4 w-4"
                src="/arrowDown.svg"
                alt="arrowDownIcon"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[16rem] overflow-auto p-0">
            <LogoChip className="mb-4 mt-10 flex flex-row justify-center align-middle" />
            <DrawerList />

            <div className="md:hidden">
              <Separator />
              <div className="flex flex-col">
                <nav>
                  {mobileTopBarItems.map((item) => (
                    <div
                      key={item.label}
                      className="relative m-2 flex cursor-pointer items-center rounded-lg px-4 py-4 hover:bg-accent"
                    >
                      <img
                        src={`/${item.iconName}.svg`} // Replace with the correct path to the icon
                        className="h-5 w-5"
                        alt={`${item.label} icon`}
                      />
                      <span className="mx-3 font-medium">{item.label}</span>
                      {item.notificationCount > 0 && (
                        <NotificationCountChip
                          count={item.notificationCount}
                          className="absolute right-1"
                        />
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <Separator className="" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <UserInfoChip className="m-2 rounded-lg px-4 py-4 hover:bg-accent" />
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
                        <span className="text-sm font-semibold">
                          Theo Edwards
                        </span>
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
                      <img
                        className="h-5 w-5"
                        src="/logout.svg"
                        alt="LogoutIcon"
                      />
                      <span>Sign out</span>
                    </div>
                  </DropdownMenuItemNoPropagation>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
