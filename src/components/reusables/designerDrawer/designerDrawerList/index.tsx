import { Link, useLocation } from "react-router-dom";
import { DESIGNER_DRAWER_LIST_ITEMS } from "./designerDrawerListItems";
import { useState } from "react";
import ReactComponent from "/arrowSquareDown.svg";

type OpenSections = { [key: string]: boolean };

export function DesignerDrawerList() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<OpenSections>({});
  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const getBasePath = (path: string) => {
    const segments = path.split("/");
    return segments.length > 1 ? `/${segments.splice(1).join("/")}` : "/";
  };

  console.log(
    "d",
    getBasePath(location.pathname),
    location.pathname.split("/").splice(1),
  );

  return (
    <div className="flex flex-col">
      <nav className="mt-2">
        {DESIGNER_DRAWER_LIST_ITEMS.map((item) => (
          <div key={item.to}>
            <Link
              to={item.to}
              className={`m-2 flex items-center rounded-lg px-4 py-4 ${
                getBasePath(location.pathname) === item.to
                  ? "bg-main text-white hover:bg-main-accent"
                  : "hover:bg-accent"
              }`}
            >
              <div className="flex">{item.icon}</div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
