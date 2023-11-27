import { HTMLAttributes } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CustomCheckboxChips } from "@/components/reusables/customRadioGroupChips";
import { CustomCalendarExtended } from "@/components/reusables/customCalendarExtended";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const badgeTemplatesFilterSchema = z.object({
  templateState: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  templateVisibility: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  from: z.date().optional(),
  to: z.date().optional(),
});

const defaultFilterValues: Partial<BadgeTemplatesFilterSchema> = {
  templateState: [],
  templateVisibility: [],
};

type BadgeTemplatesFilterSchema = z.infer<typeof badgeTemplatesFilterSchema>;

interface BadgeTemplatesFilterProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgesTemplatesFilterForm({
  className,
  ...props
}: BadgeTemplatesFilterProps) {
  const form = useForm<BadgeTemplatesFilterSchema>({
    resolver: zodResolver(badgeTemplatesFilterSchema),
    defaultValues: defaultFilterValues,
  });

  async function onSubmit(data: BadgeTemplatesFilterSchema) {
    console.log(data);
  }

  const templateStates = [
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
  ];

  const templateVisibility = [
    { value: "private", label: "Private" },
    { value: "public", label: "Public" },
  ];

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomCheckboxChips
            className="mb-4"
            form={form}
            name="templateState"
            label="Template state"
            items={templateStates}
          />
          <CustomCheckboxChips
            className="mb-4"
            form={form}
            name="templateVisibility"
            label="Template Visibility"
            items={templateVisibility}
          />

          <div className="text-sm font-semibold ">Date created</div>
          <CustomCalendarExtended
            form={form}
            name="from"
            buttonLabel="From"
            disabledFunction={(date) => {
              const toDateValue = form.getValues("to")
                ? form.getValues("to")
                : null;

              const isAfterToDate = toDateValue ? date > toDateValue : false;

              const isOutOfRange =
                date > new Date() || date < new Date("1900-01-01");

              return isAfterToDate || isOutOfRange;
            }}
          />
          <CustomCalendarExtended
            className="mb-6"
            form={form}
            name="to"
            buttonLabel="To"
            disabledFunction={(date) => {
              const fromDateValue = form.getValues("from")
                ? form.getValues("from")
                : null;

              const isAfterFromDate = fromDateValue
                ? date < fromDateValue
                : false;

              const isOutOfRange =
                date > new Date() || date < new Date("1900-01-01");

              return isAfterFromDate || isOutOfRange;
            }}
          />

          <div className="space-x-2 ml-auto">
            <Button type="button" variant="outline">
              Reset
            </Button>
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
