import { CustomInput } from "@/components/reusables/customInput";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const accountFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters." })
    .max(30, { message: "Password is too long." }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof accountFormSchema>;

interface UserLoginFormProps extends HTMLAttributes<HTMLDivElement> {}

const defaultValues: Partial<LoginFormValues> = {
  email: "",
  password: "",
  rememberMe: true,
};

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const [isLoadingEmail, setIsLoadingEmail] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);

  async function onSubmit(data: LoginFormValues) {
    setIsLoadingEmail(true);

    setTimeout(() => {
      setIsLoadingEmail(false);
    }, 3000);
  }

  function handleGoogleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoadingGoogle(true);

    setTimeout(() => {
      setIsLoadingGoogle(false);
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
          <CustomInput
            form={form}
            name="password"
            label="Password"
            type="password"
          />
          <div className="flex items-center space-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-xs font-medium">
                    Rembember me
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link to="/password-reset" className="ml-auto text-right">
              <TextMainWrap className="text-xs font-medium ">
                Forgot your password?
              </TextMainWrap>
            </Link>
          </div>
          <Button
            type="submit"
            className=" w-full mt-6"
            disabled={isLoadingEmail}
          >
            {isLoadingEmail && "<Loading Icon>"}
            Sign In
          </Button>
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs ">
              <span className="bg-background px-2 text-xs font-medium">Or</span>
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            className="w-full "
            onClick={handleGoogleLogin}
          >
            {isLoadingGoogle ? (
              "<Loading icon>"
            ) : (
              <img
                src="https://freesvg.org/img/1534129544.png"
                alt="Google Icon"
                className="mr-2 h-5 w-5"
              />
            )}{" "}
            Continue with Google
          </Button>
        </div>
      </Form>
    </div>
  );
}
