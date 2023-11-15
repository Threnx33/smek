import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { FormCardWrap } from "@/components/reusables/formCardWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { MainWrapper } from "@/components/uiComponents/mainWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createBadgeTemplateSchema = z.object({
  badgeName: z.string().min(1, "Badge name required"),
  description: z.string(),
  earnBadge: z.enum(["yes", "no"]),
  type: z.string(),
  level: z.string(),
  time: z.string(),
  cost: z.string(),
  displayAttributes: z.boolean().optional(),
  criteriaType: z.string(),
  criteriaDescription: z.string(),
  criteriaURL: z.string(),
});

const defaultValues: Partial<CreateBadgeTemplateSchema> = {};

type CreateBadgeTemplateSchema = z.infer<typeof createBadgeTemplateSchema>;

export function ViewCreateBadgeTemplate() {
  const form = useForm<CreateBadgeTemplateSchema>({
    resolver: zodResolver(createBadgeTemplateSchema),
    defaultValues: defaultValues,
  });
  const expirationTypeItems = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  return (
    <MainWrapper>
      <div className="flex flex-col items-center">
        <div className="w-7/12">
          <div className="flex justify-between">
            <span className="text-2xl font-bold mb-5">
              Create Badge Template
            </span>
            <div className="space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button variant="outline">Save as draft</Button>
              <Button>Publish template</Button>
            </div>
          </div>

          <div className="bg-white p-7 rounded">
            <div className="text-xl font-bold mb-5 ">Basics</div>
            <div className="flex justify-between items-center mb-6">
              <img
                className="w-60 h-60"
                src="/addImage.png"
                alt="AddImageIcon"
              />
              <div className="px-10">
                <div className="font-bold mb-2">Add Image</div>
                <div className="text-sm mb-6">
                  Badge tempaltes must use images in png format, with dimensions
                  between 600x600 and 2048x2048 pixels. Or select from the
                  templates you created on designer.
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline">Upload Image</Button>
                  <Button variant="outline">
                    Select from design templates
                  </Button>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form>
                <CustomInput
                  form={form}
                  name="badgeName"
                  label="Badge Name"
                  type="text"
                />
                <CustomTextarea
                  form={form}
                  name="description"
                  label="Description"
                  placeholder="Type in badge description"
                  className="mb-8"
                />

                <div className="text-lg font-bold">Earn This Badge</div>
                <div className="text-sm mb-2">
                  Display a button on this template that directly connects
                  skillquiver users with the opportunity to earn this badge.
                </div>
                <CustomRadioGroup
                  className="mb-8"
                  form={form}
                  name="earnBadge"
                  items={expirationTypeItems}
                  defaultValue={"true"}
                />

                <div className="text-lg font-bold">Attributes</div>
                <div className="text-sm mb-4">
                  Attributes improve your badge’s overall discoverability, as
                  well as the likelihood it will be recommended to Skillquiver
                  users. Learn more about attributes{" "}
                  <TextMainWrap className="cursor-pointer">here</TextMainWrap>.
                </div>

                <CustomSelect
                  form={form}
                  name="type"
                  label="Type"
                  placeholder="Select one"
                  items={[]}
                />
                <CustomSelect
                  form={form}
                  name="level"
                  label="Level"
                  placeholder="Select one"
                  items={[]}
                />
                <CustomSelect
                  form={form}
                  name="time"
                  label="Time"
                  placeholder="Select one"
                  items={[]}
                />
                <CustomSelect
                  form={form}
                  name="cost"
                  label="Cost"
                  placeholder="Select one"
                  items={[]}
                />

                <CustomCheckbox
                  className="mb-8"
                  form={form}
                  name="displayAttributes"
                  label="Display attributes on the public view of this badge"
                />

                <FormCardWrap title="Criteria">
                  <CustomSelect
                    form={form}
                    name="criteriaType"
                    label="Criteria Type"
                    placeholder="Select one"
                    items={[]}
                  />
                  <CustomTextarea
                    form={form}
                    name="criteriaDescription"
                    label="Description"
                    placeholder="Type in criteria description"
                  />
                  <CustomInput
                    form={form}
                    name="criteriaURL"
                    label="URL to Activity"
                    type="text"
                    placeholder="https://"
                  />
                </FormCardWrap>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
