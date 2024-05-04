import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { FormControl, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ViewDesignerMainWrap from "../viewDesignerMainWrap";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type DesignerDrawerExtendedSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const DesignerDrawerExtendSection = ({
  title,
  children,
  className,
}: DesignerDrawerExtendedSectionProps) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="font-semibold">{title}</div>
      {children}
    </div>
  );
};

export default function ViewDesignerSettings() {
  const [orientation, setOrientation] = useState("landscape");

  const orientationItems = [
    { value: "landscape", label: "Landscape" },
    { value: "portrait", label: "Portrait" },
  ];

  return (
    <ViewDesignerMainWrap>
      <DesignerDrawerExtendWrap>
        <div className="mb-6 text-lg font-semibold">Settings</div>
        <DesignerDrawerExtendSection title="Size">
          <RadioGroup defaultValue="a4" disabled>
            <div className="mr-2 flex items-center space-x-2 space-y-0">
              <RadioGroupItem value="a4" id="a4" />
              <Label className="text-gray-400" htmlFor="a4">
                A4
              </Label>
            </div>
          </RadioGroup>
        </DesignerDrawerExtendSection>
        <Separator className="my-6" />
        <DesignerDrawerExtendSection title="Orientation">
          <RadioGroup
            onValueChange={(value) => setOrientation(value)}
            value={orientation}
            className={`flex flex-col gap-6 `}
          >
            {orientationItems.map((item) => (
              <div
                key={item.value}
                className="mr-2 flex items-center space-x-2 space-y-0"
              >
                <RadioGroupItem value={item.value} id={item.value} />
                <Label className="font-normal" htmlFor={item.value}>
                  {item.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </DesignerDrawerExtendSection>

        <Separator className="my-6" />
        <div className={`flex flex-col gap-2 `}>
          <div className="font-semibold">Background Image</div>
          <div className="text-wrap flex flex-col gap-4 text-xs">
            <div>
              If your background image is too small, it could look low quality.
              If the image is too large, it will take long to load.
            </div>
            <div>
              SD dimensions: 1123 x 794 pixels HD dimensions: 3626 x 2598 pixels
            </div>
            <Button variant="outline">Remove background image</Button>
          </div>
        </div>
      </DesignerDrawerExtendWrap>
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14">
        <img
          className="h-[590px] w-[480px]"
          src="/designer/templateImages/template1.png"
          alt="Designer Icon"
        />
      </div>
    </ViewDesignerMainWrap>
  );
}
