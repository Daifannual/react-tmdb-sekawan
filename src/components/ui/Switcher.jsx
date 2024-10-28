import { useEffect } from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/actions/themeAction";

const ThemeSwitch = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch({
    isSelected: theme === "dark", // Menentukan nilai isSelected berdasarkan theme
    onChange: () => dispatch(toggleTheme()), // Toggle theme saat diubah
    ...props
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              isSelected ? "bg-zinc-200" : "bg-gray-200",
              "rounded-lg text-zinc-500 hover:bg-default-200",
            ],
          })}
          style={{
            backgroundColor: isSelected ? "#1e2021" : "#ffffff", // Kuning untuk "on", abu-abu untuk "off"
            borderColor: "transparent" // Menghilangkan border biru
          }}
        >
          {isSelected ? <MoonIcon /> : <SunIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
