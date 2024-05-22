import { MainWrap } from "@/components/reusables/mainWrap";

const dashboardTitleNumberCard = (title: string, number: string) => (
  <div className="rounded-xl bg-white p-4 lg:p-6">
    <div className="mb-3 text-lg font-medium lg:mb-5">{title}</div>
    <div className="text-3xl font-normal lg:text-5xl">{number}</div>
  </div>
);

const dashboardVideoCard = () => (
  <div className="h-64 rounded-xl bg-black p-4 lg:h-[24rem] lg:p-6"></div>
);

const dashboardInformationCard = (title: string, description: string) => (
  <div className="flex items-center space-x-4 rounded-xl bg-white p-4 lg:space-x-6 lg:p-6">
    <div className="h-12 w-12 shrink-0 rounded-full bg-cLightGreyStroke lg:h-16 lg:w-16"></div>
    <div className="flex flex-grow flex-col">
      <div className="mb-2 font-medium">{title}</div>
      <div className="text-sm font-normal lg:text-base">{description}</div>
    </div>
  </div>
);

const dashboardTitleCard = (title: string) => (
  <div className="mb-4 select-none text-xl font-medium lg:mb-6">{title}</div>
);

export function Dashboard() {
  return (
    <MainWrap>
      <div className="mb-4 select-none text-2xl font-semibold lg:mb-6">
        Dashboard
      </div>

      {/* Number cards section */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardTitleNumberCard("Issuer Profiles (DIDs)", "68")}
        {dashboardTitleNumberCard("Credentials", "390")}
        {dashboardTitleNumberCard("Templates", "390")}
        {dashboardTitleNumberCard("Issued", "2,748")}
      </div>

      {dashboardTitleCard("Getting Started")}

      {/* Video cards section */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {dashboardVideoCard()}
        {dashboardVideoCard()}
      </div>

      {dashboardTitleCard("Useful Informations")}

      {/* Information cards section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {dashboardInformationCard(
          "Learn the basics of Verifiable Credentials",
          "This step-by-step guide will show you how to create issuer profiles and issue Verifiable Credentials."
        )}
        {dashboardInformationCard(
          "Check out the Skillquiver Certs user guide",
          "An intro to how Verifiable Credentials provide tamper-proof credentials that can be instantly verified, as well as use cases and example."
        )}
        {dashboardInformationCard(
          "Create a Decentralized Identifier",
          "Decentralized Identifiers (DIDs) are unique digital identities that prove the identity of credential issuers and holders."
        )}
        {dashboardInformationCard(
          "Get started with our API",
          "Are you interested in building an application for issuing credentials? Check out our developer documentation to learn more."
        )}
      </div>
    </MainWrap>
  );
}
