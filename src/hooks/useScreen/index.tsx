import { SCREENS } from "@/components/constants/screen";
import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
  const isXlDown = useMediaQuery({ maxWidth: SCREENS.xl });
  return { isXlDown };
};
