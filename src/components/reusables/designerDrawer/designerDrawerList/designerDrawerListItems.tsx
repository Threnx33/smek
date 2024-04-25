import ViewDesigner from "@/components/views/viewDesigner";
import { Category2, ColorsSquare, Setting2, Shapes } from "iconsax-react";

export const DESIGNER_DRAWER_LIST_ITEMS = [
  {
    icon: <Category2 />,
    to: "/designer/templates",
    component: <ViewDesigner />,
  },
  {
    icon: <Shapes />,
    to: "/designer/elements",
    component: <ViewDesigner />,
  },
  {
    icon: <ColorsSquare />,
    to: "/designer/edit",
    component: <ViewDesigner />,
  },
  {
    icon: <Setting2 />,
    to: "/designer/settings",
    component: <ViewDesigner />,
  },
];
