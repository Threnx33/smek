import { HTMLAttributes, useState } from "react";
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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
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

  const expirationType = form.watch("expirationType");

  async function onSubmit(data: BadgeTemplatesIssueSchema) {
    console.log(data);
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="issuerProfile"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Issuer Profile</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(!field.value && "text-muted-foreground")}
                    >
                      <SelectValue placeholder="Select issuer profile" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ISSUER_PROFILES.map((issuerProfile) => (
                      <SelectItem value={issuerProfile} key={issuerProfile}>
                        {issuerProfile}
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
            name="badge"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Badge</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(!field.value && "text-muted-foreground")}
                    >
                      <SelectValue placeholder="Select badge to issue" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BADGES.map((badge) => (
                      <SelectItem value={badge} key={badge}>
                        {badge}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold flex justify-between mb-6">
            <span>Earner Information</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Middle Name</FormLabel>
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
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                    defaultValue={field.value}
                    className="flex "
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0 mr-2">
                      <FormControl>
                        <RadioGroupItem
                          className={`${
                            expirationType === "noExpiration"
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
                            expirationType === "expiresOn"
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

          {expirationType === "expiresOn" && (
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
          <div className="text-sm font-bold flex justify-between mb-6">
            <span>Badge Options</span>
            <img className="h-4 w-4" src="/arrowDown.svg" alt="ArrowDownIcon" />
          </div>

          <FormField
            control={form.control}
            name="emailNotifications"
            render={({ field }) => (
              <FormItem className="mb-4">
                <div className="text-sm font-semibold">Email Notifications</div>
                <div className="flex flex-row space-x-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    Suppress Skillquiver email notifications
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="my-6" />

          <FormField
            control={form.control}
            name="emailLanguage"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Email Language</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(!field.value && "text-muted-foreground")}
                    >
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EMAIL_LANGUAGES.map((emailLanguage) => (
                      <SelectItem value={emailLanguage} key={emailLanguage}>
                        {emailLanguage}
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
            name="issuerEarnerId"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Issuer Earner ID</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="groupTag"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Group Tag</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="countryTeritory"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Country / Teritory</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(!field.value && "text-muted-foreground")}
                    >
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem value={country} key={country}>
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
            name="stateProvince"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>State / Province</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="my-6" />
          <div className="text-sm font-bold mb-4">
            <span>Add evidence</span>
          </div>

          <div className="flex mb-6">
            <Button variant="outline">
              <img className="h-5 w-5 mr-1" src="/link.svg" alt="exportIcon" />
              URL
            </Button>
            <Button variant="outline">
              <img className="h-5 w-5 mr-1" src="/text.svg" alt="textIcon" />
              Text
            </Button>
            <Button variant="outline">
              <img
                className="h-5 w-5 mr-1"
                src="/export.svg"
                alt="exportIcon"
              />
              Upload
            </Button>
            <Button variant="outline">
              <img
                className="h-5 w-5 mr-1"
                src="/personalCard.svg"
                alt="PersonalCardIcon"
              />
              ID
            </Button>
            <Button variant="outline">
              <img className="h-5 w-5 mr-1" src="/dots.svg" alt="dotsIcon" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
