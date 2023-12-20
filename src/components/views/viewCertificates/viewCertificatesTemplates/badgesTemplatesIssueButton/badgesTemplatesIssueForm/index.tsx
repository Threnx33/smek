import { HTMLAttributes, useEffect, useRef, useState } from "react";
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
} from "@/components/constants/values";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomCalendar } from "@/components/reusables/customCalendar";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { Button } from "@/components/ui/button";
import { BadgesTemplatesIssueFormUpload } from "./badgesTemplatesIssueFormUpload";
import { BadgesTemplatesIssueFormText } from "./badgesTemplatesIssueFormText";
import { BadgesTemplatesIssueFormUrl } from "./badgesTemplatesIssueFormUrl";
import { BadgesTemplatesIssueFormId } from "./badgesTemplatesIssueFormId";
import { SheetClose } from "@/components/ui/sheet";

const badgeTemplatesIssueSchema = z.object({
  issuerProfile: z.string(),
  certificate: z.string(),
  firstName: z.string().min(1, "Required."),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Rquired."),
  dateIssued: z.date(),
  expirationType: z.enum(["noExpiration", "expiresOn"]),
  expirationDate: z.date().optional(),
  emailNotifications: z.boolean().optional(),
  emailLanguage: z
    .string()
    .refine((value) => EMAIL_LANGUAGES.includes(value), "Invalid selection."),
  issuerEarnerId: z.string().min(1, "Required."),
  groupTag: z.string().min(1, "Required."),
  countryTeritory: z
    .string()
    .refine((value) => COUNTRIES.includes(value), "Invalid selection."),
  stateProvince: z.string(),

  urlTitle: z.string().optional(),
  urlURL: z.string(),
  urlDescription: z.string(),

  textTitle: z.string(),
  textDescription: z.string(),

  idTitle: z.string(),
  idID: z.string(),
});

const defaultIssueValues: Partial<BadgeTemplatesIssueSchema> = {
  expirationType: "noExpiration",
  firstName: "",
  middleName: "",
  lastName: "",
  issuerEarnerId: "",
  groupTag: "",

  urlTitle: "",
  urlURL: "",
  urlDescription: "",

  textTitle: "",
  textDescription: "",

  idTitle: "",
  idID: "",
};

export type BadgeTemplatesIssueSchema = z.infer<
  typeof badgeTemplatesIssueSchema
>;

type BadgesTemplatesIssueFormProps = {
  issuer?: string;
  templateName?: string;
};

export function BadgesTemplatesIssueForm({
  issuer,
  templateName,
}: BadgesTemplatesIssueFormProps) {
  const form = useForm<BadgeTemplatesIssueSchema>({
    resolver: zodResolver(badgeTemplatesIssueSchema),
    defaultValues: defaultIssueValues,
  });
  const [openedCard, setOpenedCard] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  const expirationTypeItems = [
    { value: "noExpiration", label: "No expiration" },
    { value: "expiresOn", label: "Expires on" },
  ];

  const expirationTypeWatch = form.watch("expirationType", "noExpiration");

  async function onSubmit(data: BadgeTemplatesIssueSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  useEffect(() => {
    if (issuer) form.setValue("issuerProfile", issuer);
    if (templateName) form.setValue("certificate", templateName);
  }, []);

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          {!issuer && (
            <CustomSelect
              form={form}
              name="issuerProfile"
              label="Issuer Profile"
              placeholder="Select issuer profile"
              items={ISSUER_PROFILES}
            />
          )}
          {!templateName && (
            <CustomSelect
              form={form}
              name="certificate"
              label="Certificate"
              placeholder="Select certificate to issue"
              items={BADGES}
            />
          )}

          {!issuer && <Separator className="mt-2 mb-6" />}
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

          <Separator className="mt-2 mb-6" />
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

          <Separator className="mt-2 mb-6" />

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

          <Separator className="mt-2 mb-6" />
          <div className="text-sm font-bold mb-4">
            <span>Add evidence</span>
          </div>

          <div className={`flex space-x-2 ${!openedCard ? "mb-6" : "mb-4"}`}>
            <Button
              type="button"
              onClick={() => setOpenedCard("Url")}
              variant="outline"
              className="p-3"
            >
              <img
                className="h-5 w-5 mr-0.5"
                src="/link.svg"
                alt="exportIcon"
              />
              URL
            </Button>
            <Button
              type="button"
              onClick={() => setOpenedCard("Text")}
              variant="outline"
              className="p-3"
            >
              <img className="h-5 w-5 mr-0.5" src="/text.svg" alt="textIcon" />
              Text
            </Button>
            <Button
              type="button"
              onClick={() => setOpenedCard("Upload")}
              variant="outline"
              className="p-3"
            >
              <img
                className="h-5 w-5 mr-0.5"
                src="/export.svg"
                alt="exportIcon"
              />
              Upload
            </Button>
            <Button
              type="button"
              onClick={() => setOpenedCard("Id")}
              variant="outline"
              className="p-2"
            >
              <img
                className="h-5 w-5 mr-0.5"
                src="/personalCard.svg"
                alt="PersonalCardIcon"
              />
              ID
            </Button>
            <Button
              type="button"
              onClick={() => setOpenedCard("...")}
              variant="outline"
              className="p-2.5"
            >
              <img className="h-5 w-5 mr-0.5" src="/dots.svg" alt="dotsIcon" />
            </Button>
          </div>

          {openedCard === "Url" && (
            <BadgesTemplatesIssueFormUrl
              form={form}
              setOpenedCard={setOpenedCard}
            />
          )}
          {openedCard === "Text" && (
            <BadgesTemplatesIssueFormText
              form={form}
              setOpenedCard={setOpenedCard}
            />
          )}
          {openedCard === "Upload" && (
            <BadgesTemplatesIssueFormUpload
              form={form}
              setOpenedCard={setOpenedCard}
            />
          )}
          {openedCard === "Id" && (
            <BadgesTemplatesIssueFormId
              form={form}
              setOpenedCard={setOpenedCard}
            />
          )}

          <div className="ml-auto space-x-2">
            <Button
              type="button"
              onClick={() => closeRef.current?.click()}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Issue</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
