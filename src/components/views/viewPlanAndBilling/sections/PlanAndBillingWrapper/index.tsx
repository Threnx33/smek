import { MainWrap } from "@/components/reusables/mainWrap";

type PlanAndBillingWrapperProps = {
  children: React.ReactNode;
};

export function PlanAndBillingWrapper({
  children,
}: PlanAndBillingWrapperProps) {
  return (
    <MainWrap>
      <div className="mb-2 select-none text-2xl font-semibold">
        Plan & Billing
      </div>
      <div className=" mb-5 w-7/12 select-none">
        Select any plans that fits your needs. We have plan selections for
        smaller or larger organizations
      </div>

      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
