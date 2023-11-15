import { HTMLAttributes } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import {
  BADGES,
  COUNTRIES,
  EMAIL_LANGUAGES,
  ISSUER_PROFILES,
} from "@/components/constants";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomCalendar } from "@/components/reusables/customCalendar";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";

const badgeTemplatesIssueSchema = z.object({
  issuerProfile: z.string(),
  badge: z.string(),
  firstName: z.string().min(1, "First name is required."),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required."),
  dateIssued: z.date(),
  expirationType: z.enum(["noExpiration", "expiresOn"]),
  expirationDate: z.date().optional(),
  emailNotifications: z.boolean().optional(),
  emailLanguage: z.string(),
  issuerEarnerId: z.string(),
  groupTag: z.string(),
  countryTeritory: z.string(),
  stateProvince: z.string(),
});

const defaultIssueValues: Partial<BadgeTemplatesIssueSchema> = {};

type BadgeTemplatesIssueSchema = z.infer<typeof badgeTemplatesIssueSchema>;

interface BadgeTemplatesIssueProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgeTemplatesIssueForm({
  className,
  ...props
}: BadgeTemplatesIssueProps) {
  const form = useForm<BadgeTemplatesIssueSchema>({
    resolver: zodResolver(badgeTemplatesIssueSchema),
    defaultValues: defaultIssueValues,
  });

  const expirationTypeItems = [
    { value: "noExpiration", label: "No expiration" },
    { value: "expiresOn", label: "Expires on" },
  ];

  const expirationTypeWatch = form.watch("expirationType", "noExpiration");

  async function onSubmit(data: BadgeTemplatesIssueSchema) {
    console.log(data);
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="issuerProfile"
            label="Issuer Profile"
            placeholder="Select issuer profile"
            items={ISSUER_PROFILES}
          />
          <CustomSelect
            form={form}
            name="badge"
            label="Badge"
            placeholder="Select badge to issue"
            items={BADGES}
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold flex justify-between mb-6">
            <span>Earner Information</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <CustomInput
            form={form}
            name="firstName"
            label="First Name"
            type="text"
          />
          <CustomInput
            form={form}
            name="middleName"
            label="Middle Name"
            type="text"
          />
          <CustomInput
            form={form}
            name="lastName"
            label="Last Name"
            type="text"
          />

          <CustomCalendar
            form={form}
            name="dateIssued"
            label="Date issued"
            disabledFunction={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />

          <CustomRadioGroup
            form={form}
            name="expirationType"
            label="Expiration"
            items={expirationTypeItems}
            defaultValue="noExpiration"
          />

          {expirationTypeWatch === "expiresOn" && (
            <CustomCalendar
              form={form}
              name="expirationDate"
              label="Expiration Date"
            />
          )}

          <Separator className="my-6" />
          <div className="text-sm font-bold flex justify-between mb-4">
            <span>Badge Options</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <CustomCheckbox
            form={form}
            name="emailNotifications"
            title="Email Notifications"
            label="Suppress Skillquiver email notifications"
          />

          <Separator className="my-6" />

          <CustomSelect
            form={form}
            name="emailLanguage"
            label="Email Language"
            placeholder="Select language"
            items={EMAIL_LANGUAGES}
          />

          <CustomInput
            form={form}
            name="issuerEarnerId"
            label="Issuer Earner ID"
            type="text"
          />
          <CustomInput
            form={form}
            name="groupTag"
            label="Group Tag"
            type="text"
          />

          <CustomSelect
            form={form}
            name="countryTeritory"
            label="Country / Teritory"
            placeholder="Select country"
            items={COUNTRIES}
          />

          <CustomInput
            form={form}
            name="stateProvince"
            label="State / Province"
            type="text"
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold mb-4">
            <span>Add evidence</span>
          </div>
        </form>
      </Form>
    </div>
  );
}
