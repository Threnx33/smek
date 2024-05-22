import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomRadioGroupWithDescription } from "@/components/reusables/customRadioGroupWithDescription";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BadgesTemplateWrap } from "@/pages/badges/badgesTemplates/badgesTemplateWrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { COLLECTIONS } from "../../badgesCollections/data";
import { BadgesTemplatesSettingsCustomSelect } from "./badgesTemplatesSettingsCustomSelect";

const SettingsSection = ({
  titleText,
  descriptionText,
  children,
}: {
  titleText: string;
  descriptionText: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col md:flex-row">
    <div className="mb-4 mr-6">
      <div className="text-sm font-semibold">{titleText}</div>
      <div className="text-sm">{descriptionText}</div>
    </div>
    <div className="flex-1 md:ml-auto md:w-[28rem] md:flex-none xl:w-[34rem]">
      {children}
    </div>
  </div>
);

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

  async function onSubmit(data: BadgesTemplateSettingsSchema) {}

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
      description: "Hidden from organization profile;\nnot searchable.",
    },
    {
      value: "public",
      label: "Public",
      description: "Visible on organization profile;\nsearchable.",
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
            <CustomRadioGroupWithDescription
              form={form}
              name="templateVisibility"
              items={visibilityItems}
              defaultValue="private"
            />
          </SettingsSection>

          <Separator className="mb-6 mt-2" />
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
                      className="mb-2 mr-2 inline-flex items-center"
                    >
                      <span className="flex select-none space-x-2 rounded-3xl border px-4 py-2 text-sm font-medium ">
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
                  <div className="mb-4 text-sm text-cMediumGrey">
                    This template has not been added to any collections.
                  </div>
                )}
              </div>
            </div>
          </SettingsSection>

          <Separator className="mb-6 mt-2" />
          <SettingsSection
            titleText="Collections"
            descriptionText="Add this template to an existing collection."
          >
            <Input
              id="skills"
              className="mb-4 border"
              type="text"
              placeholder="Recommendations"
              onKeyDown={(e) => handleRecommendationEnter(e)}
            />
            <div className={`${!!recommendations.length && "mb-2"}`}>
              {!!recommendations.length ? (
                recommendations.map((item) => (
                  <div
                    key={item}
                    className="mb-2 mr-2 inline-flex items-center"
                  >
                    <span className="flex select-none space-x-2 rounded-3xl border px-4 py-2 text-sm font-medium ">
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
                <div className="mb-4 text-sm text-cMediumGrey">
                  No recommendations have been added to this template.
                </div>
              )}
            </div>
          </SettingsSection>

          <Separator className="mb-6 mt-2" />
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

          <Separator className="mb-6 mt-2" />
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

          <Separator className="mb-6 mt-2" />
          <SettingsSection
            titleText="Expiration Notifications"
            descriptionText="Send message to your earners who have badges expiring in 60 days."
          >
            <CustomRadioGroupWithDescription
              form={form}
              name="expirationNotifications"
              items={yesNoItems}
              defaultValue="yes"
            />
          </SettingsSection>

          <Separator className="mb-6 mt-2" />
          <SettingsSection
            titleText="Duplicates"
            descriptionText="Allow earners to receive multiple credentials from this template."
          >
            <CustomRadioGroupWithDescription
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
