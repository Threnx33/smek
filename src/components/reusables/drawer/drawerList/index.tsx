import { ArrowSquareDown } from "iconsax-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DRAWER_LIST_ITEMS } from "./drawerListItems";

type OpenSections = { [key: string]: boolean };

export function DrawerList() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<OpenSections>({});
  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const getBasePath = (path: string) => {
    const segments = path.split("/");
    return segments.length > 1 ? `/${segments[1]}` : "/";
  };

  return (
    <div className="flex flex-col">
      <nav className="mt-2">
        {DRAWER_LIST_ITEMS.map((item) => {
          const active =
            getBasePath(location.pathname) === getBasePath(item.to);
          return (
            <div key={item.label}>
              <Link
                to={item.to}
                className={`m-2 flex items-center rounded-lg px-4 py-4 ${
                  active
                    ? "bg-main text-white hover:bg-main-accent"
                    : "hover:bg-accent"
                }`}
                onClick={() => item.subItems && toggleSection(item.label)}
              >
                <div className="flex">
                  <img
                    src={`/drawerIcons/${
                      active ? "accent" : "simple"
                    }/${item.iconName}.svg`}
                    className="h-5 w-5"
                    alt={`${item.label} icon`}
                  />
                  <span className="mx-3 font-medium">{item.label}</span>
                </div>
                {!!item.subItems && (
                  <div className="mask mask-squircle ml-auto h-5 w-5 text-main">
                    <ArrowSquareDown
                      className="h-5 w-5"
                      color={`${active ? "white" : "grey"}`}
                    />
                  </div>
                )}
              </Link>
              {item.subItems && openSections[item.label] && (
                <div className="ml-6">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.to}
                      className={`m-2 block flex items-center rounded-lg px-4 py-2 ${
                        getBasePath(location.pathname) ===
                        getBasePath(subItem.to)
                          ? " text-foreground hover:text-main"
                          : "hover:text-accent"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
