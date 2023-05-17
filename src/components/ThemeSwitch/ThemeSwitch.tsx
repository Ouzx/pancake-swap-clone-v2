import { useThemeContext } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

import "./ThemeSwitch.scss";
const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  const onClick = () => {
    toggleTheme();
  };

  return (
    <div onClick={onClick} className={"switch-container"}>
      <div onClick={onClick} className={"switch-container__wrapper"}>
        <input type="checkbox" checked={theme} readOnly onClick={onClick} />
        <div
          aria-checked={theme}
          onClick={onClick}
          className="switch-container__wrapper__holder"
        >
          {!theme ? (
            <FiSun
              onClick={onClick}
              size={20}
              className="switch-container__wrapper__holder__icon"
            />
          ) : (
            <FiMoon
              size={20}
              onClick={onClick}
              className="switch-container__wrapper__holder__icon"
            />
          )}
        </div>
        <FiSun
          onClick={onClick}
          size={20}
          className="switch-container__wrapper__icon --left"
        />
        <FiMoon
          onClick={onClick}
          size={20}
          className="switch-container__wrapper__icon --right"
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
