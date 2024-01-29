import { MainWrap } from "@/components/reusables/mainWrap";

const dashboardTitleNuberCard = (title: string, number: string) => (
  <div className="p-6 bg-white rounded-xl w-3/12">
    <div className="font-medium text-lg mb-5">{title}</div>
    <div className="text-5xl font-normal">{number}</div>
  </div>
);

const dashboardVideoCard = () => (
  <div className="p-6 bg-black rounded-xl w-6/12 h-[24rem]"></div>
);

const dashboardInformationCard = (title: string, description: string) => (
  <div className="flex items-center p-8 bg-white rounded-xl w-6/12 space-x-6 mx-2 ">
    <div className="w-16 h-16 bg-cLightGreyStroke rounded-full shrink-0 "></div>
    <div className="flex flex-col shrink">
      <div className="font-medium mb-2">{title}</div>
      <div className="font-normal">{description}</div>
    </div>
  </div>
);

const dashboardTitleCard = (title: string) => (
  <div className="text-xl font-medium mb-6 select-none">{title}</div>
);

export function ViewDashboard() {
  return (
    <MainWrap>
      <div className="text-2xl font-semibold mb-6 select-none">Dashboard</div>
      <div className="flex space-x-4 mb-6">
        {dashboardTitleNuberCard("Issuer Profiles (DIDs)", "68")}
        {dashboardTitleNuberCard("Credentials", "390")}
        {dashboardTitleNuberCard("Templates", "390")}
        {dashboardTitleNuberCard("IIssued", "2,748")}
      </div>

      {dashboardTitleCard("Getting Started")}

      <div className="flex space-x-4 mb-6">
        {dashboardVideoCard()}
        {dashboardVideoCard()}
      </div>

      {dashboardTitleCard("Useful Informations")}

      <div className="flex flex-col space-y-2">
        <div className="flex mb-2 w-full">
          {dashboardInformationCard(
            "Learn the basics of Verifiable Credentials",
            "This step-by-step guide will show you how to create issuer profiles and issue Verifiable Credentials."
          )}
          {dashboardInformationCard(
            "Check out the Skillquiver Certs user guide",
            "An intro to how Verifiable Credentials provide tamper-proof credentials that can be instantly verified, as well as use cases and example."
          )}
        </div>
        <div className="flex mb-2 w-full">
          {dashboardInformationCard(
            "Create a Decentralized Identifier",
            "Decentralized Identifies (DIDs) are unique digital identities that prove the identity of credential issuers and holders."
          )}
          {dashboardInformationCard(
            "Get started with our API",
            "Are you interested in building an application for issuing credentials? Check out our developer documentation to learn more."
          )}
        </div>
      </div>
    </MainWrap>
  );
}
