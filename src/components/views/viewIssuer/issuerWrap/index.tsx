import { MainWrap } from "@/components/reusables/mainWrap";

type IssuerWrapProps = {
  children?: React.ReactNode;
};

export function IssuerWrap({ children }: IssuerWrapProps) {
  return (
    <MainWrap>
      <div className="text-2xl font-bold mb-2 select-none">
        Issuer Profiles (DIDs)
      </div>
      <div className=" mb-5 select-none w-7/12">
        A DID is your organization's identity on the blockchain. Your DID will
        generate a unique cryptographic signature on every credential you issue,
        making them tamper-proof and verifiable.
      </div>
      <div className="bg-white flex flex-col flex-grow p-6 rounded">
        {children}
      </div>
    </MainWrap>
  );
}
