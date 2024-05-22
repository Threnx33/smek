import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table as ReactTable, flexRender } from "@tanstack/react-table";

interface CertificatesCollectionsCreateFormTableProps<TData> {
  table: ReactTable<TData>;
}

export function CertificatesCollectionsCreateFormTable<TData>({
  table,
}: CertificatesCollectionsCreateFormTableProps<TData>) {
  return (
    <div className="flex flex-col flex-grow mb-4">
      <div>
        <div className="mb-2 font-semibold">
          <Table>
            <TableHeader className="bg-cLightGreyBg">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="h-9 text-cMediumGrey"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
