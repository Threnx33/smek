import ViewDesignerAttributes from "@/components/views/viewDesigner/viewDesignerAttributes";
import ViewDesignerElements from "@/components/views/viewDesigner/viewDesignerElements";
import ViewDesignerSettings from "@/components/views/viewDesigner/viewDesignerSettings";
import ViewDesignerTemplates from "@/components/views/viewDesigner/viewDesignerTemplates";
import ViewDesigner from "@/components/views/viewDesigner/viewDesignerTemplates";
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
    to: "/designer/attributes",
    component: <ViewDesignerAttributes />,
  },
  {
    iconName: "setting-2",
    to: "/designer/settings",
    component: <ViewDesignerSettings />,
  },
];
