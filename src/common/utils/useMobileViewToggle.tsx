import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const useMobileViewToggle = () => {
  const [mobileViewToggle, setMobileViewToggle] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 900) {
      setMobileViewToggle(true);
    }
    if (width > 900) {
      setMobileViewToggle(false);
    }
  }, [width]);

  return mobileViewToggle;
};

export default useMobileViewToggle;
