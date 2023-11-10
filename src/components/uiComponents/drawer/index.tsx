import { LogoChip } from "../../reusables/logoChip";
import { DrawerList } from "./drawerList";

export function Drawer() {
  return (
    <div className="w-80 min-h-screen shadow-sm ">
      <LogoChip className="flex flex-row justify-center align-middle m-6" />
      <DrawerList />
    </div>
  );
}
