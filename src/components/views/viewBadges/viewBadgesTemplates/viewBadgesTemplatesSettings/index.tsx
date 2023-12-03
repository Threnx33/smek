import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { BadgesTemplateWrap } from "@/components/reusables/badgesTemplateWrap";
import { Separator } from "@/components/ui/separator";
import { COLLECTIONS } from "../../viewBadgesCollections/data";
import { CustomSelect } from "@/components/reusables/customSelect";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { BadgesTemplatesSettingsCustomSelect } from "./badgesTemplatesSettingsCustomSelect";
import { BadgesTemplatesSettingsCustomRadioGroup } from "./badgesTemplatesSettingsCustomRadioGroup";

const badgesTemplateSettingsSchema = z.object({
  expiredBadges: z.string(),
  templateVisibility: z.string(),
  collections: z.array(z.string()),
  recommendations: z.array(z.string()),
  publishPlusDownload: z.boolean(),
  templateDefaultExpiration: z.number(),
  expirationNotifications: z.enum(["Yes", "No"]),
  duplicates: z.enum(["Yes", "No"]),
});

const defaultRecommendationValues: Partial<BadgesTemplateSettingsSchema> = {
  expiredBadges: "all",
  templateVisibility: "private",
  collections: [],
  recommendations: [],
  publishPlusDownload: true,
  templateDefaultExpiration: 0,
  expirationNotifications: "Yes",
  duplicates: "Yes",
};

type BadgesTemplateSettingsSchema = z.infer<
  typeof badgesTemplateSettingsSchema
>;

export function BadgesTemplateSettings() {
  const form = useForm<BadgesTemplateSettingsSchema>({
    resolver: zodResolver(badgesTemplateSettingsSchema),
    defaultValues: defaultRecommendationValues,
  });

  const [collections, setCollections] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "collections") {
        const updatedCollections = (value.collections || []).filter(
          (item): item is string => !!item
        );
        setCollections(updatedCollections);
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch]);

  async function onSubmit(data: BadgesTemplateSettingsSchema) {
    console.log(data);
  }

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

  const visibilityItems = [
    {
      value: "private",
      label: "Private",
      // description: "Hidden from organization profile;\nnot searchable.",
    },
    {
      value: "public",
      label: "Public",
      // description: "Visible on organization profile;\nsearchable.",
    },
  ];

  const templateDefaultExpirationItems = [
    {
      value: "0",
      label: "None (default)",
    },
    {
      value: "1",
      label: "1 Year",
    },
    {
      value: "2",
      label: "2 Years",
    },
    {
      value: "3",
      label: "3 Years",
    },
    {
      value: "4",
      label: "4 Years",
    },
    {
      value: "5",
      label: "5 Years",
    },
  ];

  const yesNoItems = [
    {
      value: "yes",
      label: "Yes",
    },
    {
      value: "no",
      label: "No",
    },
  ];

  const SettingsSection = ({
    titleText,
    descriptionText,
    children,
  }: {
    titleText: string;
    descriptionText: string;
    children: React.ReactNode;
  }) => (
    <div className="flex ">
      <div className="mb-4">
        <div className="text-sm font-semibold">{titleText}</div>
        <div className="text-sm">{descriptionText}</div>
      </div>
      <div className="ml-auto w-[34rem]">{children}</div>
    </div>
  );

  const handleRecommendationEnter = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setRecommendations([...recommendations, e.currentTarget.value]);
      e.currentTarget.value = "";
    }
  };

  return (
    <BadgesTemplateWrap>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SettingsSection
            titleText="Template Visibility"
            descriptionText="Determine view and searchability of this credential."
          >
            <CustomRadioGroup
              className="mb-6"
              classNameRadio="flex flex-col space-y-1"
              form={form}
              name="expiredBadges"
              label="Expired Badges"
              items={expiredBadgesItems}
              defaultValue="all"
            />

            {/* <BadgesTemplatesSettingsCustomRadioGroup
              form={form}
              name="templateVisibility"
              items={visibilityItems}
              defaultValue="private"
            /> */}
          </SettingsSection>

          <Separator className="mt-2 mb-6" />
          <SettingsSection
            titleText="Collections"
            descriptionText="Add this template to an existing collection."
          >
            <div className="flex flex-col">
              <BadgesTemplatesSettingsCustomSelect
                form={form}
                name="collections"
                placeholder="Pick a collection"
                items={COLLECTIONS.map((c) => c.collection)}
              />
              <div className={`${!!collections.length && "mb-2"}`}>
                {!!collections.length ? (
                  collections.map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center mr-2 mb-2"
                    >
                      <span className="border px-4 py-2 space-x-2 select-none text-sm font-medium flex rounded-3xl ">
                        <span>{item}</span>
                        <img
                          className="cursor-pointer"
                          onClick={() =>
                            form.setValue(
                              "collections",
                              form
                                .getValues("collections")
                                .filter(
                                  (collectionItem) => collectionItem !== item
                                )
                            )
                          }
                          src="/closeCircle.svg"
                          alt="CloseCircleIcon"
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-cMediumGrey mb-4">
                    This template has not been added to any collections.
                  </div>
                )}
              </div>
            </div>
          </SettingsSection>

          <Separator className="mt-2 mb-6" />
          <SettingsSection
            titleText="Collections"
            descriptionText="Add this template to an existing collection."
          >
            <Input
              id="skills"
              className="border mb-4"
              type="text"
              placeholder="Recommendations"
              onKeyDown={(e) => handleRecommendationEnter(e)}
            />
            <div className={`${!!recommendations.length && "mb-2"}`}>
              {!!recommendations.length ? (
                recommendations.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center mr-2 mb-2"
                  >
                    <span className="border px-4 py-2 space-x-2 select-none text-sm font-medium flex rounded-3xl ">
                      <span>{item}</span>
                      <img
                        className="cursor-pointer"
                        onClick={() =>
                          setRecommendations(
                            recommendations.filter((x) => x !== item)
                          )
                        }
                        src="/closeCircle.svg"
                        alt="CloseCircleIcon"
                      />
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-cMediumGrey mb-4">
                  No recommendations have been added to this template.
                </div>
              )}
            </div>
          </SettingsSection>

          <Separator className="mt-2 mb-6" />
          <SettingsSection
            titleText="Publish + Download"
            descriptionText="Allow earners to manage their credential."
          >
            <CustomCheckbox
              classNameLabel="font-medium"
              form={form}
              name="publishPlusDownload"
              label="Print (simple)"
            />
          </SettingsSection>

          <Separator className="mt-2 mb-6" />
          <SettingsSection
            titleText="Template Default Expiration"
            descriptionText="Set a default expiration for badges issued from this template."
          >
            <Select defaultValue={templateDefaultExpirationItems[0].value}>
              <SelectTrigger id="templateDefaultExpiration">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {templateDefaultExpirationItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SettingsSection>

          <Separator className="mt-2 mb-6" />
          <SettingsSection
            titleText="Expiration Notifications"
            descriptionText="Send message to your earners who have badges expiring in 60 days."
          >
            <BadgesTemplatesSettingsCustomRadioGroup
              form={form}
              name="expirationNotifications"
              items={yesNoItems}
              defaultValue="yes"
            />
          </SettingsSection>
        </form>
      </Form>
    </BadgesTemplateWrap>
  );
}
