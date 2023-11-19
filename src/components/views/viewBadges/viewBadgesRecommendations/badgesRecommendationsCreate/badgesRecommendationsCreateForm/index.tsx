import { HTMLAttributes } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CERTIFICATES, RECOMMENDATIONS_TYPES } from "@/components/constants";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";

const badgeRecommendationsCreateSchema = z.object({
  type: z
    .string()
    .refine((value) => RECOMMENDATIONS_TYPES.includes(value), "Invalid type."),
  certificate: z
    .string()
    .refine((value) => CERTIFICATES.includes(value), "Invalid certificate.")
    .optional(),
  name: z.string().min(1, "Insert name."),
  url: z.string().min(1, "Insert URL."),
  description: z.string(),
});

const defaultRecommendationValues: Partial<BadgeRecommendationsCreateSchema> =
  {};

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

  const typeWatch = form.watch("type");

  async function onSubmit(data: BadgeRecommendationsCreateSchema) {
    console.log(data);
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
          placeholder="Choose certificate"
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="type"
            label="Type"
            placeholder="Choose type"
            items={RECOMMENDATIONS_TYPES}
          />

          {renderContent()}
        </form>
      </Form>
    </div>
  );
}
