import React, { useState } from "react";
import { ViewSelectSchema } from "./selectSchema";
import { ViewSelectDesign } from "./selectSchemaDesign";
import { ViewSchemaAddReceipt } from "./addReceipt";
import { MainWrap } from "@/components/reusables/mainWrap";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type TabSectionProps = {
  index: number;
  title: string;
};

export function ViewSchemaTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const TabSection = ({ index, title }: TabSectionProps) => {
    return (
      <div
        className="flex  items-center gap-3 "
        onClick={() => setActiveTab(index)}
      >
        {index > 1 && (
          <div
            className={`h-[0.01rem] w-8 border ${activeTab === index && "border-main"} ${activeTab > index && "border-checked"}`}
          ></div>
        )}
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${activeTab === index && "border-main"} ${activeTab > index && "border-checked bg-checked"}`}
        >
          <Check color="white" className="h-5 w-5" />
        </div>
        <div
          className={`text-sm  ${activeTab === index && "text-main "} ${activeTab > index && "text-checked"}`}
        >
          {title}
        </div>
      </div>
    );
  };

  return (
    <MainWrap>
      <div className="mb-4 flex items-center gap-6 overflow-y-auto rounded-xl bg-white p-6">
        <div className="flex gap-3">
          <TabSection index={1} title="Select Schema" />
          <TabSection index={2} title="Select Design" />
          <TabSection index={3} title="Add Receipt" />
          <TabSection index={4} title="Send Credentials" />
        </div>
        <div className="ml-auto flex gap-3">
          <Button
            onClick={() => {
              if (activeTab <= 1) return;
              setActiveTab(activeTab - 1);
            }}
            variant="outline"
          >
            {activeTab <= 1 ? "Cancel" : "Back"}
          </Button>
          <Button
            onClick={() => {
              if (activeTab === 4) return;
              setActiveTab(activeTab + 1);
            }}
          >
            {activeTab <= 3 ? "Next" : "Save"}
          </Button>
        </div>
      </div>

      <div className="">
        {activeTab === 1 && <ViewSelectSchema />}
        {activeTab === 2 && <ViewSelectDesign />}
        {activeTab === 3 && <ViewSchemaAddReceipt />}
        {activeTab === 4 && <div>Send Credentials</div>}
      </div>
    </MainWrap>
  );
}
