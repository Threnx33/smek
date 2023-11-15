import { HTMLAttributes } from "react";
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
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BADGES,
  COUNTRIES,
  EMAIL_LANGUAGES,
  ISSUER_PROFILES,
} from "@/components/constants";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";

const badgeTemplatesIssueSchema = z.object({
  issuerProfile: z.string(),
  badge: z.string(),
  firstName: z.string().min(1, "First name is required."),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required."),
  dateIssued: z.date(),
  expirationType: z.enum(["noExpiration", "expiresOn"]),
  expirationDate: z.date().optional(),
  emailNotifications: z.boolean().optional(),
  emailLanguage: z.string(),
  issuerEarnerId: z.string(),
  groupTag: z.string(),
  countryTeritory: z.string(),
  stateProvince: z.string(),
});

const defaultIssueValues: Partial<BadgeTemplatesIssueSchema> = {};

type BadgeTemplatesIssueSchema = z.infer<typeof badgeTemplatesIssueSchema>;

interface BadgeTemplatesIssueProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgeTemplatesIssueForm({
  className,
  ...props
}: BadgeTemplatesIssueProps) {
  const form = useForm<BadgeTemplatesIssueSchema>({
    resolver: zodResolver(badgeTemplatesIssueSchema),
    defaultValues: defaultIssueValues,
  });

  const expirationTypeWatch = form.watch("expirationType", "noExpiration");

  async function onSubmit(data: BadgeTemplatesIssueSchema) {
    console.log(data);
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomSelect
            form={form}
            name="issuerProfile"
            label="Issuer Profile"
            placeholder="Select issuer profile"
            items={ISSUER_PROFILES}
          />
          <CustomSelect
            form={form}
            name="badge"
            label="Badge"
            placeholder="Select badge to issue"
            items={BADGES}
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold flex justify-between mb-6">
            <span>Earner Information</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <CustomInput
            form={form}
            name="firstName"
            label="First Name"
            type="text"
          />
          <CustomInput
            form={form}
            name="middleName"
            label="Middle Name"
            type="text"
          />
          <CustomInput
            form={form}
            name="lastName"
            label="Last Name"
            type="text"
          />

          <FormField
            control={form.control}
            name="dateIssued"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Date issued</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "flex  justify-start font-normal",
                          !field.value && "opacity-50"
                        )}
                      >
                        <img
                          src="/calendar.svg"
                          alt="CalendarIcon"
                          className="h-4 w-4  mr-2"
                        />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <img
                          src="/arrowDown.svg"
                          alt="ArrowDownIcon"
                          className="h-4 w-4 ml-auto"
                        />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expirationType"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Expiration</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={expirationTypeWatch}
                    className="flex "
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0 mr-2">
                      <FormControl>
                        <RadioGroupItem
                          className={`${
                            expirationTypeWatch === "noExpiration"
                              ? "border-checked text-checked"
                              : ""
                          }`}
                          value="noExpiration"
                          id="r1"
                        />
                      </FormControl>
                      <Label htmlFor="r1">No expiration</Label>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className={`${
                            expirationTypeWatch === "expiresOn"
                              ? "border-checked text-checked"
                              : ""
                          }`}
                          value="expiresOn"
                          id="r2"
                        />
                      </FormControl>
                      <Label htmlFor="r2">Expires on</Label>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {expirationTypeWatch === "expiresOn" && (
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mb-4">
                  <FormLabel>Expiration Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "flex justify-start font-normal",
                            !field.value && "opacity-50"
                          )}
                        >
                          <img
                            src="/calendar.svg"
                            alt="CalendarIcon"
                            className="h-4 w-4  mr-2"
                          />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <img
                            src="/arrowDown.svg"
                            alt="ArrowDownIcon"
                            className="h-4 w-4 ml-auto"
                          />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Separator className="my-6" />
          <div className="text-sm font-bold flex justify-between mb-4">
            <span>Badge Options</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <CustomCheckbox
            form={form}
            name="emailNotifications"
            title="Email Notifications"
            label="Suppress Skillquiver email notifications"
          />

          <Separator className="my-6" />

          <CustomSelect
            form={form}
            name="emailLanguage"
            label="Email Language"
            placeholder="Select language"
            items={EMAIL_LANGUAGES}
          />

          <CustomInput
            form={form}
            name="issuerEarnerId"
            label="Issuer Earner ID"
            type="text"
          />
          <CustomInput
            form={form}
            name="groupTag"
            label="Group Tag"
            type="text"
          />

          <CustomSelect
            form={form}
            name="countryTeritory"
            label="Country / Teritory"
            placeholder="Select country"
            items={COUNTRIES}
          />

          <CustomInput
            form={form}
            name="stateProvince"
            label="State / Province"
            type="text"
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold mb-4">
            <span>Add evidence</span>
          </div>
        </form>
      </Form>
    </div>
  );
}
