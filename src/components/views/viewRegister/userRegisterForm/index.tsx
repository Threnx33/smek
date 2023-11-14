import { HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/components/constants";

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
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  First name<span className="text-sm text-cRed">*</span>
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
            name="lastName"
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
            name="email"
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
            name="password"
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
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>
                  Country<span className="text-sm text-cRed">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem
                        className="cursor-pointer"
                        value={country}
                        key={country}
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="news"
            render={({ field }) => (
              <FormItem className="flex flex-row space-x-2 items-center mb-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  Send me occasional news and update on professional growth
                  opportunities
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className=" mb-4">
                <div className="flex flex-row space-x-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    I agree to the Terms of Service and Privacy Policy
                    <span className="text-sm text-cRed">*</span>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-6" disabled={isLoading}>
            {isLoading && "<Loading Icon>"} Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
