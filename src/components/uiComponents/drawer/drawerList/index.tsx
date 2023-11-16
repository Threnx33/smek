import { Link, useLocation } from "react-router-dom";
import { DRAWER_LIST_ITEMS } from "./drawerListItems";

export function DrawerList() {
  const location = useLocation();

  const getBasePath = (path: string) => {
    const segments = path.split("/");
    return segments.length > 1 ? `/${segments[1]}` : "/";
  };

  return (
    <div className="flex flex-col">
      <nav className="mt-2">
        {DRAWER_LIST_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center m-2 px-4 py-4 rounded-lg  ${
              getBasePath(location.pathname) === getBasePath(item.to)
                ? "bg-main text-white hover:bg-main-accent"
                : "hover:bg-accent"
            }`}
          >
            <img
              src={`/drawerIcons/${
                getBasePath(location.pathname) === getBasePath(item.to)
                  ? "accent"
                  : "simple"
              }/${item.iconName}.svg`}
              className="h-5 w-5"
              alt={`${item.label} icon`}
            />

            <span className="mx-3 font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
