import { HTMLAttributes } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { TEMPLATES } from "../../../viewBadgesTemplates/data";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Separator } from "@/components/ui/separator";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { Button } from "@/components/ui/button";

const TEMPLATES_NAMES = TEMPLATES.map((t) => t.templateName);

const badgeCollectionsCreateSchema = z.object({
  collectionName: z.string().min(1),
  collectionImage: z
    .string()
    .refine((value) => TEMPLATES_NAMES.includes(value), "Invalid image."),
  description: z.string(),
  visibility: z.enum(["Private", "Public"]),
});

const defaultRecommendationValues: Partial<BadgeCollectionsCreateSchema> = {};

type BadgeCollectionsCreateSchema = z.infer<
  typeof badgeCollectionsCreateSchema
>;

interface BadgeCollectionsCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgesCollectionsCreateForm({
  className,
  ...props
}: BadgeCollectionsCreateProps) {
  const form = useForm<BadgeCollectionsCreateSchema>({
    resolver: zodResolver(badgeCollectionsCreateSchema),
    defaultValues: defaultRecommendationValues,
  });

  async function onSubmit(data: BadgeCollectionsCreateSchema) {
    console.log(data);
  }

  const visibilityItems = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <CustomTextarea form={form} name="description" label="Description" />

          <Separator className="my-6" />
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

          <Separator className="my-6" />
          <div className=" font-bold">Templates</div>
          <div className="text-sm mb-4">
            Select the templates you would like to appear in this collection.
          </div>
          <Button type="button" className="mb-6" variant="outline">
            Select Templates
          </Button>
        </form>
      </Form>
    </div>
  );
}
