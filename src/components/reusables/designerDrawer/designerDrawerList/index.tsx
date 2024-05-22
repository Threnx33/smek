import { useScreen } from "@/hooks/useScreen";
import { ArrowLeft } from "iconsax-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DESIGNER_DRAWER_LIST_ITEMS } from "./designerDrawerListItems";

type OpenSections = { [key: string]: boolean };

export function DesignerDrawerList() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<OpenSections>({});
  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };
  const navigate = useNavigate();
  const { isXlDown } = useScreen();

  const getBasePath = (path: string) => {
    const segments = path.split("/");
    return segments.length > 1 ? `/${segments.splice(1).join("/")}` : "/";
  };

  return (
    <div className="">
      <nav className=" mt-2 flex flex-col items-center">
        {isXlDown && (
          <Link
            to={"/dashboard"}
            className={`m-2 flex items-center rounded-lg p-4 hover:bg-accent`}
          >
            <div className="flex ">
              <ArrowLeft color="gray" className="h-5 w-5" />
            </div>
          </Link>
        )}
        {DESIGNER_DRAWER_LIST_ITEMS.map((item) => {
          const active = getBasePath(location.pathname) === item.to;

          return (
            <div key={item.to} className="">
              <Link
                to={item.to}
                className={`m-2 flex items-center rounded-lg p-4 ${
                  active
                    ? "bg-main text-white hover:bg-main-accent"
                    : "hover:bg-accent"
                }`}
              >
                <div className="flex ">
                  <img
                    className="h-5 w-5"
                    src={`/designer/designerDrawerIcons/${active ? "accent" : "simple"}/${item.iconName}.svg`}
                    alt={`${item.iconName} icon`}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
