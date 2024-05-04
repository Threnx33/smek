import { DesignerDrawerExtendWrap } from "@/components/reusables/designerDrawerExtendWrap";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ViewDesignerMainWrap from "../viewDesignerMainWrap";
import { set } from "date-fns";

export default function ViewDesignerTemplates() {
  const [orientation, setOrientation] = useState("landscape");
  const [currentTab, setCurrentTab] = useState("a4Landscape");
  const [selectedTemplate, setSelectedTemplate] = useState(
    "/designer/templateImages/landscapeContent1.png",
  );
  const [nrOfTemplatesToShow, setNrOfTemplatesToShow] = useState(4);

  return (
    <ViewDesignerMainWrap>
      <DesignerDrawerExtendWrap>
        <div className="mb-6 text-lg font-semibold">Templates</div>
        <Tabs defaultValue="a4Landscape">
          <TabsList className="mb-4 p-0">
            <div className="flex w-full gap-1 rounded-lg border p-1.5">
              <TabsTrigger
                onClick={() => {
                  setSelectedTemplate(
                    "/designer/templateImages/landscapeContent1.png",
                  );
                  setCurrentTab("a4Landscape");
                }}
                value="a4Landscape"
                className={`min-w-[7rem] rounded-lg border-none text-xs`}
              >
                A4 Landscape
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setSelectedTemplate(
                    "/designer/templateImages/portraitContent1.png",
                  );
                  setCurrentTab("a4Portrait");
                }}
                value="a4Portrait"
                className={`min-w-[7rem] rounded-lg border-none text-xs`}
              >
                A4 Portrait
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="a4Landscape" className=" flex flex-col gap-2.5">
            {[...Array(nrOfTemplatesToShow)].map((_, i) => {
              const imgSrc =
                i === 0
                  ? `/designer/templateImages/landscapeWhite.png`
                  : `/designer/templateImages/landscapeContent${i}.png`;
              return (
                <div
                  key={i}
                  className={`flex h-[8.5rem] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cLightGreyStroke px-10 py-2
                  ${imgSrc === selectedTemplate && "border-2 border-main"}`}
                  onClick={() => setSelectedTemplate(imgSrc)}
                >
                  <img
                    className="h-[7.4rem] w-auto"
                    src={imgSrc}
                    alt="landscape image"
                  />
                </div>
              );
            })}
            <Button
              onClick={() => {
                if (nrOfTemplatesToShow === 4) {
                  setNrOfTemplatesToShow(6);
                } else {
                  setNrOfTemplatesToShow(4);
                }
              }}
              variant="outline"
            >
              {nrOfTemplatesToShow === 4
                ? "See all landscape templates"
                : "See less landscape templates"}
            </Button>
          </TabsContent>

          <TabsContent value="a4Portrait" className=" flex flex-col gap-2.5">
            {[...Array(nrOfTemplatesToShow)].map((_, i) => {
              const imgSrc =
                i === 0
                  ? `/designer/templateImages/portraitWhite.png`
                  : `/designer/templateImages/portraitContent${i}.png`;
              return (
                <div
                  key={i}
                  className={`flex h-[8.5rem] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cLightGreyStroke px-10 py-2
                   ${imgSrc === selectedTemplate && "border-2 border-main"}`}
                  onClick={() => setSelectedTemplate(imgSrc)}
                >
                  <img
                    className="h-[7.4rem] w-auto"
                    src={imgSrc}
                    alt="portrait image"
                  />
                </div>
              );
            })}
            <Button
              onClick={() => {
                if (nrOfTemplatesToShow === 4) {
                  setNrOfTemplatesToShow(6);
                } else {
                  setNrOfTemplatesToShow(4);
                }
              }}
              variant="outline"
            >
              {nrOfTemplatesToShow === 4
                ? "See all portrait templates"
                : "See less portrait templates"}
            </Button>
          </TabsContent>
        </Tabs>

        <Separator className="my-6" />
        <div className={`flex flex-col gap-2 `}>
          <div className="font-semibold">Import PDF</div>
          <div className="text-wrap flex flex-col gap-4 text-xs">
            <div>
              If you have a PDF file you wish to use, you can convert it to a
              design below. A4 page size only with 3mb file limit.
            </div>
            <Button variant="outline">Import PDF Credential</Button>
          </div>
        </div>
      </DesignerDrawerExtendWrap>
      <div className="flex min-h-full flex-grow flex-col items-center bg-cLightGreyBg p-3 md:p-14">
        <img
          className={`${currentTab === "a4Landscape" ? "h-[480px] w-[590px]" : "h-[590px] w-[480px]"}`}
          src={selectedTemplate}
          alt="Designer Icon"
        />
      </div>
    </ViewDesignerMainWrap>
  );
}
