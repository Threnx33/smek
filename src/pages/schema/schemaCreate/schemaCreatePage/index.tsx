import { MainWrap } from "@/components/reusables/mainWrap";
import { Button } from "@/components/ui/button";
import { SchemaCreateForm } from "./schemaCreateForm";

export function SchemaCreate() {
  return (
    <MainWrap>
      <div className="flex items-start">
        <div className="flex-1">
          <div className="mb-2 select-none text-2xl font-semibold">
            Create Credential Schema
          </div>
          <div className=" mb-5 w-10/12 select-none xl:w-7/12">
            A schema is like a template for credential that issuers and
            verifiers use. It includes specific credential attributes such as
            name, license number, issue date etc.
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button type="submit">
            <div className="hidden md:flex">Cancel</div>
            <div className="shrink-0 md:hidden">
              <img className="w-5 w-5 " src="/trash.svg" alt="EditIcon" />
            </div>
          </Button>
          <Button type="submit">
            <div className="hidden md:flex">Preview</div>
            <div className="shrink-0 md:hidden">
              <img className="w-5 w-5 " src="/edit.svg" alt="EditIcon" />
            </div>
          </Button>
          <Button type="submit">
            <div className="hidden md:flex">Publish</div>
            <div className="shrink-0 md:hidden">
              <img className="w-5 w-5 " src="/addCircle.svg" alt="EditIcon" />
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <SchemaCreateForm />
      </div>
    </MainWrap>
  );
}
