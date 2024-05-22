import { MainWrap } from "@/components/reusables/mainWrap";
import { Button } from "@/components/ui/button";
import { Edit } from "iconsax-react";
import { PreferencesForm } from "./sections/preferencesForm";

export function Preferences() {
  return (
    <MainWrap>
      <div className="flex items-start">
        <div className="flex-1">
          <div className="mb-2 select-none text-2xl font-semibold">
            Preferences
          </div>
          <div className=" mb-5 w-10/12 select-none xl:w-7/12">
            Account settings can be changed anytime
          </div>
        </div>
        <Button className="ml-auto" type="submit">
          <div className="hidden md:flex">Update profile</div>
          <div className="shrink-0 md:hidden">
            <Edit className="w-5 h-5" color="white" />
          </div>
        </Button>
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <PreferencesForm />
      </div>
    </MainWrap>
  );
}
