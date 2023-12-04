import { HTMLAttributes, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { useDropzone } from "react-dropzone";

const issuerCreateSchema = z.object({
  publicName: z.string().min(1, "Required"),
  description: z.string(),
  didType: z.string().min(1, "Required"),
});

const defaultCreateValues: Partial<IssuerCreateSchema> = {
  publicName: "",
  description: "",
  didType: "",
};

type IssuerCreateSchema = z.infer<typeof issuerCreateSchema>;

interface IssuerCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function IssuerCreateForm({ className, ...props }: IssuerCreateProps) {
  const form = useForm<IssuerCreateSchema>({
    resolver: zodResolver(issuerCreateSchema),
    defaultValues: defaultCreateValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  async function onSubmit(data: IssuerCreateSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  return (
    <div className={className} {...props}>
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

            <CustomInput
              form={form}
              name="publicName"
              label="Public Name"
              type="text"
            />
            <CustomTextarea
              form={form}
              name="description"
              placeholder="This text will be inserted in the code of every credential you issue. It can be a description of your organization, address, contact information, etc."
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
