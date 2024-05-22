import { MainWrap } from "@/components/reusables/mainWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";

type ActivityWrapperProps = {
  children: React.ReactNode;
};

export function ActivityWrapper({ children }: ActivityWrapperProps) {
  return (
    <MainWrap>
      <div className="mb-2 select-none text-2xl font-semibold">Activity</div>
      <div className=" mb-5 select-none md:w-7/12">
        This page shows a historical list of credential issuance events and
        blockchain transactions, such as DIDs, anchoring, and revocation.
        <div>
          <span className="font-semibold">Important</span>: To protect user
          data, issued credentials never go on the blockchain. You can view the
          transactions on the blockchain by clicking on the status icon on the
          right of the transaction that links to the{" "}
          <TextMainWrap>blockchain viewer</TextMainWrap>.
        </div>
      </div>

      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
