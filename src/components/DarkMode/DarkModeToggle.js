import React from "react";

import Toggle from "./Toggle";
import useDarkMode from "use-dark-mode";
import { WiMoonAltNew, WiMoonAltFull } from "react-icons/wi";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <WiMoonAltFull type="buton" onClick={darkMode.disable}></WiMoonAltFull>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <WiMoonAltNew type="button" onClick={darkMode.enable}></WiMoonAltNew>
    </div>
  );
};

export default DarkModeToggle;
