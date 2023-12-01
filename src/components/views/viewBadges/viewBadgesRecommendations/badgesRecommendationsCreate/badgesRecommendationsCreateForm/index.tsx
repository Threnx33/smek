import { HTMLAttributes, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import {
  CERTIFICATES,
  RECOMMENDATIONS_TYPES,
} from "@/components/constants/values";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const badgeRecommendationsCreateSchema = z
  .object({
    type: z
      .string()
      .refine(
        (value) => RECOMMENDATIONS_TYPES.includes(value),
        "Invalid type."
      ),
    certificate: z
      .string()
      .refine((value) => CERTIFICATES.includes(value), "Invalid certificate.")
      .optional(),
    name: z.string().min(1, "Insert name.").optional(),
    url: z.string().min(1, "Insert URL.").optional(),
    description: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === "Cetificate") {
        return data.certificate !== undefined; // Certificate must not be undefined for type 'A'
      } else {
        return data.name !== undefined && data.url !== undefined; // Name and URL must not be undefined for type 'B'
      }
    },
    {
      message: "Validation error based on type.", // Custom error message
      path: [], // Specify the path of the error, if needed
    }
  );

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
    console.log(data);
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
            // onValueChangeExtra={form.clearErrors}
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
