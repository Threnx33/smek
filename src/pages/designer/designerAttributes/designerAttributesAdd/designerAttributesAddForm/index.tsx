import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const SCHEMAS = [
  "Basic Credential",
  "University Degree",
  "Proof of Employment",
  "Commercial Invoice",
  "Business Card",
];

const ATTRIBUTES = ["Subject ID", "Subject Name"];

const schema = z.object({
  schema: z.string().min(1, "Select schema."),
  attribute: z.string().min(1, "Select attribute."),
});

const defaultValues: Partial<DesignerAttributesAddForm> = {
  schema: "",
  attribute: "",
};

type DesignerAttributesAddForm = z.infer<typeof schema>;

interface BadgeRecommendationsCreateProps
  extends HTMLAttributes<HTMLDivElement> {}

export function DesignerAttributesAddForm({
  className,
  ...props
}: BadgeRecommendationsCreateProps) {
  const form = useForm<DesignerAttributesAddForm>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: DesignerAttributesAddForm) {
    closeRef.current?.click();
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="schema"
            label="Select schema"
            placeholder="Select a schema"
            items={SCHEMAS}
          />

          <CustomSelect
            form={form}
            name="attribute"
            label="Select attribute"
            placeholder="Select a attribute"
            items={ATTRIBUTES}
          />

          <div className="ml-auto space-x-2">
            <Button
              type="button"
              onClick={() => closeRef.current?.click()}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
