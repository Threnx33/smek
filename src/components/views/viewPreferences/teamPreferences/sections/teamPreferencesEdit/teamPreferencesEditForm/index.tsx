import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SheetClose } from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TeamMember, TeamMemberRole } from "../../../data";

const teamPreferencesEditSchema = z.object({
  email: z.string(),
  role: z.string(),
});

const defaultPreferencesValues: Partial<TeamPreferencesEditSchema> = {
  email: "",
  role: "",
};

type TeamPreferencesEditSchema = z.infer<typeof teamPreferencesEditSchema>;

interface TeamPreferencesEditProps<TData> {
  member: TeamMember;
  className?: string;
}

export function TeamPreferencesEditForm<TData>({
  member,
  className,
}: TeamPreferencesEditProps<TData>) {
  const form = useForm<TeamPreferencesEditSchema>({
    resolver: zodResolver(teamPreferencesEditSchema),
    defaultValues: defaultPreferencesValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: TeamPreferencesEditSchema) {
    closeRef.current?.click();
  }

  const roles: TeamMemberRole[] = ["Team owner", "Member"];

  return (
    <div className={className}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput
            form={form}
            name="email"
            label="Email address"
            type="text"
            placeholder="Enter email address"
            defaultValue={member.email}
          />
          <CustomSelect
            form={form}
            name="role"
            label="Role"
            items={roles}
            defaultValue={member.role}
            className="mb-8"
          />

          <div className="ml-auto space-x-2">
            <Button
              type="button"
              onClick={() => closeRef.current?.click()}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Send invite</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
