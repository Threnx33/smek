import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomRadioGroupWithDescription } from "@/components/reusables/customRadioGroupWithDescription";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const analyticsFilterSchema = z.object({
  collections: z.array(z.string()),
  templates: z.array(z.string()),
  basis: z.enum(["Issued", "Activity"]),
  expired: z.boolean(),
  retroactive: z.boolean(),
  organizations: z.array(z.string()),
});

const defaultFilterValues: Partial<AnalyticsFilterSchema> = {
  basis: undefined,
  expired: false,
  retroactive: false,
};

type AnalyticsFilterSchema = z.infer<typeof analyticsFilterSchema>;

interface AnalyticsFilterProps<TData> {
  className?: string;
}

export function AnalyticsFilterForm<TData>({
  className,
}: AnalyticsFilterProps<TData>) {
  const form = useForm<AnalyticsFilterSchema>({
    resolver: zodResolver(analyticsFilterSchema),
    defaultValues: defaultFilterValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: AnalyticsFilterSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  function handleReset() {
    closeRef.current?.click();
  }

  const basisItems = [
    {
      value: "issued",
      label: "Issued",
      description:
        "Shows all credentials created within the defined time period and related activity.",
    },
    {
      value: "activity",
      label: "Activity",
      description:
        "Shows all activity that occurred within the defined time period.",
    },
  ];

  const expiredBadgesItems = [
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

  return (
    <div className={className}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="collections"
            label="Collections "
            placeholder="Select collections"
            items={[]}
          />
          <CustomSelect
            form={form}
            name="templates"
            label="Templates "
            placeholder="Select templates"
            items={[]}
          />

          <Separator className="mt-2 mb-6" />
          <div className="text-sm font-medium mb-2">Basis</div>
          <CustomRadioGroupWithDescription
            classNameRadio="flex-col space-x-0 space-y-1"
            form={form}
            name="basis"
            items={basisItems}
          />

          <Separator className="mt-2 mb-6" />
          <div className="text-sm font-medium">Expired</div>
          <div className="text-sm mb-4">
            Make your collection public for earners, or private for
            administrative purposes.
          </div>
          <CustomCheckbox
            form={form}
            name="expired"
            label="Include expired credentials"
          />

          <Separator className="mt-2 mb-6" />
          <div className="text-sm font-medium">Retroactive</div>
          <div className="text-sm mb-4">
            Credentials that are issued on our platform more than 30 days after
            they were earned are considered Retroactive Credentials.
          </div>
          <CustomCheckbox
            form={form}
            name="retroactive"
            label="Include retroactive credentials"
          />

          <Separator className="mt-2 mb-6" />
          <CustomSelect
            form={form}
            name="organizations"
            label="Organizations"
            placeholder="Select organizations"
            items={[]}
          />

          <div className="mt-2 space-x-2 ml-auto">
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
