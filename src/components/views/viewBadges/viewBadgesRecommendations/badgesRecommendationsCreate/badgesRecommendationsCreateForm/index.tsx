import { HTMLAttributes } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { RECOMMENDATIONS_TYPES } from "@/components/constants";
import { CustomSelect } from "@/components/reusables/customSelect";

const badgeRecommendationsCreateSchema = z.object({
  type: z
    .string()
    .refine(
      (value) => RECOMMENDATIONS_TYPES.includes(value),
      "Invalid recommendation selection."
    ),
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
        </form>
      </Form>
    </div>
  );
}
