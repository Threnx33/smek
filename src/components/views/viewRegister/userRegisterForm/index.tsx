import { HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { COUNTRIES } from "@/components/constants";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { TextMainWrapper } from "@/components/reusables/textMainWrapper";

// Extend the schema for the registration form
const registerFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  country: z.string().refine((value) => value, "Invalid country selection."),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters.")
    .max(30, "Password is too long."),
  news: z.boolean().optional(),
  terms: z
    .boolean()
    .refine((val) => val, "You must accept the Terms of Service."),
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

interface UserRegisterFormProps extends HTMLAttributes<HTMLDivElement> {}

const defaultRegisterValues: Partial<RegisterFormValues> = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  password: "",
  news: false,
  terms: false,
};

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: defaultRegisterValues,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: RegisterFormValues) {
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
          <CustomInput
            form={form}
            name="firstName"
            label="First name"
            type="text"
            mandatory
          />
          <CustomInput
            form={form}
            name="lastName"
            label="Last name"
            type="text"
            mandatory
          />
          <CustomInput
            form={form}
            name="email"
            label="Email address"
            type="text"
            mandatory
          />
          <CustomInput
            form={form}
            name="password"
            label="Password"
            type="password"
            mandatory
          />
          <CustomSelect
            form={form}
            name="country"
            label="Country"
            placeholder="Select country"
            items={COUNTRIES}
            mandatory
          />

          <CustomCheckbox
            form={form}
            name="news"
            label="Send me occasional news and update on professional growth
            opportunities"
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row space-x-2 items-center mb-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <span className="leading-[0.9rem]">
                  <FormLabel>I agree to the </FormLabel>
                  <TextMainWrapper className="cursor-pointer">
                    Terms of Service
                  </TextMainWrapper>
                  <FormLabel> and </FormLabel>
                  <TextMainWrapper className="cursor-pointer">
                    Privacy Policy
                  </TextMainWrapper>
                  <span className="text-cRed">*</span>
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading && "<Loading Icon>"} Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
