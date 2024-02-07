import { MainWrap } from "@/components/reusables/mainWrap";

type IssuerWrapProps = {
  children?: React.ReactNode;
};

export function IssuerWrap({ children }: IssuerWrapProps) {
  return (
    <MainWrap>
      <div className="mb-2 select-none text-2xl font-semibold">
        Issuer Profiles (DIDs)
      </div>
      <div className=" mb-5 w-7/12 select-none">
        A DID is your organization's identity on the blockchain. Your DID will
        generate a unique cryptographic signature on every credential you issue,
        making them tamper-proof and verifiable.
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 md:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
