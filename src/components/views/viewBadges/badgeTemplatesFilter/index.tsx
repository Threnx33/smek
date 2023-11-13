import { HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Extend the schema for the registration form
const badgeTemplatesFilterSchema = z.object({
  state: z.enum(["Published", "Draft"]),
  visibility: z.enum(["Private", "Public"]),
  dateCreatedFrom: z.date(),
  dateCreatedTo: z.date(),
});

type BadgeTemplatesFilterSchema = z.infer<typeof badgeTemplatesFilterSchema>;

interface BadgeTemplatesFilterProps extends HTMLAttributes<HTMLDivElement> {}

const defaultFilterValues: Partial<BadgeTemplatesFilterSchema> = {
  state: "Published",
  visibility: undefined,
  dateCreatedFrom: undefined,
  dateCreatedTo: undefined,
};

export function BadgeTemplatesFilterForm({
  className,
  ...props
}: BadgeTemplatesFilterProps) {
  const form = useForm<BadgeTemplatesFilterSchema>({
    resolver: zodResolver(badgeTemplatesFilterSchema),
    defaultValues: defaultFilterValues,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: BadgeTemplatesFilterSchema) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  <span>Template state</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue="Published"
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Published" />
                      </FormControl>
                      <FormLabel className="font-normal">Published</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Draft" />
                      </FormControl>
                      <FormLabel className="font-normal">Draft</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  <span>Template visibility</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Private" />
                      </FormControl>
                      <FormLabel className="font-normal">Private</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Public" />
                      </FormControl>
                      <FormLabel className="font-normal">Public</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  Last name<span className="text-sm text-cRed">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateCreatedFrom"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  Email address<span className="text-sm text-cRed">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateCreatedTo"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  Password<span className="text-sm text-cRed">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </form>
      </Form>
    </div>
  );
}
