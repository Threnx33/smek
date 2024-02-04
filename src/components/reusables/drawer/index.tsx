import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoChip } from "../../reusables/logoChip";
import { DrawerList } from "./drawerList";
import { Button } from "@/components/ui/button";
import { UserInfoChip } from "../userInfoChip";
import { Separator } from "@/components/ui/separator";
import { NotificationCountChip } from "../notificationCountChip";

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
        <div className="hidden min-h-screen min-w-[16rem] md:block">
          <LogoChip className="flex flex-row justify-center p-6 align-middle" />
          <DrawerList />
        </div>
      </div>

      {/*Mobile drawer*/}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className=" mr-3">
              <img
                className="h-5 w-5"
                src="/arrowDown.svg"
                alt="arrowDownIcon"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[16rem] overflow-auto p-0">
            <LogoChip className="mb-4 mt-10 flex flex-row justify-center align-middle" />
            <DrawerList />

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
            <UserInfoChip className="m-2 rounded-lg px-4 py-4 hover:bg-accent" />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
