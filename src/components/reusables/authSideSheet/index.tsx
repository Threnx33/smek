import { LogoChip } from "../logoChip";

export function AuthSideSheet() {
  const listItems = [
    "Grow your professional skills",
    "Discover new professional opportunities",
    "Broadcast your skills to a broad audience",
    "Earn credentials that translate to college credit",
    "Easily issue, verify, manage and revoke verifiable credentials and decentralized identities",
    "Harness the security of the Skillquiver blockchain, a network run by 50 independent validators",
  ];

  return (
    <div className="hidden inset-0 text-sm font-medium w-5/12 bg-[url(/authImg.png)] bg-cover bg-no-repeat pl-12 pt-28 md:block">
      <div className="absolute top-5">
        <LogoChip />
      </div>
      <div className="w-10/12">
        <h1 className="text-3xl font-bold mb-6">Level up your career</h1>
        <p>
          Join millions of professionals, recruiters, and employers on
          Skillquiver.
        </p>
        <p className="mb-4">With Skillquiver you can:</p>
        {listItems.map((item, index) => (
          <div key={index} className="mb-3 flex items-center">
            <img src="/tickCircle.svg" alt="TickCircleIcon" className="mr-2" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
