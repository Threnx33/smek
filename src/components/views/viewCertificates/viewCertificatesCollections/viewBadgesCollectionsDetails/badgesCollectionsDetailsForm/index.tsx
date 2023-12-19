import { HTMLAttributes, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { TEMPLATES } from "../../../viewCertificatesTemplates/data";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Separator } from "@/components/ui/separator";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { Button } from "@/components/ui/button";

const TEMPLATES_NAMES = TEMPLATES.map((t) => t.templateName);

const badgeCollectionsDetailsSchema = z.object({
  collectionName: z.string().min(1),
  collectionImage: z
    .string()
    .refine((value) => TEMPLATES_NAMES.includes(value), "Invalid image."),
  description: z.string(),
  visibility: z.enum(["Private", "Public"]),
  templates: z.array(z.string()),
});

const defaultCollectionValues: Partial<BadgeCollectionsDetailsSchema> = {
  collectionName: "",
  collectionImage: "",
  description: "",
  visibility: "Private",
  templates: [],
};

type BadgeCollectionsDetailsSchema = z.infer<
  typeof badgeCollectionsDetailsSchema
>;

interface BadgeCollectionsDetailsProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgesCollectionsDetailsForm({
  className,
  ...props
}: BadgeCollectionsDetailsProps) {
  const form = useForm<BadgeCollectionsDetailsSchema>({
    resolver: zodResolver(badgeCollectionsDetailsSchema),
    defaultValues: defaultCollectionValues,
  });

  async function onSubmit(data: BadgeCollectionsDetailsSchema) {
    console.log(data);
  }

  const visibilityItems = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-8/12 mb-6">
            <CustomInput
              form={form}
              name="collectionName"
              label="Collection Name"
              type="text"
            />
            <CustomSelect
              form={form}
              name="collectionImage"
              label="Collection Image"
              placeholder="Select image"
              items={TEMPLATES_NAMES}
            />
            <CustomTextarea
              form={form}
              name="description"
              label="Description"
            />

            <Separator className="mb-6" />
            <div className=" font-bold">Visibility</div>
            <div className="text-sm mb-4">
              Make your collection public for earners, or private for
              administrative purposes.
            </div>
            <CustomRadioGroup
              className="mb-6"
              classNameRadio="flex flex-col space-y-1"
              form={form}
              name="visibility"
              items={visibilityItems}
              defaultValue="private"
            />

            <Separator className="mb-6" />
            <div className=" font-bold">Templates</div>
            <div className="text-sm mb-4">
              Select the templates you would like to appear in this collection.
            </div>
            <CustomSelect
              form={form}
              name="templates"
              label="Templates"
              placeholder="Select templates"
              items={TEMPLATES_NAMES}
            />
            <div className="flex justify-center text-muted-foreground">
              No templates selected yet
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-2 ">
            <Button variant="outline">Delete Collection</Button>
            <Button>Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
