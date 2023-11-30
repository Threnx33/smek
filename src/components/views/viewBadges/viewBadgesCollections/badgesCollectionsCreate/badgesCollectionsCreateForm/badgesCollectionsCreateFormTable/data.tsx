import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { TEMPLATES } from "@/components/views/viewBadges/viewBadgesTemplates/data";

type SelectTemplate = {
  id: string;
  templateName: string;
  imgSrc: string;
};

export const SELECT_TEMPLATES: SelectTemplate[] = TEMPLATES.map(
  ({ id, templateName, imgSrc }) => ({
    id,
    templateName,
    imgSrc,
  })
);

export const SELECT_TEMPLATES_COLUMNS: ColumnDef<SelectTemplate>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "templateName",
    header: "Template Name",
    cell: ({ row }) => {
      return (
        <span className="flex flex-row items-center ">
          <img
            className="h-10 w-10 mr-2"
            src={row.original.imgSrc}
            alt="TemplateImage"
          />
          {row.getValue("templateName")}
        </span>
      );
    },
  },
];
