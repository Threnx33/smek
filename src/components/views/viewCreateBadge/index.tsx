import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { MainWrapper } from "@/components/uiComponents/mainWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createBadgeSchema = z.object({
  badgeName: z.string().min(1, "Badge name required"),
  description: z.string(),
  earnBadge: z.boolean().optional(),
  type: z.string().optional(),
});

const defaultValues: Partial<CreateBadgeSchema> = {};

type CreateBadgeSchema = z.infer<typeof createBadgeSchema>;

export function ViewCreateBadge() {
  const form = useForm<CreateBadgeSchema>({
    resolver: zodResolver(createBadgeSchema),
    defaultValues: defaultValues,
  });

  return (
    <MainWrapper>
      <div className="flex flex-col items-center">
        <div className="w-7/12">
          <div className="flex justify-between">
            <span className="text-2xl font-bold mb-5 ">
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
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
