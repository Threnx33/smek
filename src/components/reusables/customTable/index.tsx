import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Table as ReactTable, flexRender } from "@tanstack/react-table";
import { ReactNode } from "react";

interface CustomTableProps<TData> {
  table: ReactTable<TData>;
  emptyImgName: string;
  emptyText: ReactNode;
  noSelections?: boolean;
  noNextPrev?: boolean;
  className?: string;
}

export function CustomTable<TData>({
  table,
  emptyImgName,
  emptyText,
  noSelections,
  noNextPrev,
  className,
}: CustomTableProps<TData>) {
  const tableRows = table.getFilteredRowModel().rows.length;

  return (
    <div className={`flex flex-grow flex-col ${className}`}>
      {table.getRowModel().rows.length ? (
        <div className="">
          <div className={`font-medium ${noNextPrev ? "" : "mb-2"} `}>
            <Table className="min-w-[40rem] overflow-auto">
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
                                header.getContext(),
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
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {!noNextPrev && (
            <div className="flex items-center justify-end space-x-2 ">
              {!noSelections && (
                <div className="flex-1 text-sm text-muted-foreground">
                  {table.getFilteredSelectedRowModel().rows.length} of{" "}
                  {tableRows} row{tableRows > 1 && "s"} selected.
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-grow items-center justify-center">
          <div className="flex w-6/12 flex-col items-center ">
            <img
              className="mb-10"
              src={`/${emptyImgName}.png`}
              alt={`${emptyImgName}Image`}
            />
            {emptyText}
          </div>
        </div>
      )}
    </div>
  );
}
