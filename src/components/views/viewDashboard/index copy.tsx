import { MainWrap } from "@/components/reusables/mainWrap";

const dashboardTitleNuberCard = (title: string, number: string) => (
  <div className="w-3/12 rounded-xl bg-white p-6">
    <div className="mb-5 text-lg font-medium">{title}</div>
    <div className="text-5xl font-normal">{number}</div>
  </div>
);

const dashboardVideoCard = () => (
  <div className="h-[24rem] w-6/12 rounded-xl bg-black p-6"></div>
);

const dashboardInformationCard = (title: string, description: string) => (
  <div className="mx-2 flex w-6/12 items-center space-x-6 rounded-xl bg-white p-8 ">
    <div className="h-16 w-16 shrink-0 rounded-full bg-cLightGreyStroke "></div>
    <div className="flex shrink flex-col">
      <div className="mb-2 font-medium">{title}</div>
      <div className="font-normal">{description}</div>
    </div>
  </div>
);

const dashboardTitleCard = (title: string) => (
  <div className="mb-6 select-none text-xl font-medium">{title}</div>
);

export function ViewDashboard() {
  return (
    <MainWrap>
      <div className="mb-6 select-none text-2xl font-semibold">Dashboard</div>
      <div className="mb-6 flex space-x-4">
        {dashboardTitleNuberCard("Issuer Profiles (DIDs)", "68")}
        {dashboardTitleNuberCard("Credentials", "390")}
        {dashboardTitleNuberCard("Templates", "390")}
        {dashboardTitleNuberCard("IIssued", "2,748")}
      </div>

      {dashboardTitleCard("Getting Started")}

      <div className="mb-6 flex space-x-4">
        {dashboardVideoCard()}
        {dashboardVideoCard()}
      </div>

      {dashboardTitleCard("Useful Informations")}

      <div className="flex flex-col space-y-2">
        <div className="mb-2 flex w-full">
          {dashboardInformationCard(
            "Learn the basics of Verifiable Credentials",
            "This step-by-step guide will show you how to create issuer profiles and issue Verifiable Credentials.",
          )}
          {dashboardInformationCard(
            "Check out the Skillquiver Certs user guide",
            "An intro to how Verifiable Credentials provide tamper-proof credentials that can be instantly verified, as well as use cases and example.",
          )}
        </div>
        <div className="mb-2 flex w-full">
          {dashboardInformationCard(
            "Create a Decentralized Identifier",
            "Decentralized Identifies (DIDs) are unique digital identities that prove the identity of credential issuers and holders.",
          )}
          {dashboardInformationCard(
            "Get started with our API",
            "Are you interested in building an application for issuing credentials? Check out our developer documentation to learn more.",
          )}
        </div>
      </div>
    </MainWrap>
  );
}
