import { MainWrap } from "@/components/reusables/mainWrap";
import { PlanAndBillingWrapper } from "./sections/PlanAndBillingWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

interface PlanCardProps {
  title: string;
  price?: string;
  features: string[];
  commitment?: string;
  buttonText: string;
  monthly?: boolean;
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  commitment,
  buttonText,
  selectedPlan,
  setSelectedPlan,
}) => {
  return (
    <Card className="flex flex-col px-6 py-4">
      <div className="mb-2 text-xl font-semibold">{title}</div>
      {price && (
        <div className="mb-2">
          <span className="text-2xl font-bold">${price}</span>
          <span className="mx-1.5 text-lg">/</span>
          <span className="text-lg">mo</span>
        </div>
      )}
      {commitment && (
        <div
          className={`mb-2 ${title === "Custom Plan" ? "text-2xl font-light" : "text-sm"}`}
        >
          {commitment}
        </div>
      )}
      <ul className="mb-5 mt-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="mt-3 flex items-center text-sm">
            <img
              className="mr-2 h-5 w-5"
              src="/tickCircleGreen.svg"
              alt="TickCirlceIcon"
            />
            <span>{feature}</span>
          </div>
        ))}
      </ul>
      <Button
        onClick={() => setSelectedPlan(title)}
        className={`mt-4`}
        variant={selectedPlan === title ? "outline" : "default"}
      >
        {selectedPlan === title ? "Your current plan" : buttonText}
      </Button>
    </Card>
  );
};

export function ViewPlanAndBilling() {
  const [currentTab, setCurrentTab] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>("Free Trial");

  return (
    <MainWrap>
      <Tabs defaultValue="monthly" className="flex flex-grow flex-col">
        <div className="flex">
          <div>
            <div className="mb-2 select-none text-2xl font-semibold">
              Plan & Billing
            </div>
            <div className=" mb-5 w-10/12 select-none xl:w-8/12">
              Select any plans that fits your needs. We have plan selections for
              smaller or larger organizations
            </div>
          </div>
          <TabsList className="ml-auto">
            <div className="hidden md:flex">
              <TabsTrigger
                onClick={() => setCurrentTab("monthly")}
                value="monthly"
                className={`min-w-[11rem] rounded-l-lg`}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setCurrentTab("yearly")}
                value="yearly"
                className={`min-w-[11rem] rounded-r-lg `}
              >
                Yearly (Save 10%)
              </TabsTrigger>
            </div>
            <div className="shrink-0 md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto shrink-0 px-3 xl:hidden"
                  >
                    <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="flex flex-col">
                  <TabsTrigger
                    onClick={() => setCurrentTab("monthly")}
                    value="monthly"
                    className={`min-w-[11rem] border-none`}
                  >
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => setCurrentTab("yearly")}
                    value="yearly"
                    className={`min-w-[11rem] border-none`}
                  >
                    Yearly (Save 10%)
                  </TabsTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TabsList>
        </div>
        <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
          <TabsContent value="yearly" className="mb-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              <PlanCard
                title="Free Trial"
                commitment="Try our features for free with a 14-day trial on our testing environment and assess whether they meet your requirements"
                features={[
                  "1 Organization Profile",
                  "Credential template designer",
                  "Create credential schemas",
                  "Test only environment",
                  "Email support",
                  "API access",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Start Free Trial"
              />

              <PlanCard
                title="Starter Plan"
                price="89"
                commitment="billed yearly"
                features={[
                  "Up to 100 credentials per month",
                  "Unlimited test credentials",
                  "Revoke credentials",
                  "Production environment",
                  "Encrypted credential backup",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Upgrade to Starter"
              />

              <PlanCard
                title="Business Plan"
                price="449"
                commitment="billed yearly"
                features={[
                  "Up to 550 credentials per month",
                  "10 Organization profiles",
                  "Branded mobile wallet",
                  "Anonymous credentials",
                  "Slack support",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Upgrade to Business"
              />
              <PlanCard
                title="Custom Plan"
                commitment="Talk to us"
                features={[
                  "1000+ credentials per month",
                  "Unlimited organization profiles",
                  "Mobile wallet SDK support",
                  "Priority support",
                  "SLA & service agreement",
                  "White glove onboarding",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Contact Us"
              />
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="mb-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
              <PlanCard
                title="Free Trial"
                commitment="Try our features for free with a 14-day trial on our testing environment and assess whether they meet your requirements"
                features={[
                  "1 Organization Profile",
                  "Credential template designer",
                  "Create credential schemas",
                  "Test only environment",
                  "Email support",
                  "API access",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Start Free Trial"
              />

              <PlanCard
                title="Starter Plan"
                price="99"
                commitment="billed monthly"
                features={[
                  "Up to 100 credentials per month",
                  "Unlimited test credentials",
                  "Revoke credentials",
                  "Production environment",
                  "Encrypted credential backup",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Upgrade to Starter"
              />

              <PlanCard
                title="Business Plan"
                price="499"
                commitment="billed monthly, 1 year commitment"
                features={[
                  "Up to 550 credentials per month",
                  "10 Organization profiles",
                  "Branded mobile wallet",
                  "Anonymous credentials",
                  "Slack support",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Upgrade to Business"
              />
              <PlanCard
                title="Custom Plan"
                commitment="Talk to us"
                features={[
                  "1000+ credentials per month",
                  "Unlimited organization profiles",
                  "Mobile wallet SDK support",
                  "Priority support",
                  "SLA & service agreement",
                  "White glove onboarding",
                ]}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                buttonText="Contact Us"
              />
            </div>
          </TabsContent>

          <div className="mb-4 text-sm">
            Questions? Check out our <TextMainWrap>Pricing FAQ</TextMainWrap>.
            Something not right? <TextMainWrap>Contact us</TextMainWrap>!
          </div>
        </div>
      </Tabs>
    </MainWrap>
  );
}
