import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { Button } from "@/components/ui/button";
import { inputStyles } from "@/components/ui/input";
import { SheetClose } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/components/utils/utils";
import { useDropzone } from "react-dropzone";
import { Issue } from "../../data";

const issuerEditSchema = z.object({
  publicName: z.string().min(1, "Required"),
  description: z.string(),
  didType: z.string().min(1, "Required"),
});

type IssuerEditSchema = z.infer<typeof issuerEditSchema>;

interface IssuerEditProps {
  issue: Issue;
}

export function IssuerEditForm({ issue }: IssuerEditProps) {
  const defaultEditValues: Partial<IssuerEditSchema> = {
    publicName: issue.profileName,
    description: issue.description,
    didType: "",
  };
  const form = useForm<IssuerEditSchema>({
    resolver: zodResolver(issuerEditSchema),
    defaultValues: defaultEditValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  async function onSubmit(data: IssuerEditSchema) {
    closeRef.current?.click();
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(issue.DID);
      toast({ description: "DID coppied" });
    } catch (err) {
      toast({ description: "Couldn't copy DID" });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <div className=" flex justify-center items-center mb-8 mt-2 ">
              <div
                {...getRootProps({ className: "dropzone" })}
                className="w-36 h-36 border border-dashed rounded-full bg-cLightGreyBg flex flex-col justify-center items-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <img
                  className="h-7 w-7 mb-1"
                  src="galleryAdd.png"
                  alt="GalleryAddIcon"
                />
                <span className="text-xs text-cMediumGrey">Add logo</span>
              </div>
            </div>

            <div className="text-sm font-medium mb-2">DID</div>
            <div className="flex space-x-0">
              <div
                className={cn(
                  inputStyles(),
                  "mb-4 overflow-hidden text-muted-foreground rounded-r-none border-r-0"
                )}
              >
                <span>{issue.DID}</span>
              </div>
              <div>
                <Button
                  type="button"
                  className="rounded-l-none"
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              </div>
            </div>

            <CustomInput
              form={form}
              name="publicName"
              label="Public Name"
              type="text"
              defaultValue={issue.profileName}
            />
            <CustomTextarea
              form={form}
              name="description"
              placeholder="This text will be inserted in the code of every credential you issue. It can be a description of your organization, address, contact information, etc."
              defaultValue={issue.description}
              label="Description"
            />
            <CustomSelect
              className="mb-6"
              form={form}
              name="didType"
              label="DID Type"
              placeholder="Select DID type"
              items={[]}
            />

            <div className="ml-auto space-x-2">
              <Button
                type="button"
                onClick={() => closeRef.current?.click()}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
            <SheetClose ref={closeRef} />
          </div>
        </form>
      </Form>
    </div>
  );
}
