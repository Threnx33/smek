import DesignerAttributes from "@/pages/designer/designerAttributes";
import DesignerElements from "@/pages/designer/designerElements";
import DesignerSettings from "@/pages/designer/designerSettings";
import DesignerTemplates from "@/pages/designer/designerTemplates";

export const DESIGNER_DRAWER_LIST_ITEMS = [
  {
    iconName: "category-2",
    to: "/designer/templates",
    component: <DesignerTemplates />,
  },
  {
    iconName: "shapes",
    to: "/designer/elements",
    component: <DesignerElements />,
  },
  {
    iconName: "colors-square",
    to: "/designer/attributes",
    component: <DesignerAttributes />,
  },
  {
    iconName: "setting-2",
    to: "/designer/settings",
    component: <DesignerSettings />,
  },
];
