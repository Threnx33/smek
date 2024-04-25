import ViewDesignerElements from "@/components/views/viewDesigner/viewDesignerElements";
import ViewDesignerTemplates from "@/components/views/viewDesigner/viewDesignerTemplate";
import ViewDesigner from "@/components/views/viewDesigner/viewDesignerTemplate";
import { Category2, ColorsSquare, Setting2, Shapes } from "iconsax-react";

export const DESIGNER_DRAWER_LIST_ITEMS = [
  {
    iconName: "category-2",
    to: "/designer/templates",
    component: <ViewDesignerTemplates />,
  },
  {
    iconName: "shapes",
    to: "/designer/elements",
    component: <ViewDesignerElements />,
  },
  {
    iconName: "colors-square",
    to: "/designer/edit",
    component: <ViewDesigner />,
  },
  {
    iconName: "setting-2",
    to: "/designer/settings",
    component: <ViewDesigner />,
  },
];
