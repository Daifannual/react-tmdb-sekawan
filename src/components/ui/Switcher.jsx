import { useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./assets/SunIcon";
import { MoonIcon } from "./assets/MoonIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/actions/themeAction";

const Switcher = () => {

const theme = useSelector((state) => state.theme.theme);
const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

// console.log(theme);

  return (
    <Switch
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onClick={() => dispatch(toggleTheme())}
    ></Switch>
  );
};

export default Switcher;
