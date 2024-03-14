import { CustomInput } from "@/components/reusables/customInput";
import TitleHeaderButtonCard from "@/components/reusables/titleHeaderButtonCard";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PreferencesSection = ({
  titleText,
  descriptionText,
  children,
}: {
  titleText: string;
  descriptionText: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8 flex flex-col md:flex-row">
    <div className="mr-6">
      <div className="text-sm font-semibold">{titleText}</div>
      <div className="text-sm">{descriptionText}</div>
    </div>
    <div className="flex-1 md:ml-auto md:w-[28rem] md:flex-none xl:w-[34rem]">
      {children}
    </div>
  </div>
);

const preferencesFormSchema = z.object({
  name: z.string(),
  email: z.string(),
});

const defaultPreferenceValues: Partial<PreferencesFormSchema> = {
  name: "Theo Edwards",
  email: "theoedwards@gmail.com",
};

type PreferencesFormSchema = z.infer<typeof preferencesFormSchema>;

export function PreferencesForm() {
  const form = useForm<PreferencesFormSchema>({
    resolver: zodResolver(preferencesFormSchema),
    defaultValues: defaultPreferenceValues,
  });

  async function onSubmit(data: PreferencesFormSchema) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <PreferencesSection
          titleText="Account Image"
          descriptionText="Your account email is used in emails and for display in Skillquiver Certs, it is not public"
        >
          <img
            src="/avatar.png"
            alt="AvatarIcon"
            className="ml-auto h-16 w-16 rounded-full"
          />
        </PreferencesSection>

        <Separator className="mb-8" />
        <PreferencesSection
          titleText="Account Name"
          descriptionText="Your account name is used in emails and for display in Skillquiver Certs, it is not public"
        >
          <CustomInput form={form} name="name" type="text" />
        </PreferencesSection>

        <Separator className="mb-8" />
        <PreferencesSection
          titleText="Account Email"
          descriptionText="This is used for sign in and communication, to change it please contact support."
        >
          <CustomInput form={form} name="email" type="text" />
        </PreferencesSection>

        <TitleHeaderButtonCard
          title="Test Mode Data"
          header="Clear all of your test data in one click, useful for testing or when the chain resets"
          buttonText="Delete all test data"
        />
      </form>
    </Form>
  );
}
