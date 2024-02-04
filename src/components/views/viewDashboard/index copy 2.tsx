import { MainWrap } from "@/components/reusables/mainWrap";

const dashboardTitleNumberCard = (title: string, number: string) => (
  <div className="mb-4 w-full rounded-xl bg-white p-4 md:mb-0 md:w-3/12">
    <div className="mb-3 text-lg font-medium">{title}</div>
    <div className="text-3xl font-normal md:text-5xl">{number}</div>
  </div>
);

const dashboardVideoCard = () => (
  <div className="mb-4 h-[20rem]  w-full rounded-xl bg-black p-4 md:mb-0 md:h-[24rem] md:w-6/12"></div>
);

const dashboardInformationCard = (title: string, description: string) => (
  <div className="mx-2 mb-4 flex w-full items-center space-x-4 rounded-xl bg-white p-4 md:mb-0 md:w-6/12">
    <div className="h-12 w-12 shrink-0 rounded-full bg-cLightGreyStroke"></div>
    <div className="flex shrink flex-col">
      <div className="mb-2 font-medium">{title}</div>
      <div className="text-sm font-normal">{description}</div>
    </div>
  </div>
);

const dashboardTitleCard = (title: string) => (
  <div className="mb-4 select-none text-xl font-medium">{title}</div>
);

export function ViewDashboard() {
  return (
    <MainWrap>
      <div className="mb-4 select-none text-2xl font-semibold">Dashboard</div>
      <div className="-mx-2 flex flex-wrap md:mx-0 md:mb-6 md:flex-nowrap md:space-x-4">
        {dashboardTitleNumberCard("Issuer Profiles (DIDs)", "68")}
        {dashboardTitleNumberCard("Credentials", "390")}
        {dashboardTitleNumberCard("Templates", "390")}
        {dashboardTitleNumberCard("Issued", "2,748")}
      </div>

      {dashboardTitleCard("Getting Started")}

      <div className="-mx-2 flex flex-wrap md:mx-0 md:mb-6 md:flex-nowrap md:space-x-4">
        {dashboardVideoCard()}
        {dashboardVideoCard()}
      </div>

      {dashboardTitleCard("Useful Informations")}

      <div className="flex flex-col space-y-4">
        {dashboardInformationCard(
          "Learn the basics of Verifiable Credentials",
          "This step-by-step guide will show you how to create issuer profiles and issue Verifiable Credentials.",
        )}
        {dashboardInformationCard(
          "Check out the Skillquiver Certs user guide",
          "An intro to how Verifiable Credentials provide tamper-proof credentials that can be instantly verified, as well as use cases and example.",
        )}
        {dashboardInformationCard(
          "Create a Decentralized Identifier",
          "Decentralized Identifiers (DIDs) are unique digital identities that prove the identity of credential issuers and holders.",
        )}
        {dashboardInformationCard(
          "Get started with our API",
          "Are you interested in building an application for issuing credentials? Check out our developer documentation to learn more.",
        )}
      </div>
    </MainWrap>
  );
}
