import { SchemaAddReceiptForm } from "./schemaAddReceiptForm";

export function SchemaAddReceipt() {
  return (
    <>
      <div className="mb-2 select-none text-2xl font-semibold">
        Add Recipients
      </div>
      <div className=" mb-5 w-11/12 select-none md:w-7/12">
        Add recipients manually or import a spreadsheet
      </div>
      <div className="flex flex-grow flex-col  p-3 sm:p-6">
        <SchemaAddReceiptForm />
      </div>
    </>
  );
}
