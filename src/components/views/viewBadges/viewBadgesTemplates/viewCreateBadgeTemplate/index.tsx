import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomInput } from "@/components/reusables/customInput";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { FormCardWrap } from "@/components/reusables/formCardWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MainWrap } from "@/components/reusables/mainWrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateBadgeTemplateButtons from "./CreateBadgeTemplateButtons";

const criteriaSchema = z.object({
  criteriaType: z.string(),
  criteriaDescription: z.string(),
  criteriaURL: z.string().url(),
});

const skillSchema = z.object({
  skillName: z.string(),
});

const standardSchema = z.object({
  standardName: z.string(),
  standardURL: z.string().url(),
  standardDescription: z.string(),
});

const createBadgeTemplateSchema = z.object({
  badgeName: z.string().min(1, "Badge name required"),
  description: z.string(),
  earnBadge: z.enum(["yes", "no"]),
  type: z.string(),
  level: z.string(),
  time: z.string(),
  cost: z.string(),
  displayAttributes: z.boolean().optional(),
  criterias: z.array(criteriaSchema),
  skills: z.array(skillSchema),
  standards: z.array(standardSchema),
});

const expirationTypeItems = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const defaultValues: Partial<CreateBadgeTemplateSchema> = {
  criterias: [{ criteriaType: "", criteriaDescription: "", criteriaURL: "" }],
  skills: [],
  standards: [{ standardName: "", standardDescription: "", standardURL: "" }],
};

type CreateBadgeTemplateSchema = z.infer<typeof createBadgeTemplateSchema>;

