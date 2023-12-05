import React from "react";
// import APPLY_LIGHT_THEME from "./LIGHT-THEME";
// import APPLY_DARK_THEME from "./LIGHT-THEME";

const ThemeSelector = ({ children }) => {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem("theme")
  );

  React.useEffect(() => {}, [theme]);

  function updateTheme(theme) {
    // switch (theme) {
    //   case "LIGHT_MODE":
    //     APPLY_LIGHT_THEME();
    //     break;
    //   case "DARK_MODE":
    //     APPLY_DARK_THEME();
    //     break;
    //   default:
    //     APPLY_LIGHT_THEME();
    //     break;
    // }
  }

  React.useEffect(() => {
    updateTheme(window.localStorage.getItem("theme"));
    setTheme(window.localStorage.getItem("theme"));
    window.addEventListener("storage", () => {
      updateTheme(window.localStorage.getItem("theme"));
      setTheme(window.localStorage.getItem("theme"));
    });
  }, []);

  return <></>;
};

export default ThemeSelector;
