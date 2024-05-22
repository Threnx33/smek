import { CustomCalendarExtended } from "@/components/reusables/customCalendarExtended";
import { CustomCheckboxChips } from "@/components/reusables/customRadioGroupChips";
import { Status } from "@/components/reusables/statusChip";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SheetClose } from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Column, Table as ReactTable } from "@tanstack/react-table";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const badgeTemplatesFilterSchema = z.object({
  templateStatus: z.array(z.string()),
  templateVisibility: z.array(z.string()),
  from: z.date().optional(),
  to: z.date().optional(),
});

const defaultFilterValues: Partial<BadgeTemplatesFilterSchema> = {
  templateStatus: [],
  templateVisibility: [],
};

type BadgeTemplatesFilterSchema = z.infer<typeof badgeTemplatesFilterSchema>;

interface BadgeTemplatesFilterProps<TData> {
  table: ReactTable<TData>;
  className?: string;
}

export function BadgesTemplatesFilterForm<TData>({
  table,
  className,
}: BadgeTemplatesFilterProps<TData>) {
  const form = useForm<BadgeTemplatesFilterSchema>({
    resolver: zodResolver(badgeTemplatesFilterSchema),
    defaultValues: defaultFilterValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: BadgeTemplatesFilterSchema) {
    const statusColumn = table.getColumn("status") as
      | Column<TData, Status>
      | undefined;
    const filterValue = Array.from(data.templateStatus);
    statusColumn?.setFilterValue(filterValue.length ? filterValue : undefined);
    closeRef.current?.click();
  }

  function handleReset() {
    table.getAllColumns().forEach((column) => column.setFilterValue(undefined));
    closeRef.current?.click();
  }

  const templateStatus = [
    { value: "Published", label: "Published" },
    { value: "Draft", label: "Draft" },
  ];

  const templateVisibility = [
    { value: "private", label: "Private" },
    { value: "public", label: "Public" },
  ];

  return (
    <div className={className}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomCheckboxChips
            className="mb-4"
            form={form}
            name="templateStatus"
            label="Template status"
            items={templateStatus}
          />
          <CustomCheckboxChips
            className="mb-4"
            form={form}
            name="templateVisibility"
            label="Template visibility"
            items={templateVisibility}
          />

          <div className="text-sm font-medium">Date created</div>
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
            <Button onClick={handleReset} type="button" variant="outline">
              Reset
            </Button>
            <Button type="submit">Apply</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