export function ViewCreateBadgeTemplate() {
  const form = useForm<CreateBadgeTemplateSchema>({
    resolver: zodResolver(createBadgeTemplateSchema),
    defaultValues: defaultValues,
  });
  const [suggestionFailed, setSuggestionFailed] = useState(false);

  const {
    fields: criteriaFields,
    append: appendCriteria,
    remove: removeCriteria,
  } = useFieldArray({
    control: form.control,
    name: "criterias",
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  const {
    fields: standardFields,
    append: appendStandards,
    remove: removeStandards,
  } = useFieldArray({
    control: form.control,
    name: "standards",
  });

  const addCriteria = () => {
    appendCriteria({
      criteriaType: "",
      criteriaDescription: "",
      criteriaURL: "",
    });
  };

  const addStandard = () => {
    appendStandards({
      standardName: "",
      standardDescription: "",
      standardURL: "",
    });
  };

  const handleSkillEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      appendSkill({
        skillName: e.currentTarget.value,
      });
      e.currentTarget.value = "";
    }
  };

  return (
    <MainWrap>
      <div className="flex flex-col items-center">
        <div className="flex flex-col xl:w-9/12">
          <div className="flex justify-between">
            <span className="mb-5 text-2xl font-semibold">
              Create Badge Template
            </span>
            <CreateBadgeTemplateButtons />
          </div>

          <div className="mb-6 rounded bg-white p-4 md:p-7">
            <div className="mb-5 text-xl font-semibold">Basics</div>
            <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
              <img
                className="mb-2 h-60 w-60 md:mb-0"
                src="/addImage.png"
                alt="AddImageIcon"
              />
              <div className="md:px-10">
                <div className="mb-2 font-semibold">Add Image</div>
                <div className="mb-4 text-sm md:mb-6">
                  Badge tempaltes must use images in png format, with dimensions
                  between 600x600 and 2048x2048 pixels. Or select from the
                  templates you created on designer.
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-3">
                  <Button variant="outline" className="w-fit">
                    Upload Image
                  </Button>
                  <Button variant="outline" className="w-fit">
                    Select from design templates
                  </Button>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form className="flex flex-col">
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

                <div className="text-lg font-semibold">Earn This Badge</div>
                <div className="mb-2 text-sm ">
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

                <div className="text-lg font-semibold">Attributes</div>
                <div className="mb-4 text-sm">
                  Attributes improve your badge’s overall discoverability, as
                  well as the likelihood it will be recommended to Skillquiver
                  users. Learn more about attributes{" "}
                  <TextMainWrap>here</TextMainWrap>.
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

                <div className="mb-2 text-lg font-semibold">Criteria</div>
                {criteriaFields.map((field, index) => (
                  <FormCardWrap className="flex flex-col" key={field.id}>
                    <CustomSelect
                      form={form}
                      name={`criterias.${index}.criteriaType`}
                      label="Criteria Type"
                      placeholder="Select one"
                      items={[]}
                    />
                    <CustomTextarea
                      form={form}
                      name={`criterias.${index}.criteriaDescription`}
                      label="Description"
                      placeholder="Type in criteria description"
                    />
                    <CustomInput
                      form={form}
                      name={`criterias.${index}.criteriaURL`}
                      label="URL to Activity"
                      type="text"
                      placeholder="https://"
                    />
                    {criteriaFields.length <= 1 ? null : (
                      <Button
                        type="button"
                        variant="ghost"
                        className="ml-auto text-cRed hover:bg-background hover:text-cRed-accent"
                        onClick={() => removeCriteria(index)}
                      >
                        Remove Criteria
                      </Button>
                    )}
                  </FormCardWrap>
                ))}
                <Button
                  type="button"
                  className="mb-6 ml-auto"
                  variant="outline"
                  onClick={() => addCriteria()}
                >
                  <img
                    className="mr-2 h-5 w-5"
                    src="/addSquare.svg"
                    alt="AddSquareIcon"
                  />
                  <span>Add Criteria</span>
                </Button>

                <div className="mb-2 text-lg font-semibold">Skills</div>
                <FormCardWrap className=" mb-6">
                  <Label className="mb-2" htmlFor="skills">
                    Add skills
                  </Label>
                  <Input
                    id="skills"
                    className="mb-2 border p-2"
                    type="text"
                    placeholder="Type in skills"
                    onKeyDown={(e) => handleSkillEnter(e)}
                  />

                  <div className="mb-6">
                    {!skillFields.length ? (
                      <div className="text-sm font-medium">
                        You must add at least 3 skills.
                      </div>
                    ) : (
                      skillFields.map((field, index) => (
                        <div
                          key={field.id}
                          className="m-1 inline-flex items-center"
                        >
                          <span className="flex select-none space-x-2 rounded-3xl border bg-cLightGreyBg px-4 py-2 text-sm">
                            <span>
                              {field.skillName.substring(0, 13) +
                                (field.skillName.length > 13 ? "..." : "")}
                            </span>
                            <img
                              className="cursor-pointer"
                              onClick={() => removeSkill(index)}
                              src="/closeCircle.svg"
                              alt="CloseCircleIcon"
                            />
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="mb-1 text-sm font-semibold">
                    Suggested Skills
                  </div>
                  {suggestionFailed ? (
                    <>
                      <div className="mb-1 text-xs text-cRed">
                        We couldn't find any skills for your template. This is
                        usually due to a lack of data. Try updating your
                        template description.
                      </div>
                      <TextMainWrap className="mb-4 block text-xs">
                        Need help?
                      </TextMainWrap>
                    </>
                  ) : (
                    <div className="mb-4 text-sm">
                      Skillquiver can generate a list of skills based on your
                      template's description and earning criteria. Using these
                      skills ensures your credential connects to meaningful
                      opportunities for your earners
                    </div>
                  )}

                  <Button
                    onClick={() => setSuggestionFailed((prev) => !prev)}
                    className="w-fit"
                    variant="outline"
                    type="button"
                  >
                    Suggest skills
                  </Button>
                </FormCardWrap>

                <div className="mb-2 text-lg font-semibold">Standards</div>
                {standardFields.map((field, index) => (
                  <FormCardWrap className="flex flex-col" key={field.id}>
                    <CustomInput
                      form={form}
                      name={`standards.${index}.standardName`}
                      label="Standard Name"
                      type="text"
                    />
                    <CustomInput
                      form={form}
                      name={`standards.${index}.standardURL`}
                      label="URL to Activity"
                      type="text"
                      placeholder="https://"
                    />
                    <CustomTextarea
                      form={form}
                      name={`standards.${index}.standardDescription`}
                      label="Description"
                      placeholder="Type in standard description"
                    />
                    {standardFields.length <= 1 ? null : (
                      <Button
                        type="button"
                        variant="ghost"
                        className="ml-auto text-cRed hover:bg-background hover:text-cRed-accent"
                        onClick={() => removeStandards(index)}
                      >
                        Remove Standard
                      </Button>
                    )}
                  </FormCardWrap>
                ))}
                <Button
                  type="button"
                  className="mb-6 ml-auto"
                  variant="outline"
                  onClick={() => addStandard()}
                >
                  <img
                    className="mr-2 h-5 w-5"
                    src="/addSquare.svg"
                    alt="AddSquareIcon"
                  />
                  <span>Add Standard</span>
                </Button>
              </form>
            </Form>
          </div>

          <div className="mb-6 ml-auto space-x-2">
            <CreateBadgeTemplateButtons />
          </div>
        </div>
      </div>
    </MainWrap>
  );
}
