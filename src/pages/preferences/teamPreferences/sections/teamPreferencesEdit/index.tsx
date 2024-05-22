import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TeamMember } from "../../data";
import { TeamPreferencesEditForm } from "./teamPreferencesEditForm";

type TeamPreferencesEditProps<TData> = {
  member: TeamMember;
  className?: string;
  variant?: "desktop" | "mobile";
};

export function TeamPreferencesEdit<TData>({
  member,
  className,
  variant,
}: TeamPreferencesEditProps<TData>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>Edit</div>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Invite Members
          </SheetTitle>
          <SheetDescription className="text-xs font-normal text-foreground">
            You can invite multiple members. Enter multiple emails and send the
            invite
          </SheetDescription>
        </SheetHeader>

        <TeamPreferencesEditForm member={member} />
      </SheetContent>
    </Sheet>
  );
}
