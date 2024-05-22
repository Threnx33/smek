import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  CERTIFICATES,
  RECOMMENDATIONS_TYPES,
} from "@/components/constants/names";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const baseSchema = z.object({
  type: z
    .string()
    .refine((value) => RECOMMENDATIONS_TYPES.includes(value), "Invalid type."),
});

const certificateSchema = baseSchema.extend({
  certificate: z
    .string()
    .refine((value) => CERTIFICATES.includes(value), "Invalid certificate."),
});

const nameUrlSchema = baseSchema.extend({
  name: z.string().min(1, "Insert name."),
  url: z.string().min(1, "Insert URL."),
  description: z.string().optional(),
});

const badgeRecommendationsCreateSchema = z.union([
  certificateSchema,
  nameUrlSchema,
]);

const defaultRecommendationValues: Partial<BadgeRecommendationsCreateSchema> = {
  name: "",
  url: "",
  description: "",
};

type BadgeRecommendationsCreateSchema = z.infer<
  typeof badgeRecommendationsCreateSchema
>;

interface BadgeRecommendationsCreateProps
  extends HTMLAttributes<HTMLDivElement> {}

export function BadgesRecommendationsCreateForm({
  className,
  ...props
}: BadgeRecommendationsCreateProps) {
  const form = useForm<BadgeRecommendationsCreateSchema>({
    resolver: zodResolver(badgeRecommendationsCreateSchema),
    defaultValues: defaultRecommendationValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  const typeWatch = form.watch("type");

  async function onSubmit(data: BadgeRecommendationsCreateSchema) {
    closeRef.current?.click();
  }

  const renderContent = () => {
    if (typeWatch === undefined) {
      return null;
    } else if (typeWatch === "Certificate") {
      return (
        <CustomSelect
          form={form}
          name="certificate"
          label="Recommended Certificate"
          placeholder="Select certificate"
          items={CERTIFICATES}
        />
      );
    } else {
      return (
        <div>
          <CustomInput form={form} name="name" label="Name" type="text" />
          <CustomInput
            form={form}
            name="url"
            label="URL"
            type="text"
            placeholder="http://"
          />
          <CustomTextarea form={form} name="description" label="Description" />
        </div>
      );
    }
  };

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="type"
            label="Type"
            placeholder="Select type"
            items={RECOMMENDATIONS_TYPES}
            onValueChangeExtra={form.clearErrors}
          />

          {renderContent()}

          <div className="ml-auto space-x-2">
            <Button
              type="button"
              onClick={() => closeRef.current?.click()}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
