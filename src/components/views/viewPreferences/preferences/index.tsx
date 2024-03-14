import { Button } from "@/components/ui/button";
import { PreferencesForm } from "./sections/preferencesForm";
import { MainWrap } from "@/components/reusables/mainWrap";

export function ViewPreferences() {
  return (
    <MainWrap>
      <div className="flex items-start">
        <div className="flex-1">
          <div className="mb-2 select-none text-2xl font-semibold">
            Preferences
          </div>
          <div className=" mb-5 w-7/12 select-none">
            Account settings can be changed anytime
          </div>
        </div>
        <Button className="ml-auto" type="submit">
          Update profile
        </Button>
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <PreferencesForm />
      </div>
    </MainWrap>
  );
}
