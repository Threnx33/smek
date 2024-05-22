import { CustomInput } from "@/components/reusables/customInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordResetFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type PasswordResetFormValues = z.infer<typeof passwordResetFormSchema>;

interface PasswordResetFormProps extends HTMLAttributes<HTMLDivElement> {}

export function PasswordResetForm({
  className,
  ...props
}: PasswordResetFormProps) {
  const form = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: PasswordResetFormValues) {
    setIsLoading(true);

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
            name="email"
            label="Email address"
            type="text"
          />
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "<Loading Icon>" : "Send Instructions"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
