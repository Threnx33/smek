import React, { HTMLAttributes, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { TEMPLATES } from "../../../viewBadgesTemplates/data";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Separator } from "@/components/ui/separator";
import { CustomRadioGroup } from "@/components/reusables/customRadioGroup";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { BadgesCollectionsCreateFormTable } from "./badgesCollectionsCreateFormTable";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import {
  SELECT_TEMPLATES,
  SELECT_TEMPLATES_COLUMNS,
} from "./badgesCollectionsCreateFormTable/data";

const TEMPLATES_NAMES = TEMPLATES.map((t) => t.templateName);

const badgeCollectionsCreateSchema = z.object({
  collectionName: z.string().min(1),
  collectionImage: z
    .string()
    .refine((value) => TEMPLATES_NAMES.includes(value), "Invalid image."),
  description: z.string(),
  visibility: z.enum(["Private", "Public"]),
});

const defaultCollectionValues: Partial<BadgeCollectionsCreateSchema> = {
  collectionName: "",
  collectionImage: "",
  description: "",
  visibility: "Private",
};

type BadgeCollectionsCreateSchema = z.infer<
  typeof badgeCollectionsCreateSchema
>;

interface BadgeCollectionsCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function BadgesCollectionsCreateForm({
  className,
  ...props
}: BadgeCollectionsCreateProps) {
  const form = useForm<BadgeCollectionsCreateSchema>({
    resolver: zodResolver(badgeCollectionsCreateSchema),
    defaultValues: defaultCollectionValues,
  });

  const table = useCustomTable({
    columns: SELECT_TEMPLATES_COLUMNS,
    data: SELECT_TEMPLATES,
  });

  const [selectOpened, setSelectOpened] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: BadgeCollectionsCreateSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  function handleSelectCancel() {
    setSelectOpened(false);
    table.resetRowSelection();
  }

  const visibilityItems = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
  ];

  const selectedNr = table.getFilteredSelectedRowModel().rows.length;

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {!selectOpened ? (
            <div className="flex flex-col">
              <CustomInput
                form={form}
                name="collectionName"
                label="Collection Name"
                type="text"
              />
              <CustomSelect
                form={form}
                name="collectionImage"
                label="Collection Image"
                placeholder="Select image"
                items={TEMPLATES_NAMES}
              />
              <CustomTextarea
                form={form}
                name="description"
                label="Description"
              />

              <Separator className="mb-6" />
              <div className="font-semibold">Visibility</div>
              <div className="text-sm mb-4">
                Make your collection public for earners, or private for
                administrative purposes.
              </div>
              <CustomRadioGroup
                className="mb-6"
                classNameRadio="flex flex-col space-y-1"
                form={form}
                name="visibility"
                items={visibilityItems}
                defaultValue="private"
              />

              <Separator className="mb-6" />
              <div className="font-semibold">Templates</div>
              <div className="text-sm mb-4">
                Select the templates you would like to appear in this
                collection.
              </div>
              <div className="flex items-center mb-6 space-x-3">
                <Button
                  onClick={() => setSelectOpened(true)}
                  type="button"
                  variant="outline"
                >
                  Select Templates
                </Button>
                {selectedNr > 0 && (
                  <div className="text-sm">
                    {selectedNr} Template{selectedNr > 1 && "s"} Selected
                  </div>
                )}
              </div>

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
          ) : (
            <div className="flex flex-col">
              <BadgesCollectionsCreateFormTable table={table} />

              <div className="ml-auto space-x-2">
                <Button
                  type="button"
                  onClick={handleSelectCancel}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button type="button" onClick={() => setSelectOpened(false)}>
                  Save
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
