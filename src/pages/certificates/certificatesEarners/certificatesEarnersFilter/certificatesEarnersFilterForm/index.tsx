import { CustomCalendarExtended } from "@/components/reusables/customCalendarExtended";
import { CustomCheckboxList } from "@/components/reusables/customCheckboxList";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table as ReactTable } from "@tanstack/react-table";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const certificateEarnersFilterSchema = z.object({
  from: z.date().optional(),
  to: z.date().optional(),
  dateRange: z.enum(["dateCreated", "dateIssued"]),
  certificateStatus: z.array(z.string()),
  expiredCertificates: z.string(),
  templates: z.string(),
});

const defaultFilterValues: Partial<CertificateEarnersFilterSchema> = {
  dateRange: "dateCreated",
  certificateStatus: ["all"],
  expiredCertificates: "all",
  templates: "all",
};

type CertificateEarnersFilterSchema = z.infer<
  typeof certificateEarnersFilterSchema
>;

interface CertificateEarnersFilterProps<TData> {
  table: ReactTable<TData>;
  className?: string;
}

export function CertificatesEarnersFilterForm<TData>({
  table,
  className,
}: CertificateEarnersFilterProps<TData>) {
  const form = useForm<CertificateEarnersFilterSchema>({
    resolver: zodResolver(certificateEarnersFilterSchema),
    defaultValues: defaultFilterValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: CertificateEarnersFilterSchema) {
    closeRef.current?.click();
  }

  function handleReset() {
    table.getAllColumns().forEach((column) => column.setFilterValue(undefined));
    closeRef.current?.click();
  }

  const dateRangeWatch = form.watch("dateRange", "dateCreated");

  const dateComp = (
    <div>
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
        className="mb-2"
        form={form}
        name="to"
        buttonLabel="To"
        disabledFunction={(date) => {
          const fromDateValue = form.getValues("from")
            ? form.getValues("from")
            : null;

          const isAfterFromDate = fromDateValue ? date < fromDateValue : false;

          const isOutOfRange =
            date > new Date() || date < new Date("1900-01-01");

          return isAfterFromDate || isOutOfRange;
        }}
      />
    </div>
  );

  const dateRangeItems = [
    {
      value: "dateCreated",
      label: "Date created",
      renderBelowSelected: dateComp,
    },
    { value: "dateIssued", label: "Expires on", renderBelowSelected: dateComp },
  ];

  const checkboxItems = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "accepted",
      label: "Accepted",
    },
    {
      value: "rejected",
      label: "Rejected",
    },
    {
      value: "revoked",
      label: "Revoked",
    },
  ];

  const expiredCertificatesItems = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "active",
      label: "Active",
    },
    {
      value: "expired",
      label: "Expired",
    },
  ];

  const templatesItems = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "collections",
      label: "Collections",
    },
    {
      value: "individual",
      label: "Individual",
    },
  ];

  return (
    <div className={className}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className={`flex flex-col mb-4`}>
                <FormLabel className="mb-2">Date Range</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={"dateCreated"}
                  >
                    {dateRangeItems.map((item) => (
                      <div key={item.value} className="flex flex-col">
                        <FormItem className="flex items-center space-x-2 space-y-0 mr-2 mb-2">
                          <FormControl>
                            <RadioGroupItem
                              value={item.value}
                              id={item.value}
                            />
                          </FormControl>
                          <Label className="font-normal" htmlFor={item.value}>
                            {item.label}
                          </Label>
                        </FormItem>
                        {dateRangeWatch === item.value ? dateComp : null}
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Separator className="mb-4" />

          <CustomCheckboxList
            form={form}
            items={checkboxItems}
            name="certificateStatus"
            label="Certificate Status"
            className="mb-4"
          />

          <Separator className="mb-4" />

          <CustomRadioGroup
            className="mb-6"
            classNameRadio="flex flex-col space-y-1"
            form={form}
            name="expiredCertificates"
            label="Expired Certificates"
            items={expiredCertificatesItems}
            defaultValue="all"
          />

          <Separator className="mb-4" />

          <CustomRadioGroup
            className="mb-6"
            classNameRadio="flex flex-col space-y-1"
            form={form}
            name="templates"
            label="Templates"
            items={templatesItems}
            defaultValue="all"
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
